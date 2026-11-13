import { useState, type ReactNode } from 'react'
import { Tx } from './ui'
import { Bars, Columns, CountUp, Split, Units, useInView } from './charts'
import { useT, type Lang } from './i18n'
import { roi } from './roi'
import { scrollToEl } from './smooth'

type L = { en: string; vi: string }
type Evidence = 'cited' | 'assumption' | 'simulated'

const EVIDENCE: Record<Evidence, L> = {
  cited: { en: 'Cited', vi: 'Có nguồn' },
  assumption: { en: 'Assumption', vi: 'Giả định' },
  simulated: { en: 'Simulated', vi: 'Giả lập' },
}

// Numbered references; [n] in the copy points here.
const SOURCES: { title: L; url: string }[] = [
  { title: { en: 'Ministry of Industry and Trade. Vietnam Logistics Report 2025 (VLA estimate p. 74–75; survey of 202 organisations p. 94–98; digital integration p. 174–175).', vi: 'Bộ Công Thương. Báo cáo Logistics Việt Nam 2025 (ước tính VLA tr. 74–75; khảo sát 202 đơn vị tr. 94–98; tích hợp số tr. 174–175).' }, url: 'https://proship.vn/wp-content/uploads/2026/03/Bao-cao-Logistics-Viet-Nam-2025.pdf' },
  { title: { en: 'General Statistics Office. Socio-economic situation, October and ten months of 2026.', vi: 'Cục Thống kê. Tình hình kinh tế – xã hội tháng 10 và 10 tháng năm 2026.' }, url: 'https://www.nso.gov.vn/bai-top/2026/11/mot-so-net-chinh-tinh-hinh-kinh-te-xa-hoi-thang-10-va-10-thang-nam-2026/' },
  { title: { en: 'Ocean Network Express Vietnam. Customer advisory for surcharges, effective 1 April 2026.', vi: 'Ocean Network Express Việt Nam. Thông báo phụ phí, hiệu lực 01/04/2026.' }, url: 'https://vn.one-line.com/sites/vietnam/files/2026-03/Customer%20Advisory%20for%20Surcharge%20-%20Vietnam.pdf' },
  { title: { en: 'Maersk. Terminal handling charges Vietnam (OHC/DHC), effective 1 May 2026.', vi: 'Maersk. Phí làm hàng tại cảng Việt Nam (OHC/DHC), hiệu lực 01/05/2026.' }, url: 'https://www.maersk.com/news/articles/2026/03/31/terminal-handling-charges-vietnam-ohc-dhc' },
  { title: { en: 'Lacco Logistics. Documentation staff job description, Ho Chi Minh City (debit note hand-over to accounting).', vi: 'Lacco Logistics. Mô tả công việc nhân viên chứng từ tại TP.HCM (bàn giao debit note cho kế toán).' }, url: 'https://lacco.com.vn/tuyen-dung/tuyen-dung-nhan-vien-chung-tu-xuat-nhap-khau-tai-tp-hcm' },
  { title: { en: 'Flexport. Job description: checking carrier charges against contract, rate and shipment.', vi: 'Flexport. Mô tả công việc kiểm tra phí theo hợp đồng, giá và lô.' }, url: 'https://job-boards.greenhouse.io/flexport/jobs/7660304' },
  { title: { en: 'CMA CGM Vietnam. Invoice dispute requests on MyCS.', vi: 'CMA CGM Việt Nam. Yêu cầu tranh chấp hóa đơn qua MyCS.' }, url: 'https://www.cma-cgm.com/local/vietnam/news/224/notice-of-invoice-dispute-team-s-email-address-deactivation-amp-invoice-dispute-request-on-mycs' },
  { title: { en: 'Maersk Vietnam. Import: local charge invoices, delivery orders, demurrage and detention.', vi: 'Maersk Việt Nam. Hàng nhập: hóa đơn phí địa phương, lệnh giao hàng, lưu container.' }, url: 'https://www.maersk.com/local-information/asia-pacific/vietnam/import' },
  { title: { en: 'U.S. GSA. Transportation invoice audit (duplicate payments, rate checks).', vi: 'GSA Hoa Kỳ. Kiểm tra hóa đơn vận tải (chi trùng, kiểm tra giá).' }, url: 'https://www.gsa.gov/policy-regulations/policy/transportation-management-policy/transportation-invoice-audit' },
  { title: { en: 'Movago project brief: MVP scope, pilot plan and illustrative ROI scenario (team Odylytics, internal document, 08/11/2026).', vi: 'Brief dự án Movago: phạm vi MVP, kế hoạch pilot và kịch bản ROI minh họa (đội Odylytics, tài liệu nội bộ, 08/11/2026).' }, url: '' },
  { title: { en: 'Vietnam Logistics Business Association (VLA) and HCMC Logistics Association (HLA) member directories.', vi: 'Danh bạ hội viên Hiệp hội Doanh nghiệp Dịch vụ Logistics Việt Nam (VLA) và Hiệp hội Logistics TP.HCM (HLA).' }, url: 'https://vla.com.vn/danh-sach-hoi-vien/' },
  { title: { en: 'Personal Data Protection Law 91/2025/QH15 and Decree 356/2025/NĐ-CP.', vi: 'Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 và Nghị định 356/2025/NĐ-CP.' }, url: 'https://vanban.chinhphu.vn/?docid=214590&pageid=27160' },
  { title: { en: 'Decree 254/2026/NĐ-CP and Circular 91/2026/TT-BTC on invoices and documents.', vi: 'Nghị định 254/2026/NĐ-CP và Thông tư 91/2026/TT-BTC về hóa đơn, chứng từ.' }, url: 'https://vanban.chinhphu.vn/?classid=1&docid=218689&pageid=27160&typegroupid=4' },
  { title: { en: 'Existing tools: G.O.L SMS Live, Innomation AutoMatching, ShipCheck, Conlio, BravoTran (public product pages).', vi: 'Giải pháp hiện có: G.O.L SMS Live, Innomation AutoMatching, ShipCheck, Conlio, BravoTran (trang sản phẩm công khai).' }, url: 'https://innomation.vn/product/automatching' },
]

