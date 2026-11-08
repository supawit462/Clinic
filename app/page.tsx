import Image from "next/image";
import Link from "next/link";
import ZodiacWheel from "@/components/ZodiacWheel";
import Photo from "@/components/Photo";
import { CtaBand, SecHead, Stars } from "@/components/Blocks";
import { CheckIcon, CompassIcon, LineArtIcon, ShieldIcon } from "@/components/Icons";
import { CONTACT, IMG, PORTFOLIO, REVIEWS, SERVICES, TEAM } from "@/lib/site";

const WHY = [
  { icon: <CompassIcon />, title: "ออกแบบตามโหงวเฮ้ง", text: "วิเคราะห์โครงหน้า ระยะคิ้ว-ตา และปีนักษัตร ก่อนวาดทรงทุกครั้ง" },
  { icon: <LineArtIcon />, title: "เส้นคมเหมือนจริง", text: "เทคนิคเส้นต่อเส้น ลงเส้นละเอียด ไม่เป็นก้อน ดูเป็นธรรมชาติ" },
  { icon: <ShieldIcon />, title: "สะอาด ปลอดภัย", text: "อุปกรณ์ใช้ครั้งเดียวทิ้ง ทำความสะอาดตามมาตรฐานทุกขั้นตอน" },
  { icon: <CheckIcon />, title: "ดูแลหลังทำ", text: "มีนัดเติมสีและติดตามผล ให้คิ้วสวยต่อเนื่องหลังทำเสร็จ" },
];

const STEPS = [
  ["ปรึกษา & วิเคราะห์", "พูดคุยความต้องการ ดูโครงหน้า ปีเกิด และสภาพคิ้วเดิม"],
  ["ออกแบบทรงคิ้ว", "วาดทรงคิ้วโหงวเฮ้งให้ดูก่อน ปรับได้จนพอใจ"],
  ["ลงมือสัก", "ทายาชาให้ผ่อนคลาย ลงเส้นอย่างประณีตด้วยมือช่างผู้เชี่ยวชาญ"],
  ["ดูแล & เติมสี", "แนะนำการดูแลหลังทำ และนัดเติมสีให้คิ้วคมชัดสมบูรณ์"],
];

