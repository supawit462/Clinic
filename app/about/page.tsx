import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import { CtaBand, PageHero, SecHead } from "@/components/Blocks";
import { HeartIcon, ShieldIcon, UserIcon } from "@/components/Icons";
import { IMG, ZODIAC } from "@/lib/site";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา",
  description: "รู้จัก Yoyo Makeover และ Master Yo & Master Lo ผู้เชี่ยวชาญด้านการออกแบบคิ้วตามหลักโหงวเฮ้ง ย่านเพชรเกษม 69",
};

const VALUES = [
  { icon: <UserIcon />, title: "เฉพาะบุคคล", text: "ไม่มีทรงคิ้วสำเร็จรูป ทุกคิ้วออกแบบจากใบหน้าและดวงของลูกค้าแต่ละคน" },
  { icon: <ShieldIcon />, title: "ปลอดภัย", text: "อุปกรณ์ใช้ครั้งเดียวทิ้ง สีคุณภาพ และขั้นตอนความสะอาดที่เข้มงวด" },
  { icon: <HeartIcon />, title: "จริงใจ", text: "แนะนำตามความเหมาะสม บอกผลลัพธ์ตามจริง และดูแลต่อเนื่องหลังทำ" },
];

export default function About() {
  return (
    <>
      <PageHero title="เกี่ยวกับเรา" crumb="เกี่ยวกับเรา" image={IMG.salon} />

      <section>
        <div className="wrap split">
          <Photo className="reveal" src={IMG.salon} alt="หน้าร้าน Yoyo Makeover" label="Yoyo Makeover Studio" />
          <div className="reveal">
            <span className="eyebrow">Our Story</span>
            <h2>Yoyo Makeover<br />ผู้เชี่ยวชาญด้านคิ้วโหงวเฮ้ง</h2>
            <p className="lead">เราเริ่มต้นจากความเชื่อว่า “คิ้ว” ไม่ใช่แค่ส่วนประกอบของความสวย แต่เป็นจุดสำคัญบนใบหน้าที่สะท้อนบุคลิก ความสัมพันธ์ และโอกาสในชีวิต</p>
            <p>Yoyo Makeover จึงนำศาสตร์โหงวเฮ้งและนรลักษณ์มาผสานกับเทคนิคการสักคิ้วสมัยใหม่ ออกแบบคิ้วให้แต่ละคนอย่างพิถีพิถัน ทั้งตามโครงหน้า ปีนักษัตร และสิ่งที่ลูกค้าอยากเสริมในชีวิต ไม่ว่าจะเป็นการงาน การเงิน หรือความรัก</p>
            <p>ร้านตั้งอยู่ย่านเพชรเกษม 69 หนองแขม เปิดให้บริการแบบนัดหมาย เพื่อให้ทุกเคสได้รับเวลาและความใส่ใจอย่างเต็มที่</p>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <SecHead center eyebrow="ทีมของเรา" title="ดูแลทุกเคสโดยอาจารย์ผู้เชี่ยวชาญ" />
          <div className="grid g2">
            <div className="card reveal">
              <Photo src={IMG.brush} alt="Master Yo" label="Master Yo" style={{ aspectRatio: "4/3" }} />
              <div className="card-body"><span className="tag">ผู้ก่อตั้ง</span><h3>Master Yo</h3><p>ผู้เชี่ยวชาญการออกแบบคิ้วตามหลักโหงวเฮ้งและคิ้ว 12 นักษัตร ดูแลการวิเคราะห์ใบหน้าและออกแบบทรงคิ้วเฉพาะบุคคล</p></div>
            </div>
            <div className="card reveal">
              <Photo src={IMG.makeup} alt="Master Lo" label="Master Lo" style={{ aspectRatio: "4/3" }} />
              <div className="card-body"><span className="tag">ผู้ก่อตั้ง</span><h3>Master Lo</h3><p>ช่างผู้ชำนาญการสักคิ้วเส้นต่อเส้น แก้คิ้ว สักตา และสักปาก ใส่ใจทุกรายละเอียดของเส้นและสี</p></div>
            </div>
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
          <p style={{ textAlign: "center", marginTop: 36 }}><Link className="btn btn-gold" href="/services#brow-zodiac">ดูบริการคิ้ว 12 นักษัตร</Link></p>
        </div>
      </section>

      <CtaBand title="พร้อมเปลี่ยนคิ้วใหม่แล้วหรือยัง?" text="นัดปรึกษาฟรี ไม่มีค่าใช้จ่าย" />
    </>
  );
}