function Ref({ n }: { n: number }) {
  return <a className="ref" href={`#src-${n}`} onClick={(e) => { e.preventDefault(); scrollToEl(document.getElementById(`src-${n}`), { center: true }) }}>[{n}]</a>
}

function StatCard({ tag, evidence, num, claim, chart, source, wide }: {
  tag: string; evidence: Evidence; num: (show: boolean) => ReactNode; claim: ReactNode; chart?: (show: boolean) => ReactNode; source: ReactNode; wide?: boolean
}) {
  const [ref, show] = useInView<HTMLElement>(0.35)
  const { lang } = useT()
  return (
    <article ref={ref} className={`stat-card ${wide ? 'wide' : ''}`}>
      <div className="stat-top"><span className="stat-tag">{tag}</span><span className={`ev ev-${evidence}`}>{EVIDENCE[evidence][lang]}</span></div>
      <div className="stat-num">{num(show)}</div>
      <p className="stat-claim">{claim}</p>
      {chart?.(show)}
      <p className="source">{source}</p>
    </article>
  )
}

export default function Business() {
  const { lang, money } = useT()
  const tx = (x: L) => x[lang]
  const loc = lang === 'en' ? 'en-US' : 'vi-VN'
  const m = (n: number) => new Intl.NumberFormat(loc, { maximumFractionDigits: 2 }).format(n)
  const mil = (n: number) => (lang === 'en' ? `${m(n)}M ₫` : `${m(n)} triệu đ`)

  return (
    <div className="biz">
      <header className="wrap biz-head">
        <h1><Tx v={{ en: 'The business case for Movago', vi: 'Bài toán kinh doanh của Movago' }} /></h1>
        <p className="sub">
          {tx({
            en: 'Where freight money leaks, what Movago charges, when it pays back, and how we start in Vietnam. Market and rate figures are cited; ROI figures are stated assumptions that a pilot must measure.',
            vi: 'Tiền cước thất thoát ở đâu, Movago thu phí thế nào, khi nào hoàn vốn và cách bắt đầu tại Việt Nam. Số liệu thị trường và biểu phí có nguồn; số ROI là giả định cần đo trong pilot.',
          })}
        </p>
        <div className="ev-legend">
          {(['cited', 'assumption', 'simulated'] as const).map((e) => <span key={e} className={`ev ev-${e}`}><Tx v={EVIDENCE[e]} /></span>)}
        </div>
      </header>

      {/* 1 · numbers */}
      <section className="wrap section" aria-labelledby="b-num">
        <h2 id="b-num"><Tx v={{ en: 'The problem in numbers', vi: 'Bài toán qua con số' }} /></h2>
        <div className="stats">
          <StatCard
            tag={tx({ en: 'VN · Market', vi: 'VN · Thị trường' })} evidence="cited"
            num={(s) => <>{lang === 'en' ? '4,000–' : '4.000–'}<CountUp from={4000} to={4500} locale={loc} start={s} /></>}
            claim={tx({ en: 'freight-forwarding companies operate in Vietnam, with Ho Chi Minh City a main hub. Each pays carriers and agents against invoices someone has to check.', vi: 'doanh nghiệp giao nhận đang hoạt động tại Việt Nam, TP.HCM là địa bàn tập trung. Mỗi doanh nghiệp trả cước cho hãng tàu và đại lý theo hóa đơn cần có người kiểm tra.' })}
            source={<><Tx v={{ en: 'VLA estimate cited in MOIT, Vietnam Logistics Report 2025, p. 74–75.', vi: 'Ước tính của VLA trong Báo cáo Logistics Việt Nam 2025, tr. 74–75.' }} /> <Ref n={1} /></>}
          />
          <StatCard
            tag={tx({ en: 'VN · Cost pressure', vi: 'VN · Áp lực chi phí' })} evidence="cited"
            num={(s) => <><CountUp to={3.23} decimals={2} locale={loc} start={s} /><small>/5</small></>}
            claim={tx({ en: 'is how hard rising logistics costs press on business, scored by both users and providers in a survey of 202 organisations.', vi: 'là mức áp lực tăng chi phí logistics do cả bên sử dụng và bên cung cấp dịch vụ chấm, trong khảo sát 202 đơn vị.' })}
            chart={(s) => (
              <>
                <Bars show={s} label="Cost pressure 3.23 out of 5" axis={['0', '1', '2', '3', '4', '5']}
                  rows={[{ label: tx({ en: 'Cost pressure score', vi: 'Điểm áp lực chi phí' }), value: `${m(3.23)} / 5`, pct: 64.6, tone: 'blue' }]} />
                <Split show={s} label="Respondents: 161 users, 41 providers"
                  parts={[{ label: tx({ en: '161 logistics users', vi: '161 bên sử dụng' }), pct: 79.7, tone: 'navy' }, { label: tx({ en: '41 providers', vi: '41 bên cung cấp' }), pct: 20.3, tone: 'muted' }]} />
              </>
            )}
            source={<><Tx v={{ en: 'MOIT, Vietnam Logistics Report 2025, p. 94–98.', vi: 'Bộ Công Thương, Báo cáo Logistics Việt Nam 2025, tr. 94–98.' }} /> <Ref n={1} /></>}
          />
          <StatCard
            tag={tx({ en: 'VN · Trade', vi: 'VN · Thương mại' })} evidence="cited"
            num={(s) => <><CountUp to={1010.55} decimals={2} prefix="$" locale={loc} start={s} /><small><Tx v={{ en: 'B', vi: ' tỷ' }} /></small></>}
            claim={tx({ en: 'of goods imported and exported in the first ten months of 2026, up 32.3% on a year earlier. More trade means more freight invoices to check before payment.', vi: 'kim ngạch xuất nhập khẩu hàng hóa 10 tháng năm 2026, tăng 32,3% so với cùng kỳ. Thương mại tăng kéo theo nhiều hóa đơn cước cần kiểm tra trước khi chi.' })}
            chart={(s) => (
              <Bars show={s} label="Ten-month trade value 2026 versus 2025" axis={['0', '300', '600', '900', '1,200']}
                rows={[
                  { label: tx({ en: 'Jan–Oct 2026', vi: '10 tháng 2026' }), value: `$${m(1010.55)}B`, pct: 84.2, tone: 'blue' },
                  { label: tx({ en: 'Jan–Oct 2025 (derived from +32.3%)', vi: '10 tháng 2025 (suy từ +32,3%)' }), value: `≈ $${m(763.8)}B`, pct: 63.7, tone: 'muted' },
                ]} />
            )}
            source={<><Tx v={{ en: 'General Statistics Office, October 2026 report. The 2025 bar is computed from the growth rate.', vi: 'Cục Thống kê, báo cáo tháng 10/2026. Cột 2025 được tính từ tốc độ tăng.' }} /> <Ref n={2} /></>}
          />
          <StatCard
            tag={tx({ en: 'VN · Same fee code', vi: 'VN · Cùng mã phí' })} evidence="cited"
            num={(s) => <CountUp to={60} prefix="+" suffix="%" locale={loc} start={s} />}
            claim={tx({ en: 'more for ONE’s destination THD on a 40ft dry container than on a 20ft one. Reading the number right is not enough: the container type decides the price.', vi: 'là mức chênh phí THD đầu nhập của ONE giữa container khô 40 feet và 20 feet. Đọc đúng số chưa đủ: loại container quyết định mức giá.' })}
            chart={(s) => (
              <Bars show={s} label="THD and DHC by container size" axis={['0', '2M', '4M', '6M']}
                rows={[
                  { label: "ONE THD · 20' DRY", value: mil(3), pct: 50, tone: 'navy' },
                  { label: "ONE THD · 40' DRY", value: mil(4.8), pct: 80, tone: 'blue' },
                  { label: "Maersk DHC · 20' DRY", value: mil(3.25), pct: 54.2, tone: 'navy' },
                  { label: "Maersk DHC · 40' DRY", value: mil(5), pct: 83.3, tone: 'blue' },
                ]} />
            )}
            source={<><Tx v={{ en: 'ONE Vietnam advisory from 01/04/2026; Maersk DHC Vietnam from 01/05/2026.', vi: 'Thông báo ONE Việt Nam từ 01/04/2026; DHC Maersk Việt Nam từ 01/05/2026.' }} /> <Ref n={3} /> <Ref n={4} /></>}
          />
          <StatCard
            tag={tx({ en: 'Demo · INV-095', vi: 'Demo · INV-095' })} evidence="simulated"
            num={(s) => <CountUp to={800000} prefix="+" suffix={lang === 'en' ? ' ₫' : ' đ'} locale={loc} start={s} />}
            claim={tx({ en: 'on a single documentation fee. The invoice adds up, so a sum check passes. Only comparing the line with RATE-V3 line 12 finds it. Each square is 100,000 ₫.', vi: 'trên một dòng phí chứng từ. Hóa đơn cộng đúng nên kiểm tra tổng vẫn qua. Chỉ khi so dòng với RATE-V3 dòng 12 mới thấy. Mỗi ô là 100.000 đ.' })}
            chart={(s) => <Units show={s} total={13} on={5} cols={13} label="13 squares: 5 approved, 8 over the approved rate" legend={[tx({ en: 'Approved 500,000', vi: 'Đã duyệt 500.000' }), tx({ en: 'Over 800,000', vi: 'Vượt 800.000' })]} />}
            source={tx({ en: 'Movago simulated case. Not pilot data.', vi: 'Ca giả lập của Movago, không phải dữ liệu pilot.' })}
          />
          <StatCard
            tag={tx({ en: 'Pilot · Decision rule', vi: 'Pilot · Ngưỡng quyết định' })} evidence="assumption"
            num={(s) => <><small>≥</small><CountUp to={30} suffix="%" locale={loc} start={s} /></>}
            claim={tx({ en: 'cut in median handling minutes per in-scope invoice is the threshold we propose to agree with the buyer before the pilot, alongside evidence for every money alert.', vi: 'giảm phút thao tác trung vị trên mỗi hóa đơn trong phạm vi là ngưỡng đề xuất thống nhất với người mua trước pilot, cùng yêu cầu mọi cảnh báo tiền đều mở được căn cứ.' })}
            chart={(s) => (
              <Bars show={s} label="Pilot threshold 30 percent versus illustrative 40 percent" axis={['0%', '25%', '50%']}
                rows={[
                  { label: tx({ en: 'Pilot threshold', vi: 'Ngưỡng pilot' }), value: '30%', pct: 60, tone: 'navy' },
                  { label: tx({ en: 'Illustrative scenario · 15 → 9 min', vi: 'Kịch bản minh họa · 15 → 9 phút' }), value: '40%', pct: 80, tone: 'blue' },
                ]} />
            )}
            source={<><Tx v={{ en: 'Movago project brief, pilot section.', vi: 'Brief dự án Movago, mục pilot.' }} /> <Ref n={10} /></>}
          />
        </div>
      </section>

      {/* 2 · economic problems */}
      <section className="wrap section split" aria-labelledby="b-econ">
        <div>
          <h2 id="b-econ"><Tx v={{ en: 'Economic problems Movago addresses', vi: 'Vấn đề kinh tế Movago giải quyết' }} /></h2>
          <p className="sub"><Tx v={{ en: 'Ranked by what we test first. Each one names its cost, what Movago does, and how a pilot proves it.', vi: 'Xếp theo thứ tự kiểm chứng. Mỗi vấn đề nêu chi phí, việc Movago làm và cách pilot chứng minh.' }} /></p>
        </div>
        <ol className="econ">
          {ECON.map((e) => (
            <li key={e.title.en}>
              <div className="econ-head"><span className={`prio prio-${e.prio}`}>{e.prio === 'x' ? tx({ en: 'Expansion', vi: 'Mở rộng' }) : e.prio.toUpperCase()}</span><h3><Tx v={e.title} /></h3></div>
              <dl>
                <dt><Tx v={{ en: 'Cost', vi: 'Chi phí' }} /></dt><dd><Tx v={e.cost} /> {e.refs.map((r) => <Ref key={r} n={r} />)}</dd>
                <dt>Movago</dt><dd><Tx v={e.does} /></dd>
                <dt><Tx v={{ en: 'Measured by', vi: 'Đo bằng' }} /></dt><dd><Tx v={e.measure} /></dd>
              </dl>
            </li>
          ))}
        </ol>
      </section>

      {/* 3 · business model */}
      <section className="wrap section split" aria-labelledby="b-model">
        <div>
          <h2 id="b-model"><Tx v={{ en: 'Business model', vi: 'Mô hình kinh doanh' }} /></h2>
          <p className="sub"><Tx v={{ en: 'A hypothesis to validate with buyers, not a price list. We pilot before we price.', vi: 'Giả thuyết cần kiểm chứng với người mua, chưa phải bảng giá. Pilot trước, định giá sau.' }} /></p>
          <span className="ev ev-assumption" style={{ marginTop: 16 }}><Tx v={EVIDENCE.assumption} /></span>
        </div>
        <ul className="rows model">
          {MODEL.map((r) => (
            <li key={r.k.en}><div><h3><Tx v={r.k} /></h3><p><Tx v={r.v} /> {r.refs?.map((n) => <Ref key={n} n={n} />)}</p></div></li>
          ))}
        </ul>
      </section>

      {/* 4 · ROI */}
      <RoiSection tx={tx} loc={loc} money={money} lang={lang} />

      {/* 5 · Vietnam roadmap */}
      <section className="wrap section split" aria-labelledby="b-vn">
        <div>
          <h2 id="b-vn"><Tx v={{ en: 'Direction in Vietnam', vi: 'Định hướng tại Việt Nam' }} /></h2>
          <p className="sub"><Tx v={{ en: 'Start narrow in Ho Chi Minh City, prove it on real files, then widen document types and integrations as customers ask.', vi: 'Bắt đầu hẹp tại TP.HCM, chứng minh trên hồ sơ thật, rồi mở rộng loại chứng từ và tích hợp theo nhu cầu khách hàng.' }} /></p>
          <p className="note"><Tx v={{ en: 'Why Vietnam first: VND invoices with Vietnamese–English fee names, carriers that publish local rate notices, and a dense forwarder base in HCMC.', vi: 'Vì sao bắt đầu ở Việt Nam: hóa đơn VND với tên phí Việt–Anh, hãng tàu công bố biểu phí địa phương và mật độ forwarder cao ở TP.HCM.' }} /></p>
        </div>
        <ol className="numbered roadmap">
          {ROADMAP.map((r) => (
            <li key={r.t.en}><div><span className="when"><Tx v={r.when} /></span><strong><Tx v={r.t} /></strong><span><Tx v={r.b} /> {r.refs?.map((n) => <Ref key={n} n={n} />)}</span></div></li>
          ))}
        </ol>
      </section>

      {/* 6 · sources */}
      <section className="wrap section" aria-labelledby="b-src">
        <h2 id="b-src"><Tx v={{ en: 'Sources', vi: 'Nguồn' }} /></h2>
        <p className="sub"><Tx v={{ en: 'Links accessed 8 November 2026. Figures were checked against the documents cited in the project research files.', vi: 'Truy cập ngày 08/11/2026. Số liệu đối chiếu với tài liệu được dẫn trong hồ sơ nghiên cứu của dự án.' }} /></p>
        <ol className="refs">
          {SOURCES.map((s, i) => (
            <li key={i} id={`src-${i + 1}`}><span className="ref-n">{String(i + 1).padStart(2, '0')}</span>{s.url ? <a href={s.url} target="_blank" rel="noreferrer"><Tx v={s.title} /></a> : <span><Tx v={s.title} /></span>}</li>
          ))}
        </ol>
      </section>
    </div>
  )
}

