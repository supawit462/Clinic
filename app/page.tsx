import Link from "next/link";
import Photo from "@/components/Photo";
import { CtaBand, SecHead, Stars } from "@/components/Blocks";
import { CheckIcon, CompassIcon, LineArtIcon, LineIcon, MsgIcon, ShieldIcon } from "@/components/Icons";
import { CONTACT, IMG, PORTFOLIO, REVIEWS, SERVICES } from "@/lib/site";

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
        <div className="wrap hero-grid">
          <div className="reveal">
            <span className="eyebrow">Yoyo Makeover · เพชรเกษม 69</span>
            <h1>คิ้วสวยรับหน้า<br /><em>เสริมดวงตามโหงวเฮ้ง</em></h1>
            <p className="lead">
              ยืนหนึ่งเรื่องคิ้วโหงวเฮ้ง ออกแบบคิ้วเฉพาะบุคคลจากโครงหน้า ปีนักษัตร และลักษณะดวงชะตา
              ให้คิ้วที่ทั้งสวยเป็นธรรมชาติและเป็นมงคล โดย Master Yo &amp; Master Lo
            </p>
            <div className="hero-actions">
              <Link className="btn btn-gold" href="/contact#booking">จองคิว / ปรึกษาฟรี</Link>
              <a className="btn btn-line" href={CONTACT.line} target="_blank" rel="noopener"><LineIcon /> แอด LINE</a>
              <Link className="btn btn-ghost" href="/portfolio">ดูผลงาน</Link>
            </div>
            <div className="hero-stats">
              <div><strong>12</strong><span>นักษัตร ออกแบบเฉพาะคุณ</span></div>
              <div><strong>6</strong><span>บริการความงามถาวร</span></div>
              <div><strong>1:1</strong><span>ปรึกษาก่อนสักทุกเคส</span></div>
            </div>
          </div>
          <div className="hero-visual reveal">
            <Photo src={IMG.hero} alt="คิ้วสวยรับหน้าแบบโหงวเฮ้ง" priority sizes="(max-width: 900px) 90vw, 520px" />
            <div className="hero-badge">
              <span className="dot"><MsgIcon /></span>
              <p><strong>ปรึกษาฟรี</strong>ส่งรูปหน้าตรงทาง LINE ให้อาจารย์ช่วยดูทรงคิ้วที่เหมาะกับคุณ</p>
            </div>
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
          <Photo className="reveal" src={IMG.studio} alt="บรรยากาศร้าน Yoyo Makeover" label="Master Yo & Master Lo" />
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
