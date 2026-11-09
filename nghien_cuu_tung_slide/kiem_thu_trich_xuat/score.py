"""Score AI invoice extraction against a hand-labelled answer key.

Usage: python score.py answer_key.csv extracted/
  answer_key.csv  columns: file,field,expected   (one row per field; fee lines as line1_code, line1_amount, ...)
  extracted/      one <file>.json per invoice: {"field": "value", ...} from the AI run

Prints field-level accuracy per document type (part of the file name after the last "_")
and per field, plus every miss so the team can check it by hand.
"""
import csv, json, re, sys
from collections import defaultdict
from pathlib import Path


def norm(v):
    """Compare values the way an accountant would: ignore case, spaces and thousands separators."""
    v = str(v or '').strip().lower()
    if re.fullmatch(r'[\d.,\s]+', v):
        return re.sub(r'[.,\s]', '', v)
    return re.sub(r'\s+', ' ', v)


def score(key_rows, extracted):
    by_type, by_field, misses = defaultdict(lambda: [0, 0]), defaultdict(lambda: [0, 0]), []
    for r in key_rows:
        got = extracted.get(r['file'], {}).get(r['field'])
        ok = norm(got) == norm(r['expected'])
        kind = r['file'].rsplit('_', 1)[-1]
        for d, k in ((by_type, kind), (by_field, re.sub(r'line\d+_', 'line_', r['field']))):
            d[k][0] += ok; d[k][1] += 1
        if not ok:
            misses.append((r['file'], r['field'], r['expected'], got))
    return by_type, by_field, misses


def main(key_path, ext_dir):
    rows = list(csv.DictReader(open(key_path, encoding='utf-8')))
    extracted = {p.stem: json.load(open(p, encoding='utf-8')) for p in Path(ext_dir).glob('*.json')}
    by_type, by_field, misses = score(rows, extracted)
    total = [sum(v[0] for v in by_type.values()), sum(v[1] for v in by_type.values())]
    print(f'Overall field accuracy: {total[0]}/{total[1]} = {total[0] / total[1]:.1%}')
    for title, d in (('By document type', by_type), ('By field', by_field)):
        print(f'\n{title}')
        for k, (ok, n) in sorted(d.items()):
            print(f'  {k:<16} {ok}/{n} = {ok / n:.0%}')
    print(f'\nMisses: {len(misses)}')
    for m in misses:
        print('  ', *m)


if __name__ == '__main__':
    # self-check: separators and case are ignored, a wrong amount is counted as a miss
    t, f, m = score([{'file': 'a_pdf', 'field': 'total', 'expected': '10,230,000'},
                     {'file': 'a_pdf', 'field': 'line1_amount', 'expected': '8.000.000'}],
                    {'a_pdf': {'total': '10230000', 'line1_amount': '800,000'}})
    assert t['pdf'] == [1, 2] and len(m) == 1 and f['line_amount'] == [0, 1]
    main(*sys.argv[1:3])