function RoiSection({ tx, loc, money, lang }: { tx: (x: L) => string; loc: string; money: (n: number) => string; lang: Lang }) {
  const [ref, show] = useInView<HTMLUListElement>(0.25)
  const [chartRef, chartShow] = useInView<HTMLDivElement>(0.35)
  const [inp, setInp] = useState({ invoices: 1000, minBefore: 15, minAfter: 9, hourly: 60_000, fee: 3_000_000 })
  const r = roi(inp)
  const n = (x: number, dec = 0) => new Intl.NumberFormat(loc, { maximumFractionDigits: dec }).format(x)
  const set = (k: keyof typeof inp) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value)
    setInp((s) => ({ ...s, [k]: Number.isFinite(v) && v >= 0 ? v : 0 }))
  }
  const mUnit = lang === 'en' ? 'M ₫' : ' triệu đ'

  return (
    <section className="wrap section" aria-labelledby="b-roi">
      <div className="split">
        <div>
          <h2 id="b-roi"><Tx v={{ en: 'ROI when a forwarder uses Movago', vi: 'ROI khi doanh nghiệp dùng Movago' }} /></h2>
          <p className="sub"><Tx v={{ en: 'The illustrative scenario from our brief. Time value is capacity freed, not cash saved; confirmed avoided or recovered payments are tracked separately and never double-counted.', vi: 'Kịch bản minh họa trong brief. Giá trị thời gian là năng lực được giải phóng, không phải tiền mặt tiết kiệm; khoản tránh chi hoặc thu hồi đã xác nhận được theo dõi riêng, không tính hai lần.' }} /></p>
          <span className="ev ev-assumption" style={{ marginTop: 16 }}><Tx v={EVIDENCE.assumption} /></span>
        </div>
        <div ref={chartRef} className="roi-chart">
          <h3><Tx v={{ en: 'Monthly time value by minutes saved per invoice', vi: 'Giá trị thời gian mỗi tháng theo số phút giảm trên một hóa đơn' }} /></h3>
          <Columns show={chartShow} max={10} label="3, 6 and 9 minutes saved give 3, 6 and 9 million dong per month; 3 million dong usage cost is the break-even line"
            refLine={{ amount: 3, label: tx({ en: 'Usage cost 3M ₫ = break-even', vi: 'Chi phí sử dụng 3 triệu = hòa vốn' }) }}
            cols={[3, 6, 9].map((x) => ({ label: tx({ en: `−${x} min`, vi: `−${x} phút` }), value: `${n(x)}${mUnit}`, amount: x }))} />
          <p className="source"><Tx v={{ en: '1,000 invoices a month × minutes saved ÷ 60 × 60,000 ₫ per hour.', vi: '1.000 hóa đơn/tháng × số phút giảm ÷ 60 × 60.000 đ/giờ.' }} /></p>
        </div>
      </div>

      <ul ref={ref} className="proof">
        <li><span className="proof-num"><CountUp to={1000} locale={loc} start={show} /></span><b><Tx v={{ en: 'invoices a month', vi: 'hóa đơn mỗi tháng' }} /></b><span className="muted"><Tx v={{ en: 'scenario volume', vi: 'sản lượng giả định' }} /></span></li>
        <li><span className="proof-num">15 → <CountUp to={9} locale={loc} start={show} /></span><b><Tx v={{ en: 'minutes per invoice', vi: 'phút mỗi hóa đơn' }} /></b><span className="muted"><Tx v={{ en: 'before → with Movago', vi: 'trước → khi có Movago' }} /></span></li>
        <li><span className="proof-num"><CountUp to={100} locale={loc} start={show} /> h</span><b><Tx v={{ en: 'freed each month', vi: 'giải phóng mỗi tháng' }} /></b><span className="muted">1,000 × 6 ÷ 60</span></li>
        <li><span className="proof-num"><CountUp to={6} locale={loc} start={show} />{mUnit}</span><b><Tx v={{ en: 'time value a month', vi: 'giá trị thời gian mỗi tháng' }} /></b><span className="muted"><Tx v={{ en: '100 h × 60,000 ₫, before costs', vi: '100 giờ × 60.000 đ, trước chi phí' }} /></span></li>
        <li><span className="proof-num"><CountUp to={3} locale={loc} start={show} /> <Tx v={{ en: 'min', vi: 'phút' }} /></span><b><Tx v={{ en: 'saved per invoice to break even', vi: 'cần giảm mỗi hóa đơn để hòa vốn' }} /></b><span className="muted"><Tx v={{ en: 'at 3M ₫ monthly usage cost', vi: 'với chi phí sử dụng 3 triệu/tháng' }} /></span></li>
        <li><span className="proof-num"><CountUp to={3} locale={loc} start={show} />–<CountUp to={9} locale={loc} start={show} />{mUnit}</span><b><Tx v={{ en: 'range if savings are 3–9 min', vi: 'khoảng giá trị nếu giảm 3–9 phút' }} /></b><span className="muted"><Tx v={{ en: 'sensitivity, per month', vi: 'độ nhạy, mỗi tháng' }} /></span></li>
      </ul>

      <div className="calc-box">
        <div>
          <h3><Tx v={{ en: 'Try your own numbers', vi: 'Thử với số của bạn' }} /></h3>
          <p className="muted"><Tx v={{ en: 'Edit any field. Nothing is sent anywhere.', vi: 'Sửa bất kỳ ô nào. Không có dữ liệu nào được gửi đi.' }} /></p>
          <div className="calc-grid">
            <label className="field"><Tx v={{ en: 'Invoices per month', vi: 'Hóa đơn mỗi tháng' }} /><input type="number" min={0} step={50} value={inp.invoices} onChange={set('invoices')} /></label>
            <label className="field"><Tx v={{ en: 'Minutes per invoice today', vi: 'Phút mỗi hóa đơn hiện tại' }} /><input type="number" min={0} step={1} value={inp.minBefore} onChange={set('minBefore')} /></label>
            <label className="field"><Tx v={{ en: 'Minutes with Movago', vi: 'Phút khi có Movago' }} /><input type="number" min={0} step={1} value={inp.minAfter} onChange={set('minAfter')} /></label>
            <label className="field">{tx({ en: 'Staff cost per hour (₫)', vi: 'Chi phí nhân sự mỗi giờ (đ)' })}<input type="number" min={0} step={5000} value={inp.hourly} onChange={set('hourly')} /></label>
            <label className="field">{tx({ en: 'Movago cost per month (₫)', vi: 'Chi phí Movago mỗi tháng (đ)' })}<input type="number" min={0} step={500000} value={inp.fee} onChange={set('fee')} /></label>
          </div>
        </div>
        <dl className="calc-out" aria-live="polite">
          <div><dt><Tx v={{ en: 'Hours freed / month', vi: 'Giờ giải phóng / tháng' }} /></dt><dd>{n(r.hours, 1)} h</dd></div>
          <div><dt><Tx v={{ en: 'Time value / month', vi: 'Giá trị thời gian / tháng' }} /></dt><dd>{money(Math.round(r.timeValue))}</dd></div>
          <div className={r.net >= 0 ? 'pos' : 'neg'}><dt><Tx v={{ en: 'Net after Movago cost', vi: 'Còn lại sau chi phí Movago' }} /></dt><dd>{r.net < 0 ? '−' : ''}{money(Math.round(Math.abs(r.net)))}</dd></div>
          <div><dt><Tx v={{ en: 'Break-even saving', vi: 'Mức giảm để hòa vốn' }} /></dt><dd>{r.breakEvenMin === null ? '—' : `${n(r.breakEvenMin, 1)} ${tx({ en: 'min / invoice', vi: 'phút / hóa đơn' })}`}</dd></div>
        </dl>
      </div>
    </section>
  )
}

