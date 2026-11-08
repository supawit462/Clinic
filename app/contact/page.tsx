import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { PageHero } from "@/components/Blocks";
import { ClockIcon, FbIcon, LineIcon, PinIcon, TelIcon } from "@/components/Icons";
import { CONTACT, IMG } from "@/lib/site";

export const metadata: Metadata = {
  title: "ติดต่อเรา / จองคิว",
  description: `จองคิวสักคิ้วโหงวเฮ้ง ปรึกษาฟรี โทร ${CONTACT.phone} หรือทัก LINE ร้าน Yoyo Makeover ซอยเพชรเกษม 69 หนองแขม`,
};

export default function Contact() {
  return (
    <>
      <PageHero title="ติดต่อเรา" crumb="ติดต่อเรา" image={IMG.spa} />
      <section>
        <div className="wrap contact-grid">
          <div className="reveal">
            <span className="eyebrow">Contact</span>
            <h2>นัดหมาย &amp; ปรึกษาฟรี</h2>
            <p className="lead">ส่งรูปหน้าตรงพร้อมปีเกิดมาทาง LINE เพื่อให้อาจารย์ช่วยประเมินทรงคิ้วก่อนนัดหมายได้เลย</p>
            <ul className="info-list" style={{ marginTop: 28 }}>
              <li><span className="icon"><PinIcon /></span><div><b>ที่อยู่</b><span>{CONTACT.address}</span></div></li>
              <li><span className="icon"><TelIcon /></span><div><b>โทรศัพท์</b><a href={`tel:${CONTACT.tel}`}>{CONTACT.phone}</a></div></li>
              <li><span className="icon"><LineIcon /></span><div><b>LINE</b><a href={CONTACT.line} target="_blank" rel="noopener">{CONTACT.lineId}</a></div></li>
              <li><span className="icon"><FbIcon /></span><div><b>Facebook</b><a href={CONTACT.facebook} target="_blank" rel="noopener">สักคิ้วเพชรเกษม69 ยืน1 เรื่องคิ้วโหงวเฮ้ง</a></div></li>
              <li><span className="icon"><ClockIcon /></span><div><b>เวลาทำการ</b><span>{CONTACT.hours}</span></div></li>
            </ul>
            <iframe className="map" src={CONTACT.mapEmbed} loading="lazy" title="แผนที่ร้าน Yoyo Makeover" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <BookingForm />
        </div>
      </section>
    </>
  );
}
