// Small inline SVG icons used across the site
type P = { className?: string };

export const Brow = ({ className }: P) => (
  <svg className={className} viewBox="0 0 120 30" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden>
    <path d="M4 24 C 30 4, 70 0, 116 16" />
    <path d="M14 22 C 38 9, 70 6, 104 15" strokeWidth="1" opacity=".5" />
  </svg>
);

export const LogoMark = () => (
  <svg viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden>
    <path d="M3 19 C 12 5, 26 3, 37 12" />
  </svg>
);

export const LineIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 3C6.5 3 2 6.6 2 11c0 3.9 3.5 7.2 8.3 7.9.3.1.8.2.9.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1 .9.5s5.9-3.5 8-6C21.4 14.2 22 12.7 22 11c0-4.4-4.5-8-10-8zM8.2 13.4H6.3c-.3 0-.5-.2-.5-.5V9c0-.3.2-.5.5-.5s.5.2.5.5v3.4h1.4c.3 0 .5.2.5.5s-.2.5-.5.5zm2-.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V9c0-.3.2-.5.5-.5s.5.2.5.5v3.9zm4.6 0c0 .2-.1.4-.3.5h-.2c-.2 0-.3-.1-.4-.2l-2-2.7v2.4c0 .3-.2.5-.5.5s-.5-.2-.5-.5V9c0-.2.1-.4.3-.5h.2c.2 0 .3.1.4.2l2 2.7V9c0-.3.2-.5.5-.5s.5.2.5.5v3.9zm3.1-2.5c.3 0 .5.2.5.5s-.2.5-.5.5h-1.4v.9h1.4c.3 0 .5.2.5.5s-.2.5-.5.5H16c-.3 0-.5-.2-.5-.5V9c0-.3.2-.5.5-.5h1.9c.3 0 .5.2.5.5s-.2.5-.5.5h-1.4v.9h1.4z" />
  </svg>
);

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export const TelIcon = () => (
  <svg viewBox="0 0 24 24" {...stroke} aria-hidden>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
);
export const FbIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M14 8V6c0-.9.6-1 1-1h3V1h-4c-4 0-5 3-5 5v2H6v4h3v11h5V12h3.5l.5-4h-4z" />
  </svg>
);
export const PinIcon = () => (
  <svg viewBox="0 0 24 24" {...stroke} aria-hidden><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
);
export const ClockIcon = () => (
  <svg viewBox="0 0 24 24" {...stroke} aria-hidden><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
);
export const MsgIcon = () => (
  <svg viewBox="0 0 24 24" {...stroke} aria-hidden><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.9-.9L3 21l1.9-5A8.4 8.4 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5z" /></svg>
);
export const Caret = () => (
  <svg className="caret" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><path d="M1 1.5l5 5 5-5" /></svg>
);
export const CompassIcon = () => (<svg viewBox="0 0 24 24" {...stroke} aria-hidden><circle cx="12" cy="12" r="9" /><path d="M12 3v18M3 12h18" /></svg>);
export const LineArtIcon = () => (<svg viewBox="0 0 24 24" {...stroke} aria-hidden><path d="M3 17c4-8 12-10 18-6" /><path d="M5 19c4-6 10-8 15-5" opacity=".5" /></svg>);
export const ShieldIcon = () => (<svg viewBox="0 0 24 24" {...stroke} aria-hidden><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>);
export const CheckIcon = () => (<svg viewBox="0 0 24 24" {...stroke} aria-hidden><path d="M20 6L9 17l-5-5" /></svg>);
export const UserIcon = () => (<svg viewBox="0 0 24 24" {...stroke} aria-hidden><circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" /></svg>);
export const HeartIcon = () => (<svg viewBox="0 0 24 24" {...stroke} aria-hidden><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z" /></svg>);