export default function Home() {
  const featured = [PORTFOLIO[0].works[0], PORTFOLIO[1].works[0], PORTFOLIO[3].works[0]];
  const featuredGroups = [PORTFOLIO[0], PORTFOLIO[1], PORTFOLIO[3]];
  return (
    <>
      <section className="hero">
        <svg className="swirl" viewBox="0 0 1440 800" preserveAspectRatio="none" aria-hidden>
          <path d="M-50 620 C 300 380, 700 820, 1100 520 S 1500 260, 1560 320" stroke="#fff" strokeWidth="2" fill="none" opacity=".9" />
          <path d="M-50 700 C 360 470, 760 900, 1160 600 S 1520 360, 1560 420" stroke="#e8cfca" strokeWidth="1.5" fill="none" />
          <path d="M600 -40 C 820 160, 1120 120, 1500 260" stroke="#fff" strokeWidth="3" fill="none" opacity=".8" />
        </svg>
        <ZodiacWheel />
        <div className="wrap hero-grid">
          <div className="reveal">
            <span className="hero-kicker">Yoyo Makeover · สักคิ้ว{CONTACT.area}</span>
            <h1>ยืน 1 เรื่อง<br />คิ้วโหงวเฮ้ง</h1>
            <p className="lead">
              ออกแบบคิ้วเฉพาะบุคคลจากโครงหน้า ปีนักษัตร และลักษณะดวงชะตา ให้คิ้วที่ทั้งสวยเป็นธรรมชาติและเป็นมงคล
              เพราะทุกเคสดูแลโดย<b>อาจารย์ผู้เชี่ยวชาญ</b>
            </p>
            <div className="hero-actions">
              <Link className="btn btn-red" href="/contact#booking">จองคิว</Link>
              <Link className="btn btn-ghost" href="/portfolio">ดูผลงาน</Link>
            </div>
            <div className="hero-badges">
              <div><b>12</b>คิ้วตามนักษัตร</div>
              <div><b>1:1</b>ปรึกษาฟรีทุกเคส</div>
            </div>
          </div>
          <div className="hero-visual reveal">
            <div className="arch-photo a1"><Image src={IMG.master1} alt={TEAM[0].name} fill priority sizes="(max-width: 960px) 50vw, 300px" /></div>
            <div className="arch-photo a2"><Image src={IMG.master2} alt={TEAM[1].name} fill priority sizes="(max-width: 960px) 50vw, 300px" /></div>
            <div className="ribbon-badge"><span><strong>No.1</strong>คิ้วโหงวเฮ้ง</span></div>
            <div className="name-tag t1"><b>{TEAM[0].name}</b>ผู้เชี่ยวชาญคิ้วโหงวเฮ้ง</div>
            <div className="name-tag t2"><b>{TEAM[1].name}</b>งานสักความงาม</div>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="wrap">
          <div className="trust-inner reveal">
            <div className="big"><span className="gold-text">ยืน 1 เรื่องคิ้วโหงวเฮ้ง</span><small>สักคิ้ว{CONTACT.area} · โทร {CONTACT.phone}</small></div>
            <div><strong className="gold-text">12</strong>นักษัตร ออกแบบเฉพาะคุณ</div>
            <div><strong className="gold-text">6</strong>บริการความงามถาวร</div>
            <div><strong className="gold-text">1:1</strong>ปรึกษาก่อนสักทุกเคส</div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <SecHead center eyebrow="ทำไมต้อง Yoyo" title="มากกว่าคิ้วสวย คือคิ้วที่ใช่สำหรับคุณ"
            lead="เราผสานศิลปะการออกแบบคิ้วเข้ากับศาสตร์โหงวเฮ้ง เพื่อให้คิ้วใหม่ช่วยเสริมบุคลิกและความมั่นใจในทุกวัน" />
          <div className="grid g4">
            {WHY.map((w) => (
              <div className="feature reveal" key={w.title}>
                <div className="icon">{w.icon}</div><h3>{w.title}</h3><p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <SecHead eyebrow="บริการของเรา" title="บริการความงามถาวร ครบจบในที่เดียว"
            lead="ตั้งแต่คิ้วเสริมดวงไปจนถึงตา ปาก และขนตา ทุกบริการออกแบบให้เข้ากับใบหน้าของคุณ" />
          <div className="grid g3">
            {SERVICES.map((s) => (
              <Link className="card reveal" href={`/services#${s.id}`} key={s.id}>
                <Photo src={s.image} alt={s.title} sizes="(max-width: 620px) 100vw, 380px" />
                <div className="card-body">
                  {s.tag && <span className="tag">{s.tag}</span>}
                  <h3>{s.title}</h3><p>{s.short}</p><span className="more">ดูรายละเอียด</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap split">
          <div className="framed reveal"><Photo src={IMG.banner} alt="Yoyo Makeover ยืน 1 เรื่องคิ้วโหงวเฮ้ง" style={{ aspectRatio: "1/1" }} /></div>
          <div className="reveal">
            <span className="eyebrow">ศาสตร์แห่งคิ้ว</span>
            <h2>คิ้ว คือ “บ้านแห่งพี่น้องและมิตรสหาย” ในโหงวเฮ้ง</h2>
            <p className="lead">ตามหลักนรลักษณ์ คิ้วสะท้อนเรื่องความสัมพันธ์ บริวาร และโอกาสในชีวิต คิ้วที่เรียงสวย ปลายคิ้วไม่ตก และหัวคิ้วไม่ชนกัน ถือเป็นคิ้วมงคล</p>
            <ul className="checks">
              <li>วิเคราะห์ใบหน้าและปีเกิดก่อนออกแบบทุกครั้ง</li>
              <li>วาดทรงให้ดูและปรับจนพอใจก่อนลงมือสัก</li>
              <li>เลือกสีให้เข้ากับสีผิวและสีผม</li>
            </ul>
            <Link className="btn btn-dark" href="/about">รู้จักเรามากขึ้น</Link>
          </div>
        </div>
      </section>

      <section className="dark">
        <ZodiacWheel className="wheel-steps" />
        <div className="wrap">
          <SecHead center eyebrow="ขั้นตอนการทำ" title="4 ขั้นตอนสู่คิ้วใหม่ที่ใช่" />
          <div className="grid g4 steps">
            {STEPS.map(([t, d]) => <div className="step reveal" key={t}><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <SecHead center eyebrow="ผลงานของเรา" title="Before & After จากลูกค้า" />
          <div className="grid g3">
            {featured.map((w, i) => (
              <Link className="ba reveal" href={`/portfolio#${featuredGroups[i].id}`} key={w.title}>
                <div className="ba-pair">
                  <Photo src={w.before} alt={`${w.title} ก่อน`} label="Before" sizes="200px" />
                  <Photo src={w.after} alt={`${w.title} หลัง`} label="After" dark sizes="200px" />
                </div>
                <div className="ba-body"><h3>{w.title}</h3><p>{w.desc}</p></div>
              </Link>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 36 }}><Link className="btn btn-ghost" href="/portfolio">ดูผลงานทั้งหมด</Link></p>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <SecHead center eyebrow="รีวิวจากลูกค้า" title="ความประทับใจจากลูกค้า" />
          <div className="grid g3">
            {REVIEWS.slice(0, 3).map((r) => (
              <div className="review reveal" key={r.name}>
                <Stars /><p>“{r.text}”</p>
                <div className="who"><span className="avatar">{r.name.replace("คุณ", "").charAt(0)}</span><span>{r.name} · {r.service}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand eyebrow="ปรึกษาฟรี" title="อยากรู้ว่าคิ้วแบบไหนเสริมดวงคุณ?"
        text="ส่งรูปหน้าตรงพร้อมปีเกิดมาทาง LINE ให้อาจารย์ช่วยแนะนำทรงคิ้วที่เหมาะกับคุณ" />
    </>
  );
}
