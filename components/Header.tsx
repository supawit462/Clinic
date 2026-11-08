"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CONTACT, NAV } from "@/lib/site";
import { Caret, LineIcon, LogoMark, TelIcon } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState<string | null>(null);

  // Close the mobile menu when the page changes
  useEffect(() => { setOpen(false); setSub(null); }, [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const isMobile = () => window.matchMedia("(max-width: 1020px)").matches;
  const close = () => { setOpen(false); setSub(null); };

  return (
    <>
      <header className={`site-header ${open ? "nav-open" : ""}`}>
        <div className="wrap nav">
          <Link href="/" className="logo" aria-label="Yoyo Makeover หน้าแรก">
            <span className="logo-mark"><LogoMark /></span>
            <span className="logo-text"><strong>YOYO MAKEOVER</strong><span>ยืน 1 เรื่องคิ้วโหงวเฮ้ง</span></span>
          </Link>

          <ul className="menu" id="menu">
            {NAV.map((item) =>
              item.sub ? (
                <li key={item.href} className={`has-sub ${sub === item.href ? "open" : ""}`}>
                  <Link
                    href={item.href}
                    className={`top ${isActive(item.href) ? "active" : ""}`}
                    aria-haspopup="true"
                    aria-expanded={sub === item.href}
                    onClick={(e) => {
                      if (!isMobile()) return;
                      e.preventDefault();
                      setSub(sub === item.href ? null : item.href);
                    }}
                  >
                    {item.label}
                    <Caret />
                  </Link>
                  <ul className="dropdown">
                    <li>
                      <Link href={item.href} onClick={close}><b>{item.label}ทั้งหมด</b><small>ดูภาพรวม</small></Link>
                    </li>
                    {item.sub.map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} onClick={close}>{s.label}<small>{s.note}</small></Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} className={isActive(item.href) ? "active" : ""} onClick={close}>{item.label}</Link>
                </li>
              )
            )}
            <li className="mobile-cta">
              <a className="btn btn-line" href={CONTACT.line} target="_blank" rel="noopener"><LineIcon /> LINE</a>
              <a className="btn btn-red" href={`tel:${CONTACT.tel}`}><TelIcon /> โทรจองคิว</a>
            </li>
          </ul>

          <div className="nav-cta">
            <Link className="btn btn-red" href="/contact#booking">จองคิว</Link>
            <button className="burger" aria-label="เปิดเมนู" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
