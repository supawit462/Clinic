import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import { CtaBand, PageHero, SecHead } from "@/components/Blocks";
import { FAQ, IMG, SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "บริการของเรา",
  description: "บริการสักคิ้วโหงวเฮ้ง คิ้ว 12 นักษัตร แก้คิ้ว สักตาหวาน สักปากชมพู และต่อขนตาเส้นต่อเส้น ที่ Yoyo Makeover เพชรเกษม 69",
};

export default function Services() {
  return (
    <>
      <PageHero title="บริการของเรา" crumb="บริการของเรา" image={IMG.cosmetics}>
        <nav className="subnav" aria-label="บริการย่อย">
          {SERVICES.map((s) => <Link key={s.id} href={`#${s.id}`}>{s.title}</Link>)}
        </nav>
      </PageHero>

      <div className="wrap">
        {SERVICES.map((s, i) => (
          <article className="svc" id={s.id} key={s.id}>
            <div className={`split ${i % 2 ? "rev" : ""}`}>
              <Photo className="reveal" src={s.image} alt={s.title} label={s.title} />
              <div className="reveal">
                <span className="eyebrow">{s.eyebrow}</span>
                <h2>{s.title}</h2>
                <p className="lead">{s.lead}</p>
                <p>{s.body}</p>
                <ul className="checks">{s.checks.map((c) => <li key={c}>{c}</li>)}</ul>
                <div className="svc-meta">
                  <span>ระยะเวลา <b>{s.duration}</b></span>
                  <span>ราคา <b>{s.price}</b></span>
                </div>
                <Link className="btn btn-gold" href="/contact#booking">{s.cta}</Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="alt">
        <div className="wrap">
          <SecHead center eyebrow="คำถามที่พบบ่อย" title="FAQ" />
          <div className="faq reveal">
            {FAQ.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}
          </div>
        </div>
      </section>

      <CtaBand title="ยังไม่แน่ใจว่าบริการไหนเหมาะกับคุณ?" text="ทัก LINE ให้อาจารย์ช่วยแนะนำ ฟรี" />
    </>
  );
}