const ECON: { prio: 'p1' | 'p2' | 'x'; title: L; cost: L; does: L; measure: L; refs: number[] }[] = [
  {
    prio: 'p1', refs: [5, 6],
    title: { en: 'Finding the basis and re-entering data', vi: 'Tìm căn cứ và nhập lại dữ liệu' },
    cost: { en: 'Accountant hours spent gathering invoice, shipment file and approved rate, then chasing pricing or operations for answers.', vi: 'Giờ công kế toán để gom hóa đơn, hồ sơ lô và giá đã duyệt, rồi hỏi lại pricing hoặc vận hành.' },
    does: { en: 'Puts the three sources on one screen, matched by shipment or B/L plus supplier.', vi: 'Đặt ba nguồn trên một màn hình, ghép theo mã lô hoặc vận đơn cùng nhà cung cấp.' },
    measure: { en: 'Minutes per file, waiting hours, share of files with all three sources.', vi: 'Phút thao tác mỗi hồ sơ, giờ chờ, tỷ lệ hồ sơ đủ ba nguồn.' },
  },
  {
    prio: 'p1', refs: [3, 4],
    title: { en: 'Wrong rate or no approved basis', vi: 'Sai mức phí hoặc thiếu căn cứ' },
    cost: { en: 'Overpayment when container type, route or validity date changes the price, or payment without an approved rate.', vi: 'Chi thừa khi loại container, tuyến hoặc mốc hiệu lực làm đổi giá, hoặc chi khi chưa có giá được duyệt.' },
    does: { en: 'Recomputes quantity × approved unit price per line and flags a discrepancy or missing basis with both sources.', vi: 'Tính lại số lượng × đơn giá đã duyệt từng dòng, gắn cờ chênh lệch hoặc thiếu căn cứ kèm hai nguồn.' },
    measure: { en: 'Confirmed discrepancies, amounts actually adjusted, false alerts.', vi: 'Số chênh lệch được xác nhận, khoản thực tế điều chỉnh, cảnh báo sai.' },
  },
  {
    prio: 'p1', refs: [7, 8],
    title: { en: 'Exceptions left waiting', vi: 'Ngoại lệ chờ xử lý' },
    cost: { en: 'Back-and-forth over who confirms and what is missing. Where a carrier needs payment before releasing the delivery order, slow approval can hold cargo.', vi: 'Trao đổi qua lại về ai xác nhận và thiếu chứng từ gì. Khi hãng cần nhận đủ cước mới cấp lệnh giao hàng, duyệt chậm có thể giữ hàng lại.' },
    does: { en: 'Sends the line with its evidence to the right person and keeps the status visible.', vi: 'Chuyển dòng phí kèm căn cứ cho đúng người và giữ trạng thái hiển thị.' },
    measure: { en: 'Exchanges per exception, open-to-close time, valid invoices held by mistake.', vi: 'Số lượt trao đổi mỗi ngoại lệ, thời gian mở đến đóng, hóa đơn hợp lệ bị giữ nhầm.' },
  },
  {
    prio: 'p2', refs: [9, 8],
    title: { en: 'Resent or duplicate invoices', vi: 'Hóa đơn gửi lại hoặc ghi nhận trùng' },
    cost: { en: 'Risk of recording or paying the same charge twice; one B/L can legitimately carry several invoices.', vi: 'Rủi ro ghi nhận hoặc chi hai lần cùng một khoản; một vận đơn vẫn có thể có nhiều hóa đơn hợp lệ.' },
    does: { en: 'Fingerprints each file against the intake history. Paid status still needs the AP ledger.', vi: 'Lấy dấu vân tay từng tệp và so với lịch sử tiếp nhận. Trạng thái đã chi vẫn cần sổ công nợ.' },
    measure: { en: 'Suspected duplicates, false duplicate alerts.', vi: 'Số ca nghi trùng, cảnh báo trùng sai.' },
  },
  {
    prio: 'x', refs: [8],
    title: { en: 'Demurrage and detention', vi: 'Phí lưu và giữ container' },
    cost: { en: 'Days charged after free time, which depend on operational dates and terms.', vi: 'Số ngày bị tính sau thời gian miễn phí, phụ thuộc mốc vận hành và điều khoản.' },
    does: { en: 'Recompute charged days once discharge, pick-up and return dates are available.', vi: 'Tính lại số ngày khi có mốc dỡ hàng, lấy và trả container.' },
    measure: { en: 'Charges with enough data to recompute, avoidable days.', vi: 'Khoản đủ dữ liệu để tính lại, số ngày có thể tránh.' },
  },
  {
    prio: 'x', refs: [1],
    title: { en: 'Cost allocation and missed rebilling', vi: 'Phân bổ chi phí và bỏ sót khoản thu lại' },
    cost: { en: 'Hypothesis: margin leaks when an allowable charge never reaches the customer invoice.', vi: 'Giả thuyết: biên lợi nhuận hụt khi khoản được phép thu lại không đi vào hóa đơn khách hàng.' },
    does: { en: 'Link payable lines to shipments so they can be checked against receivables.', vi: 'Gắn dòng phải trả với lô để đối chiếu với phải thu.' },
    measure: { en: 'Correcting entries, unbilled allowable amounts.', vi: 'Số bút toán sửa, khoản được phép thu chưa ghi nhận.' },
  },
]

