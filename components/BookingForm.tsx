"use client";
import { useState, type FormEvent } from "react";
import { CONTACT, SERVICES } from "@/lib/site";

// Builds a booking message and opens LINE with it ready to send.
// To save bookings to a database or email instead, replace onSubmit.
export default function BookingForm() {
  const [note, setNote] = useState("กดส่งแล้วระบบจะเปิด LINE พร้อมข้อความจองคิวให้อัตโนมัติ");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const msg =
      `สวัสดีค่ะ ขอจองคิว ${CONTACT.name}\n` +
      `ชื่อ: ${d.get("name")}\nเบอร์: ${d.get("phone")}\n` +
      `บริการ: ${d.get("service")}\nวันที่สะดวก: ${d.get("date") || "-"}\n` +
      `ปีเกิด: ${d.get("year") || "-"}\nรายละเอียด: ${d.get("note") || "-"}`;
    window.open("https://line.me/R/msg/text/?" + encodeURIComponent(msg), "_blank", "noopener");
    setNote(`กำลังเปิด LINE… หากไม่เปิด โทร ${CONTACT.phone} ได้เลยค่ะ`);
  }

  return (
    <form className="booking reveal" id="booking" onSubmit={onSubmit}>
      <h2 style={{ marginBottom: 0 }}>จองคิว / ปรึกษาฟรี</h2>
      <div className="row2">
        <label>ชื่อ – นามสกุล<input name="name" required placeholder="ชื่อของคุณ" /></label>
        <label>เบอร์โทร<input name="phone" type="tel" required placeholder="08x-xxx-xxxx" /></label>
      </div>
      <div className="row2">
        <label>บริการที่สนใจ
          <select name="service" defaultValue={SERVICES[0].title}>
            {SERVICES.map((s) => <option key={s.id}>{s.title}</option>)}
            <option>ยังไม่แน่ใจ ขอคำแนะนำ</option>
          </select>
        </label>
        <label>วันที่สะดวก<input name="date" type="date" /></label>
      </div>
      <label>ปีเกิด (สำหรับออกแบบคิ้วตามนักษัตร)<input name="year" inputMode="numeric" placeholder="เช่น 2535" /></label>
      <label>รายละเอียดเพิ่มเติม<textarea name="note" rows={4} placeholder="เช่น เคยสักคิ้วมาก่อน อยากแก้สี" /></label>
      <button className="btn btn-gold" type="submit">ส่งข้อมูลจองคิว</button>
      <p className="form-note">{note}</p>
    </form>
  );
}
