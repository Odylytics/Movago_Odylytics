import { useT, type Lang } from './i18n'

// Site footer in the Odylytics parent-brand layout: Movago is an Odylytics product, so company, legal and data links go to odylytics.com.
const ODY = 'https://odylytics.com/#'
type L = { en: string; vi: string }
const cols: { label: L; links: [L, string][] }[] = [
  { label: { en: 'Movago', vi: 'Movago' }, links: [
    [{ en: 'Watch the demo', vi: 'Xem demo' }, '#/demo?story=1'],
    [{ en: 'Try the sample case', vi: 'Tự thử hồ sơ mẫu' }, '#/demo'],
    [{ en: 'Rate cards', vi: 'Bảng giá' }, '#/rates'],
    [{ en: 'Business case', vi: 'Bài toán kinh doanh' }, '#/business'],
  ] },
  { label: { en: 'Research', vi: 'Nghiên cứu' }, links: [
    [{ en: 'Overview', vi: 'Tổng quan' }, `${ODY}/research`],
    [{ en: 'Ongoing', vi: 'Đang thực hiện' }, `${ODY}/research/ongoing`],
    [{ en: 'Publications', vi: 'Công bố' }, `${ODY}/research/publications`],
  ] },
  { label: { en: 'Team', vi: 'Đội ngũ' }, links: [
    [{ en: 'Co-founders', vi: 'Đồng sáng lập' }, `${ODY}/team/co-founders`],
    [{ en: 'Partners', vi: 'Đối tác' }, `${ODY}/team/partners`],
    [{ en: 'Resources', vi: 'Tài nguyên' }, `${ODY}/team/resources`],
  ] },
  { label: { en: 'Company', vi: 'Công ty' }, links: [
    [{ en: 'Odylytics', vi: 'Odylytics' }, 'https://odylytics.com/'],
    [{ en: 'Blog', vi: 'Blog' }, `${ODY}/blog`],
    [{ en: 'Get in touch', vi: 'Liên hệ' }, `${ODY}/contact`],
    [{ en: 'Pilot sign-in', vi: 'Đăng nhập pilot' }, '#/login'],
  ] },
  { label: { en: 'Legal', vi: 'Pháp lý' }, links: [
    [{ en: 'Terms of Use', vi: 'Điều khoản sử dụng' }, `${ODY}/legal/terms`],
    [{ en: 'Privacy Policy', vi: 'Chính sách quyền riêng tư' }, `${ODY}/legal/privacy`],
    [{ en: 'Cookie Policy', vi: 'Chính sách cookie' }, `${ODY}/legal/cookies`],
    [{ en: 'Acceptable Use Policy', vi: 'Chính sách sử dụng hợp lệ' }, `${ODY}/legal/acceptable-use`],
    [{ en: 'Legal notice', vi: 'Thông báo pháp lý' }, `${ODY}/legal/notice`],
  ] },
  { label: { en: 'Your data', vi: 'Dữ liệu của bạn' }, links: [
    [{ en: 'Data requests', vi: 'Yêu cầu về dữ liệu' }, `${ODY}/legal/data-requests`],
    [{ en: 'Data retention', vi: 'Lưu trữ dữ liệu' }, `${ODY}/legal/retention`],
    [{ en: 'Sub-processors', vi: 'Bên xử lý phụ' }, `${ODY}/legal/subprocessors`],
    [{ en: 'Data Processing Addendum', vi: 'Phụ lục xử lý dữ liệu' }, `${ODY}/legal/dpa`],
  ] },
  { label: { en: 'AI and security', vi: 'AI và bảo mật' }, links: [
    [{ en: 'Responsible AI', vi: 'AI có trách nhiệm' }, `${ODY}/legal/responsible-ai`],
    [{ en: 'AI transparency', vi: 'Minh bạch AI' }, `${ODY}/legal/ai-transparency`],
    [{ en: 'Security', vi: 'Bảo mật' }, `${ODY}/legal/security`],
    [{ en: 'Responsible disclosure', vi: 'Báo cáo lỗ hổng' }, `${ODY}/legal/disclosure`],
    [{ en: 'Accessibility statement', vi: 'Tuyên bố tiếp cận' }, `${ODY}/legal/accessibility`],
  ] },
]
const bottom: [L, string][] = [
  [{ en: 'Privacy', vi: 'Quyền riêng tư' }, `${ODY}/legal/privacy`],
  [{ en: 'Terms', vi: 'Điều khoản' }, `${ODY}/legal/terms`],
  [{ en: 'Cookies', vi: 'Cookie' }, `${ODY}/legal/cookies`],
  [{ en: 'All policies', vi: 'Mọi chính sách' }, `${ODY}/legal`],
]
const social = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/odylytics', icon: <path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.06c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.13V21h-4v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.92 1.3-1.92 2.63V21h-4V9.75Z" /> },
  { name: 'Facebook', href: 'https://www.facebook.com/odylytics', icon: <path fill="currentColor" d="M13.5 21v-7.5h2.53l.38-2.94H13.5V8.68c0-.85.24-1.43 1.46-1.43h1.55V4.62A20.6 20.6 0 0 0 14.25 4.5c-2.25 0-3.79 1.37-3.79 3.9v2.16H7.92v2.94h2.54V21h3.04Z" /> },
  { name: 'Instagram', href: 'https://www.instagram.com/odylytics/', icon: <><g fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" /><circle cx="12" cy="12" r="3.9" /></g><circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" /></> },
]
const ext = (href: string) => (href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})

