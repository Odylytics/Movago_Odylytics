// Authored 16px line icons, 1.5px stroke, shared by the stage scenes and the stack diagram.
const paths = {
  mail: <><rect x="1.5" y="3" width="13" height="10" rx="1.5" /><path d="M2 4l6 5 6-5" /></>,
  chat: <><path d="M2 7.5C2 4.5 4.7 2.5 8 2.5s6 2 6 5-2.7 5-6 5c-.8 0-1.6-.1-2.3-.4L2.5 13.5l.9-2.6C2.5 10 2 8.8 2 7.5z" /></>,
  phone: <><rect x="4" y="1.5" width="8" height="13" rx="1.8" /><path d="M7 12.5h2" /></>,
  camera: <><path d="M2 5h2.5L6 3h4l1.5 2H14v8H2z" /><circle cx="8" cy="9" r="2.3" /></>,
  globe: <><circle cx="8" cy="8" r="6.5" /><path d="M1.5 8h13M8 1.5c2 2 2 11 0 13M8 1.5c-2 2-2 11 0 13" /></>,
  table: <><rect x="2" y="2.5" width="12" height="11" rx="1" /><path d="M2 6h12M2 9.5h12M6 6v7.5" /></>,
  inbox: <><path d="M2 9l1.8-5.5h8.4L14 9v4H2z" /><path d="M2 9h3.5l1 1.5h3l1-1.5H14" /></>,
  scan: <><path d="M2 5V2.5h2.5M11.5 2.5H14V5M14 11v2.5h-2.5M4.5 13.5H2V11" /><path d="M2 8h12" /></>,
  check: <path d="M3 8.5l3 3 7-7" />,
  doc: <><path d="M4 1.5h5l3 3v10H4z" /><path d="M8.5 1.5v3.5H12M6 8.5h4M6 11h4" /></>,
  rules: <><path d="M3 4h10M3 8h6M3 12h8" /><circle cx="12.5" cy="8" r="1.5" /></>,
  eye: <><path d="M1.5 8S4 3.5 8 3.5 14.5 8 14.5 8 12 12.5 8 12.5 1.5 8 1.5 8z" /><circle cx="8" cy="8" r="2" /></>,
  export: <><path d="M8 10V2M5 5l3-3 3 3" /><path d="M2.5 9v4.5h11V9" /></>,
  printer: <><path d="M4.5 6V2h7v4" /><rect x="2" y="6" width="12" height="5.5" rx="1" /><path d="M4.5 9.5h7v4.5h-7z" /></>,
  truck: <><path d="M1.5 4h8v7h-8zM9.5 6.5h3l2 2.5V11h-5" /><circle cx="4.5" cy="12" r="1.3" /><circle cx="11.5" cy="12" r="1.3" /></>,
  laptop: <><rect x="3" y="3" width="10" height="7" rx="1" /><path d="M1.5 12.5h13" /></>,
  folder: <><path d="M1.5 4h5l1.5 1.5h6.5v7.5h-13z" /></>,
  call: <><path d="M3 2.5h2.5l1 3-1.5 1a8 8 0 0 0 4.5 4.5l1-1.5 3 1V13a1 1 0 0 1-1 1A11 11 0 0 1 2 3.5a1 1 0 0 1 1-1z" /></>,
  stamp: <><path d="M6 2.5h4l-.8 4.5h-2.4z" /><path d="M3 9h10v2.5H3zM3.5 13.5h9" /></>,
  bell: <><path d="M4 11V7a4 4 0 0 1 8 0v4l1 1.5H3z" /><path d="M6.5 14h3" /></>,
}
export type IconName = keyof typeof paths

export function Icon({ name, size = 16 }: { name: IconName; size?: number }) {
  return (
    <svg className="icon" viewBox="0 0 16 16" width={size} height={size} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  )
}