const MODEL: { k: L; v: L; refs?: number[] }[] = [
  { k: { en: 'Who pays', vi: 'Ai trả tiền' }, v: { en: 'Chief accountant or CFO, with the head of operations. IT or the data owner decides deployment.', vi: 'Kế toán trưởng hoặc CFO, cùng trưởng vận hành. IT hoặc người phụ trách dữ liệu quyết định triển khai.' } },
  { k: { en: 'Who uses it', vi: 'Ai sử dụng' }, v: { en: 'Accounts payable daily. Pricing and operations confirm exceptions.', vi: 'Kế toán công nợ dùng hằng ngày. Pricing và vận hành xác nhận ngoại lệ.' } },
  { k: { en: 'Price metric', vi: 'Đơn vị tính phí' }, v: { en: 'Subscription by unique invoices processed, so a resent copy is never billed twice. A setup fee only when custom configuration or rate-card clean-up is needed.', vi: 'Thuê bao theo số hóa đơn duy nhất đã xử lý, nên bản gửi lại không bị tính hai lần. Phí thiết lập chỉ khi cần cấu hình riêng hoặc chuẩn hóa bảng giá.' }, refs: [10] },
  { k: { en: 'Entry offer', vi: 'Cách vào thị trường' }, v: { en: 'A KPI-based pilot: one AP team, one route or fee group, one or two suppliers. Buyer, budget and willingness to pay are confirmed before sizing the market.', vi: 'Pilot có KPI: một nhóm AP, một tuyến hoặc nhóm phí, một đến hai nhà cung cấp. Xác nhận người mua, ngân sách và mức sẵn sàng trả phí trước khi ước lượng thị trường.' }, refs: [10] },
  { k: { en: 'Against what exists', vi: 'So với giải pháp hiện có' }, v: { en: 'Compared on the same files with the customer’s TMS/ERP, spreadsheets and tools such as G.O.L, Innomation, ShipCheck, Conlio and BravoTran: setup time, checking minutes and traceable rate sources.', vi: 'So trên cùng bộ hồ sơ với TMS/ERP, bảng tính và các công cụ như G.O.L, Innomation, ShipCheck, Conlio, BravoTran: thời gian thiết lập, phút kiểm tra và khả năng truy nguồn giá.' }, refs: [14] },
]

