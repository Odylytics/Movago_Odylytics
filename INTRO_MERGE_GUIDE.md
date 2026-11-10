# Merge intro Movago từ branch `quanb`

Branch `quanb` chỉ thay đổi phần intro mới và tài nguyên font cần cho intro:

- `web/src/Intro.tsx` — cấu trúc logo + `MOVAGO` → `MOVE AI GO`, chạy lại mỗi lần refresh.
- `web/src/styles.css` — animation, màu, timing, responsive và motion blur của intro.
- `web/index.html` — nhúng Adobe Fonts kit cho Hagrid Heavy; phần còn lại của web vẫn dùng Manrope.

## Cách khuyên dùng: merge branch

Từ repo local của bạn:

```bash
git status
git fetch origin
git switch main
git pull --ff-only origin main
git switch -c merge-movago-intro
git merge --no-ff origin/quanb
```

Nếu merge không báo conflict, kiểm tra ngay:

```bash
cd web
npm ci
npm run build
npm test
npm run dev -- --host 127.0.0.1
```

Mở `http://127.0.0.1:5173/` và refresh vài lần. Intro phải chạy lại sau mỗi lần refresh; điều hướng hash bên trong app không tự phát lại intro.

Sau khi kiểm tra ổn:

```bash
git push -u origin merge-movago-intro
```

Sau đó mở pull request từ `merge-movago-intro` vào `main`.

## Cách gọn hơn: cherry-pick đúng commit intro

Nếu không muốn merge cả branch:

```bash
git fetch origin
git switch main
git pull --ff-only origin main
git switch -c merge-movago-intro
git cherry-pick origin/quanb
```

Branch `quanb` được giữ thành một commit độc lập nên lệnh trên chỉ lấy phần intro và file hướng dẫn này.

## Nếu có conflict

Không dùng `git checkout --theirs web/src/styles.css` cho cả file, vì thao tác đó có thể xóa CSS mới mà `main` đã thêm ở những phần khác. Hãy xử lý từng vùng conflict:

1. `web/src/Intro.tsx`: giữ phiên bản từ `quanb` cho toàn bộ component `Intro`.
2. `web/src/styles.css`: giữ CSS hiện tại của `main` ở các phần khác; trong vùng bắt đầu bằng comment `opening intro`, thay riêng toàn bộ block intro bằng block từ `quanb`.
3. `web/index.html`: giữ các thẻ hiện có của `main`, đồng thời giữ thêm hai dòng Typekit sau:

   ```html
   <link rel="preconnect" href="https://use.typekit.net" crossorigin />
   <link rel="stylesheet" href="https://use.typekit.net/bao1nxh.css" />
   ```

4. Xóa các marker `<<<<<<<`, `=======`, `>>>>>>>`, rồi chạy:

   ```bash
   git add web/src/Intro.tsx web/src/styles.css web/index.html
   git commit
   cd web
   npm run build
   npm test
   ```

Muốn hủy merge đang xử lý:

```bash
git merge --abort
```

Muốn hủy cherry-pick đang xử lý:

```bash
git cherry-pick --abort
```

## Lưu ý font

Hagrid Heavy chỉ dùng trong `.intro`; Home, Demo và các màn còn lại vẫn dùng Manrope. Adobe Fonts kit đã cho phép `localhost`, `127.0.0.1` và `movago-odylytics.vercel.app`.
