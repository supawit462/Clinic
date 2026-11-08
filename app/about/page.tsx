import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Photo from "@/components/Photo";
import { CtaBand, PageHero, SecHead } from "@/components/Blocks";
import { HeartIcon, ShieldIcon, UserIcon } from "@/components/Icons";
import { IMG, TEAM, ZODIAC } from "@/lib/site";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา",
  description: "รู้จัก Yoyo Makeover และทีมอาจารย์ ผู้เชี่ยวชาญด้านการออกแบบคิ้วตามหลักโหงวเฮ้ง ย่านเพชรเกษม 81",
};

const VALUES = [
  { icon: <UserIcon />, title: "เฉพาะบุคคล", text: "ไม่มีทรงคิ้วสำเร็จรูป ทุกคิ้วออกแบบจากใบหน้าและดวงของลูกค้าแต่ละคน" },
  { icon: <ShieldIcon />, title: "ปลอดภัย", text: "อุปกรณ์ใช้ครั้งเดียวทิ้ง สีคุณภาพ และขั้นตอนความสะอาดที่เข้มงวด" },
  { icon: <HeartIcon />, title: "จริงใจ", text: "แนะนำตามความเหมาะสม บอกผลลัพธ์ตามจริง และดูแลต่อเนื่องหลังทำ" },
];

export default function About() {
  return (
    <>
      <PageHero title="เกี่ยวกับเรา" crumb="เกี่ยวกับเรา" image={IMG.banner} />

      <section>
        <div className="wrap split">
          <div className="framed reveal"><Photo src={IMG.banner} alt="Yoyo Makeover ยืน 1 เรื่องคิ้วโหงวเฮ้ง" style={{ aspectRatio: "1/1" }} /></div>
          <div className="reveal">
            <span className="eyebrow">Our Story</span>
            <h2>Yoyo Makeover<br />ผู้เชี่ยวชาญด้านคิ้วโหงวเฮ้ง</h2>
            <p className="lead">เราเริ่มต้นจากความเชื่อว่า “คิ้ว” ไม่ใช่แค่ส่วนประกอบของความสวย แต่เป็นจุดสำคัญบนใบหน้าที่สะท้อนบุคลิก ความสัมพันธ์ และโอกาสในชีวิต</p>
            <p>Yoyo Makeover จึงนำศาสตร์โหงวเฮ้งและนรลักษณ์มาผสานกับเทคนิคการสักคิ้วสมัยใหม่ ออกแบบคิ้วให้แต่ละคนอย่างพิถีพิถัน ทั้งตามโครงหน้า ปีนักษัตร และสิ่งที่ลูกค้าอยากเสริมในชีวิต ไม่ว่าจะเป็นการงาน การเงิน หรือความรัก</p>
            <p>ร้านตั้งอยู่ย่านเพชรเกษม 81 หนองแขม เปิดให้บริการแบบนัดหมาย เพื่อให้ทุกเคสได้รับเวลาและความใส่ใจอย่างเต็มที่</p>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <SecHead center eyebrow="ทีมของเรา" title="ดูแลทุกเคสโดยอาจารย์ผู้เชี่ยวชาญ" />
          <div className="grid" style={{ gap: 28 }}>
            {TEAM.map((m) => (
              <div className="team-card reveal" key={m.name}>
                <div className="photo"><Image src={m.photo} alt={m.name} fill sizes="(max-width: 760px) 100vw, 500px" /></div>
                <div className="body">
                  <span className="eyebrow">Master</span>
                  <h3>{m.name}</h3>
                  <p className="role">{m.role}</p>
                  <p>{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="wrap">
          <SecHead center eyebrow="สิ่งที่เรายึดมั่น" title="คุณค่าที่เราส่งมอบ" />
          <div className="grid g3">
            {VALUES.map((v) => <div className="feature reveal" key={v.title}><div className="icon">{v.icon}</div><h3>{v.title}</h3><p>{v.text}</p></div>)}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <SecHead center eyebrow="คิ้ว 12 นักษัตร" title="ออกแบบคิ้วมงคลตามปีเกิดของคุณ"
            lead="แต่ละปีนักษัตรมีลักษณะคิ้วที่ส่งเสริมดวงแตกต่างกัน อาจารย์จะเลือกทรงที่เหมาะทั้งกับปีเกิดและโครงหน้า" />
          <div className="zodiac reveal">
            {ZODIAC.map(([c, n]) => <div key={n}><b>{c}</b>{n}</div>)}
          </div>
          <p style={{ textAlign: "center", marginTop: 36 }}><Link className="btn btn-red" href="/services#brow-zodiac">ดูบริการคิ้ว 12 นักษัตร</Link></p>
        </div>
      </section>

      <CtaBand title="พร้อมเปลี่ยนคิ้วใหม่แล้วหรือยัง?" text="นัดปรึกษาฟรี ไม่มีค่าใช้จ่าย" />
    </>
  );
}
