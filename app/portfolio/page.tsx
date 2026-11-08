import type { Metadata } from "next";
import Link from "next/link";
import PortfolioGallery from "@/components/PortfolioGallery";
import { CtaBand, PageHero, SecHead, Stars } from "@/components/Blocks";
import { IMG, PORTFOLIO, REVIEWS } from "@/lib/site";

export const metadata: Metadata = {
  title: "ผลงานของเรา",
  description: "รวมผลงาน Before & After สักคิ้วโหงวเฮ้ง แก้คิ้ว สักตาหวาน สักปากชมพู ต่อขนตา และรีวิวจากลูกค้า Yoyo Makeover",
};

export default function Portfolio() {
  return (
    <>
      <PageHero title="ผลงานของเรา" crumb="ผลงานของเรา" image={IMG.face5}>
        <nav className="subnav" aria-label="หมวดผลงาน">
          {PORTFOLIO.map((g) => <Link key={g.id} href={`#${g.id}`}>{g.title}</Link>)}
          <Link href="#reviews">รีวิวจากลูกค้า</Link>
        </nav>
      </PageHero>

      <section>
        <div className="wrap">
          <PortfolioGallery />
        </div>
      </section>

      <section className="alt" id="reviews" style={{ scrollMarginTop: 90 }}>
        <div className="wrap">
          <SecHead center eyebrow="รีวิวจากลูกค้า" title="เสียงจากลูกค้าของเรา" />
          <div className="grid g3">
            {REVIEWS.map((r) => (
              <div className="review reveal" key={r.name}>
                <Stars /><p>“{r.text}”</p>
                <div className="who"><span className="avatar">{r.name.replace("คุณ", "").charAt(0)}</span><span>{r.name} · {r.service}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="อยากได้คิ้วสวยแบบนี้บ้าง?" text="ส่งรูปหน้าตรงมาปรึกษาฟรีทาง LINE" />
    </>
  );
}
