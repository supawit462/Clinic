import Link from "next/link";
import type { ReactNode } from "react";
import { CONTACT } from "@/lib/site";
import { Brow, LineIcon, TelIcon } from "./Icons";

export function PageHero({ title, crumb, image, children }: { title: string; crumb: string; image?: string; children?: ReactNode }) {
  return (
    <section className="page-hero" style={image ? { ["--hero-img" as string]: `url(${image})` } : undefined}>
      <div className="wrap">
        <span className="arch"><Brow /></span>
        <h1>{title}</h1>
        <p className="crumbs"><Link href="/">หน้าแรก</Link> / {crumb}</p>
        {children}
      </div>
    </section>
  );
}

export function SecHead({ eyebrow, title, lead, center }: { eyebrow: string; title: ReactNode; lead?: string; center?: boolean }) {
  return (
    <div className={`sec-head reveal ${center ? "center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

export function CtaBand({ title, text, eyebrow }: { title: string; text: string; eyebrow?: string }) {
  return (
    <section>
      <div className="wrap">
        <div className="cta-band reveal">
          <div>
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h2>{title}</h2>
            <p style={{ margin: 0 }}>{text}</p>
          </div>
          <div className="btns">
            <a className="btn btn-line" href={CONTACT.line} target="_blank" rel="noopener"><LineIcon /> ทัก LINE</a>
            <a className="btn btn-ghost-light" href={`tel:${CONTACT.tel}`}><TelIcon /> {CONTACT.phone}</a>
            <Link className="btn btn-gold" href="/contact#booking">จองคิวออนไลน์</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Stars() {
  return <div className="stars" aria-label="5 ดาว">★★★★★</div>;
}