export default function Footer() {
  const { lang } = useT()
  const tr = (l: L) => l[lang as Lang]
  return (
    <footer className="ody-footer" lang={lang}>
      <div className="ody-wrap">
        <div className="ody-top">
          <a className="ody-brand" href="https://odylytics.com/" target="_blank" rel="noreferrer" aria-label="Odylytics">
            <img alt="" width="1826" height="565" src="https://odylytics.com/assets/brand/odylytics-wordmark-dark.svg" />
          </a>
          <p className="ody-tagline">{lang === 'en' ? 'Movago, an Odylytics product. Move smarter. Go safer.' : 'Movago, sản phẩm của Odylytics. Move smarter. Go safer.'}</p>
          <div className="ody-social">
            {social.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={`Odylytics on ${s.name}`} title={s.name}>
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">{s.icon}</svg>
              </a>
            ))}
          </div>
          <a className="ody-btn" href={`${ODY}/contact`} target="_blank" rel="noreferrer">{lang === 'en' ? 'Get in touch' : 'Liên hệ'}</a>
        </div>

        <nav className="ody-cols" aria-label={lang === 'en' ? 'Footer' : 'Chân trang'}>
          {cols.map((c) => (
            <div key={c.label.en}>
              <h2>{tr(c.label)}</h2>
              <ul>{c.links.map(([l, href]) => <li key={l.en}><a href={href} {...ext(href)}>{tr(l)}</a></li>)}</ul>
            </div>
          ))}
        </nav>

        <p className="ody-statement">
          {lang === 'en'
            ? 'Movago is a product of Odylytics, built for KTC Ideathon 2026. All invoices, shipments, customers and figures on this site are simulated; time savings and error rates will be measured in a pilot. Movago supports accounts-payable checks and does not approve or make payments.'
            : 'Movago là sản phẩm của Odylytics, xây dựng cho KTC Ideathon 2026. Mọi hóa đơn, lô hàng, khách hàng và số liệu trên trang này là giả lập; thời gian tiết kiệm và tỷ lệ sai sót sẽ được đo trong pilot. Movago hỗ trợ kế toán công nợ kiểm tra, không phê duyệt hay thực hiện thanh toán.'}
        </p>

        <div className="ody-bottom">
          <p>© 2026 Odylytics. {lang === 'en' ? 'All rights reserved.' : 'Bảo lưu mọi quyền.'}</p>
          <ul>{bottom.map(([l, href]) => <li key={l.en}><a href={href} {...ext(href)}>{tr(l)}</a></li>)}</ul>
        </div>
      </div>
    </footer>
  )
}