const ROADMAP: { when: L; t: L; b: L; refs?: number[] }[] = [
  { when: { en: 'Nov 2026', vi: 'Tháng 11/2026' }, t: { en: 'Ideathon prototype', vi: 'Prototype Ideathon' }, b: { en: 'Working demo, data schema, simulated cases with an answer key.', vi: 'Demo chạy được, schema dữ liệu, các ca giả lập kèm đáp án.' } },
  { when: { en: 'Discovery', vi: 'Khảo sát' }, t: { en: 'Interview 5–10 people', vi: 'Phỏng vấn 5–10 người' }, b: { en: 'AP, operations, pricing and budget owners at HCMC forwarders, walking through their latest file rather than estimates.', vi: 'AP, vận hành, pricing và người có ngân sách tại forwarder TP.HCM, đi qua hồ sơ gần nhất thay vì ước lượng.' }, refs: [11] },
  { when: { en: 'Pilot', vi: 'Pilot' }, t: { en: '10–20 files, then 30–100', vi: '10–20 bộ, rồi 30–100 bộ' }, b: { en: 'Anonymised files with usage rights; compare current process and Movago on equivalent files; decide on thresholds agreed in advance.', vi: 'Hồ sơ đã ẩn danh và có quyền sử dụng; so quy trình hiện tại với Movago trên nhóm hồ sơ tương đương; quyết định theo ngưỡng thống nhất trước.' }, refs: [10] },
  { when: { en: 'Throughout', vi: 'Xuyên suốt' }, t: { en: 'Data compliance', vi: 'Tuân thủ dữ liệu' }, b: { en: 'Usage rights, retention, which fields reach an AI provider and how data is deleted, under Vietnam’s personal data rules.', vi: 'Quyền sử dụng, thời hạn lưu, trường nào gửi tới nhà cung cấp AI và cách xóa dữ liệu theo quy định bảo vệ dữ liệu cá nhân.' }, refs: [12] },
  { when: { en: 'After the pilot', vi: 'Sau pilot' }, t: { en: 'Widen coverage', vi: 'Mở rộng phạm vi' }, b: { en: 'Structured XML e-invoices, multi-template debit notes, multi-shipment invoices, credit and adjustment notes, D&D, multi-currency and TMS/ERP links, as customers ask.', vi: 'Hóa đơn điện tử XML, debit note nhiều mẫu, hóa đơn gộp lô, hóa đơn điều chỉnh, D&D, đa tiền tệ và kết nối TMS/ERP theo nhu cầu khách hàng.' }, refs: [13] },
]
