import Link from "next/link";
import { CONTACT, PORTFOLIO, SERVICES } from "@/lib/site";
import ZodiacWheel from "./ZodiacWheel";
import { FbIcon, LineIcon, LogoMark, TelIcon } from "./Icons";

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <ZodiacWheel />
        <div className="wrap foot-grid">
          <div>
            <Link href="/" className="logo">
              <span className="logo-mark"><LogoMark /></span>
              <span className="logo-text"><strong>YOYO MAKEOVER</strong><span>ผู้เชี่ยวชาญด้านคิ้วโหงวเฮ้ง</span></span>
            </Link>
            <p style={{ marginTop: 18 }}>ออกแบบคิ้วให้เข้ากับโครงหน้าและเสริมดวงตามหลักโหงวเฮ้ง ยืน 1 เรื่องคิ้วโหงวเฮ้ง ย่านเพชรเกษม 81</p>
            <div className="socials">
              <a href={CONTACT.facebook} target="_blank" rel="noopener" aria-label="Facebook"><FbIcon /></a>
              <a href={CONTACT.line} target="_blank" rel="noopener" aria-label="LINE"><LineIcon /></a>
              <a href={`tel:${CONTACT.tel}`} aria-label="โทร"><TelIcon /></a>
            </div>
          </div>
          <div>
            <h4>บริการ</h4>
            <ul>{SERVICES.map((s) => <li key={s.id}><Link href={`/services#${s.id}`}>{s.title}</Link></li>)}</ul>
          </div>
          <div>
            <h4>ผลงานของเรา</h4>
            <ul>{PORTFOLIO.map((g) => <li key={g.id}><Link href={`/portfolio#${g.id}`}>{g.title}</Link></li>)}</ul>
          </div>
          <div>
            <h4>ติดต่อเรา</h4>
            <ul>
              <li>{CONTACT.address}</li>
              <li><a href={`tel:${CONTACT.tel}`}>โทร {CONTACT.phone}</a></li>
              <li><a href={`tel:${CONTACT.tel2}`}>โทร {CONTACT.phone2}</a></li>
              <li><a href={CONTACT.line} target="_blank" rel="noopener">LINE {CONTACT.lineId}</a></li>
              <li>{CONTACT.hours}</li>
            </ul>
          </div>
        </div>
        <div className="wrap copy">
          <span>© {new Date().getFullYear()} Yoyo Makeover Co., Ltd. สงวนลิขสิทธิ์</span>
          <span>ผลลัพธ์ขึ้นอยู่กับสภาพผิวและการดูแลของแต่ละบุคคล</span>
        </div>
      </footer>
      <div className="float">
        <a className="f-line" href={CONTACT.line} target="_blank" rel="noopener" aria-label="แชท LINE"><LineIcon /></a>
        <a className="f-tel" href={`tel:${CONTACT.tel}`} aria-label="โทร"><TelIcon /></a>
      </div>
    </>
  );
}
