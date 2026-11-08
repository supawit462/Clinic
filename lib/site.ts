// All site content lives here. Edit this file to change text, contacts or photos.

export const CONTACT = {
  name: "Yoyo Makeover",
  // Main number from the Facebook cover; second number from the page listing
  phone: "080-196-9655",
  tel: "+66801969655",
  phone2: "061-695-6916",
  tel2: "+66616956916",
  facebook: "https://www.facebook.com/YoyoMakeBKK/",
  facebookName: "สักคิ้วเพชรเกษม ยืน1 เรื่องคิ้วโหงวเฮ้ง",
  messenger: "https://m.me/YoyoMakeBKK",
  // TODO: replace with the studio's real LINE Official Account
  line: "https://line.me/R/ti/p/@yoyomake",
  lineId: "@yoyomake",
  address: "338/19 ถ.มาเจริญ หมู่บ้านเวิร์คเพลส เพชรเกษม 81 แขวงหนองค้างพลู เขตหนองแขม กรุงเทพฯ 10160",
  area: "เพชรเกษม 81",
  hours: "ทุกวัน 10:00 – 19:00 น. (นัดหมายล่วงหน้า)",
  mapEmbed:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("หมู่บ้านเวิร์คเพลส เพชรเกษม 81 หนองค้างพลู หนองแขม กรุงเทพ") +
    "&output=embed",
};

// The two masters, cropped from the Facebook cover photo (public/images)
export const TEAM = [
  {
    name: "Master Thanawat",
    role: "ผู้ก่อตั้ง · ผู้เชี่ยวชาญคิ้วโหงวเฮ้ง",
    photo: "/images/master-1.jpg",
    text: "ผู้เชี่ยวชาญการออกแบบคิ้วตามหลักโหงวเฮ้งและคิ้ว 12 นักษัตร วิเคราะห์โครงหน้าและดวงชะตาก่อนวาดทรงคิ้วเฉพาะบุคคล พร้อมเทคนิคเส้นต่อเส้นที่คมและเป็นธรรมชาติ",
  },
  {
    // TODO: confirm this master's name with the studio
    name: "Master Yo",
    role: "ผู้ก่อตั้ง · ผู้เชี่ยวชาญงานสักความงาม",
    photo: "/images/master-2.jpg",
    text: "ชำนาญงานสักคิ้ว แก้คิ้ว สักตาหวาน และสักปากชมพู ใส่ใจทุกรายละเอียดของเส้นและสี เพื่อให้ผลงานสวยรับกับใบหน้าและบุคลิกของลูกค้า",
  },
];

// Stock photos from Unsplash. Swap these for the studio's own photos
// (put files in /public/images and use "/images/xxx.jpg").
const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  banner: "/images/banner.jpg",
  master1: "/images/master-1.jpg",
  master2: "/images/master-2.jpg",
  master1Cut: "/images/master-1-cut.png",
  master2Cut: "/images/master-2-cut.png",
  hero: u("photo-1487412947147-5cebf100ffc2"),
  studio: u("photo-1560066984-138dadb4c035"),
  salon: u("photo-1522337360788-8b13dee7a37e"),
  face1: u("photo-1516975080664-ed2fc6a32937"),
  face2: u("photo-1531746020798-e6953c6e8e04"),
  face3: u("photo-1508214751196-bcfd4ca60f91"),
  face4: u("photo-1529626455594-4ff0802cfb7e"),
  face5: u("photo-1515377905703-c4788e51af15"),
  face6: u("photo-1494790108377-be9c29b29330"),
  brush: u("photo-1519699047748-de8e457a634e"),
  cosmetics: u("photo-1512496015851-a90fb38ba796"),
  makeup: u("photo-1596462502278-27bfdc403348"),
  lips: u("photo-1586495777744-4413f21062fa"),
  skin: u("photo-1570172619644-dfd03ed5d881"),
  spa: u("photo-1600948836101-f9ffda59d250"),
};

export type Service = {
  id: string;
  title: string;
  short: string;
  menu: string;
  tag?: string;
  eyebrow: string;
  lead: string;
  body: string;
  checks: string[];
  duration: string;
  price: string;
  cta: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    id: "brow-feng-shui",
    title: "สักคิ้วโหงวเฮ้ง",
    menu: "ออกแบบคิ้วตามหลักนรลักษณ์",
    short: "คิ้วเสริมดวงที่ออกแบบจากโครงหน้าและนรลักษณ์เฉพาะบุคคล",
    tag: "ยอดนิยม",
    eyebrow: "Signature Service",
    lead: "คิ้วเสริมดวงที่ออกแบบเฉพาะบุคคล ตามหลักนรลักษณ์และโครงหน้าของคุณ",
    body: "อาจารย์จะวิเคราะห์ตำแหน่งหัวคิ้ว ปลายคิ้ว ความโค้ง และระยะห่างระหว่างคิ้วกับดวงตา เพื่อให้ได้คิ้วที่สมดุลกับใบหน้าและถูกต้องตามหลักโหงวเฮ้ง เช่น หัวคิ้วไม่ชนกัน ปลายคิ้วไม่ตก และเส้นคิ้วเรียงสวย",
    checks: [
      "เหมาะกับคนคิ้วบาง คิ้วขาดหาย หรืออยากเสริมบุคลิก",
      "ลงเส้นแบบเส้นต่อเส้น ดูเป็นธรรมชาติ",
      "วาดทรงให้ดูก่อนสัก ปรับได้จนพอใจ",
    ],
    duration: "ประมาณ 2–3 ชม.",
    price: "สอบถามทาง LINE",
    cta: "จองคิวบริการนี้",
    image: IMG.face1,
  },
  {
    id: "brow-zodiac",
    title: "คิ้ว 12 นักษัตร",
    menu: "คิ้วเสริมดวงตามปีเกิด",
    short: "ทรงคิ้วมงคลตามปีเกิด ช่วยเสริมโชคลาภ การงาน ความรัก",
    tag: "เสริมดวง",
    eyebrow: "เสริมดวงตามปีเกิด",
    lead: "เลือกทรงคิ้วมงคลที่ส่งเสริมดวงชะตาตามปีเกิดของคุณ",
    body: "แต่ละปีนักษัตรมีลักษณะคิ้วที่ช่วยเสริมด้านการงาน การเงิน ความรัก และเสน่ห์แตกต่างกัน อาจารย์จะผสานทรงมงคลประจำปีเกิดเข้ากับโครงหน้า เพื่อให้คิ้วทั้งสวยและเป็นมงคล",
    checks: [
      "ปรึกษาเรื่องที่อยากเสริม เช่น การงาน โชคลาภ ความรัก",
      "ทรงคิ้วออกแบบเฉพาะปีเกิดและใบหน้า",
      "แจ้งปีเกิดและส่งรูปหน้าตรงมาปรึกษาก่อนได้",
    ],
    duration: "ประมาณ 2–3 ชม.",
    price: "สอบถามทาง LINE",
    cta: "จองคิวบริการนี้",
    image: IMG.face2,
  },
  {
    id: "brow-correction",
    title: "แก้คิ้ว / แก้งานสัก",
    menu: "แก้คิ้วเก่า สีเพี้ยน ทรงไม่สวย",
    short: "คิ้วเก่าสีเขียว แดง ทรงเบี้ยว หนาเกิน แก้ให้กลับมาสวยได้",
    tag: "แก้งาน",
    eyebrow: "Brow Correction",
    lead: "คิ้วเก่าสีเพี้ยน ทรงไม่สวย หรือไม่เข้ากับหน้า แก้ไขให้กลับมาดูดีได้",
    body: "สำหรับผู้ที่เคยสักคิ้วแล้วสีเปลี่ยนเป็นเขียว เทา หรือแดง ทรงคิ้วหนาเกิน เบี้ยว หรือสองข้างไม่เท่ากัน อาจารย์จะประเมินคิ้วเดิมและวางแผนการแก้ไขที่เหมาะสม ทั้งการปรับสีและปรับทรงใหม่ให้ถูกหลักโหงวเฮ้ง",
    checks: [
      "ปรับสีคิ้วเก่าที่เพี้ยนให้เป็นธรรมชาติ",
      "ปรับทรงคิ้วที่เบี้ยว ไม่เท่ากัน",
      "ประเมินจากรูปก่อนได้ ว่าต้องแก้กี่ครั้ง",
    ],
    duration: "ขึ้นอยู่กับสภาพคิ้วเดิม",
    price: "ประเมินจากรูป",
    cta: "ส่งรูปให้ประเมิน",
    image: IMG.brush,
  },
  {
    id: "eyeliner",
    title: "สักตาหวาน",
    menu: "อายไลเนอร์ติดทน ดวงตาคมชัด",
    short: "อายไลเนอร์บางเบา ดวงตาดูคมชัด ตื่นมาก็สวย",
    eyebrow: "Eyeliner Tattoo",
    lead: "ดวงตาดูคมชัด มีมิติ ไม่ต้องเขียนอายไลเนอร์ทุกเช้า",
    body: "สักเส้นอายไลเนอร์ตามแนวโคนขนตา เลือกได้ทั้งแบบบางเบาเป็นธรรมชาติ หรือแบบหางตาหวาน ช่วยให้ดวงตาดูกลมโต สดใส และขนตาดูหนาขึ้น",
    checks: [
      "เลือกความหนาและสไตล์หางตาได้",
      "ติดทน กันน้ำ กันเหงื่อ",
      "เหมาะกับคนแพ้เครื่องสำอางรอบดวงตา",
    ],
    duration: "ประมาณ 1–2 ชม.",
    price: "สอบถามทาง LINE",
    cta: "จองคิวบริการนี้",
    image: IMG.face3,
  },
  {
    id: "lip-blush",
    title: "สักปากชมพู",
    menu: "ปากอมชมพูธรรมชาติ",
    short: "ปรับสีปากคล้ำให้อมชมพู ดูสุขภาพดีเป็นธรรมชาติ",
    eyebrow: "Lip Blush",
    lead: "ปรับสีปากคล้ำให้อมชมพู ดูสุขภาพดีอย่างเป็นธรรมชาติ",
    body: "เติมสีให้ริมฝีปากดูสดใส ปรับขอบปากให้ชัดและสมดุลขึ้น เลือกโทนสีได้ตามความชอบ ตั้งแต่ชมพูนู้ดไปจนถึงชมพูอมส้ม ไม่ต้องทาลิปก็ดูดี",
    checks: [
      "แก้ปัญหาปากคล้ำ ปากดำ สีไม่สม่ำเสมอ",
      "เลือกโทนสีให้เข้ากับสีผิว",
      "ปรับขอบปากให้ดูอิ่มและสมดุล",
    ],
    duration: "ประมาณ 2 ชม.",
    price: "สอบถามทาง LINE",
    cta: "จองคิวบริการนี้",
    image: IMG.lips,
  },
  {
    id: "lash",
    title: "ต่อขนตา เส้นต่อเส้น",
    menu: "ขนตางอนเป็นธรรมชาติ",
    short: "ขนตางอนยาว น้ำหนักเบา ไม่ทำร้ายขนตาจริง",
    eyebrow: "Lash Extension",
    lead: "ขนตางอนยาว หนาสวย น้ำหนักเบา เป็นธรรมชาติ",
    body: "ต่อขนตาทีละเส้นบนขนตาจริง เลือกความยาว ความงอน และความหนาให้เข้ากับรูปตา ไม่ต้องติดขนตาปลอมหรือใช้มาสคาร่า ตื่นมาก็พร้อม",
    checks: ["ออกแบบทรงให้เข้ากับรูปตา", "กาวคุณภาพ อ่อนโยนต่อดวงตา", "นัดเติมขนตาได้ต่อเนื่อง"],
    duration: "ประมาณ 1.5–2 ชม.",
    price: "สอบถามทาง LINE",
    cta: "จองคิวบริการนี้",
    image: IMG.face4,
  },
];

export type Work = { title: string; desc: string; before: string; after: string };
export type WorkGroup = { id: string; title: string; menu: string; works: Work[] };

// Before/after photos are stock placeholders. Replace with real client work.
export const PORTFOLIO: WorkGroup[] = [
  {
    id: "brow",
    title: "ผลงานสักคิ้วโหงวเฮ้ง",
    menu: "Before / After คิ้วเสริมดวง",
    works: [
      { title: "คิ้วบาง → คิ้วโหงวเฮ้ง", desc: "เติมคิ้วบางให้ทรงสวยรับโครงหน้ารูปไข่", before: IMG.face1, after: IMG.face1 },
      { title: "คิ้ว 12 นักษัตร ปีมะโรง", desc: "ทรงคิ้วเสริมการงานและความเป็นผู้นำ", before: IMG.face2, after: IMG.face2 },
      { title: "คิ้วเส้นต่อเส้น", desc: "ลงเส้นละเอียดเหมือนขนคิ้วจริง", before: IMG.face4, after: IMG.face4 },
    ],
  },
  {
    id: "fix",
    title: "ผลงานแก้คิ้ว",
    menu: "เปลี่ยนคิ้วเก่าให้ดูใหม่",
    works: [
      { title: "แก้คิ้วสีเขียว", desc: "ปรับสีคิ้วเก่าให้เป็นน้ำตาลธรรมชาติ", before: IMG.face5, after: IMG.face5 },
      { title: "แก้คิ้วเบี้ยว", desc: "ปรับคิ้วสองข้างให้สมดุลเท่ากัน", before: IMG.face3, after: IMG.face3 },
      { title: "แก้คิ้วหนาเกิน", desc: "ลดความหนา ให้ดูละมุนขึ้น", before: IMG.face1, after: IMG.face1 },
    ],
  },
  {
    id: "eye",
    title: "ผลงานสักตาหวาน",
    menu: "อายไลเนอร์ทุกสไตล์",
    works: [
      { title: "ตาหวานบางเบา", desc: "เส้นบางตามโคนขนตา ดูธรรมชาติ", before: IMG.face5, after: IMG.face5 },
      { title: "หางตาหวาน", desc: "ยกหางตาเล็กน้อย ดวงตาดูกลมโต", before: IMG.face6, after: IMG.face6 },
    ],
  },
  {
    id: "lip",
    title: "ผลงานสักปากชมพู",
    menu: "ปากสีสวยธรรมชาติ",
    works: [
      { title: "ปากคล้ำ → ชมพูนู้ด", desc: "ปรับสีปากให้อมชมพูสดใส", before: IMG.lips, after: IMG.lips },
      { title: "ชมพูอมส้ม", desc: "โทนสีสดใส เข้ากับผิวสองสี", before: IMG.face2, after: IMG.face2 },
    ],
  },
  {
    id: "lash",
    title: "ผลงานต่อขนตา",
    menu: "ขนตาเส้นต่อเส้น",
    works: [
      { title: "ขนตาธรรมชาติ", desc: "เพิ่มความหนาแบบบางเบา", before: IMG.face3, after: IMG.face3 },
      { title: "ขนตางอนหวาน", desc: "งอนยาว ดวงตาดูสดใส", before: IMG.face4, after: IMG.face4 },
    ],
  },
];

// Sample reviews: replace with real customer reviews from the Facebook page before launch.
export const REVIEWS = [
  { text: "อาจารย์ดูหน้าและวาดทรงให้ก่อน อธิบายละเอียดมากว่าทำไมต้องทรงนี้ ทำเสร็จคิ้วดูธรรมชาติ ใครเห็นก็ทักว่าหน้าดูสดใสขึ้น", name: "คุณก.", service: "สักคิ้วโหงวเฮ้ง" },
  { text: "เคยสักคิ้วที่อื่นมาแล้วสีเพี้ยน มาแก้ที่นี่ใจเย็นมาก ตอนนี้ไม่ต้องเขียนคิ้วเลย ประหยัดเวลาตอนเช้าไปเยอะ", name: "คุณน.", service: "แก้คิ้ว" },
  { text: "สักปากชมพูสีสวยมาก ไม่เจ็บอย่างที่คิด ร้านสะอาด บรรยากาศสบาย ๆ แนะนำเลยค่ะ", name: "คุณพ.", service: "สักปากชมพู" },
  { text: "ทำคิ้ว 12 นักษัตรตามปีเกิด อาจารย์อธิบายความหมายของทรงคิ้วให้ฟัง รู้สึกมั่นใจขึ้นมาก", name: "คุณม.", service: "คิ้ว 12 นักษัตร" },
  { text: "ต่อขนตาเบามาก ไม่รู้สึกหนักตา อยู่ได้นาน ช่างใส่ใจทุกเส้น", name: "คุณจ.", service: "ต่อขนตา" },
  { text: "สักตาหวานแล้วไม่ต้องเขียนอายไลเนอร์ทุกวัน ตาดูคมขึ้นแบบธรรมชาติ ชอบมากค่ะ", name: "คุณส.", service: "สักตาหวาน" },
];

export const FAQ = [
  { q: "สักคิ้วเจ็บไหม?", a: "ก่อนทำจะทายาชาเพื่อให้ผ่อนคลาย ส่วนใหญ่รู้สึกเพียงเล็กน้อยคล้ายถูกขีดเบา ๆ" },
  { q: "ต้องเตรียมตัวอย่างไรก่อนมาสักคิ้ว?", a: "พักผ่อนให้เพียงพอ งดเครื่องดื่มแอลกอฮอล์และกาแฟก่อนทำ 1 วัน หากมีโรคประจำตัว ตั้งครรภ์ หรือใช้ยาละลายลิ่มเลือด กรุณาแจ้งก่อนนัดหมาย" },
  { q: "หลังสักต้องดูแลอย่างไร?", a: "หลีกเลี่ยงการโดนน้ำบริเวณที่สักประมาณ 5–7 วัน ทายาตามที่ช่างแนะนำ ไม่แกะสะเก็ด และหลีกเลี่ยงแดดจัด ซาวน่า หรือว่ายน้ำในช่วงแรก" },
  { q: "ต้องกลับมาเติมสีไหม?", a: "แนะนำให้กลับมาเติมสีหลังทำประมาณ 4–6 สัปดาห์ เพื่อให้สีสม่ำเสมอและคิ้วคมชัดสมบูรณ์" },
  { q: "อยู่ได้นานแค่ไหน?", a: "โดยทั่วไปอยู่ได้ประมาณ 1–3 ปี ขึ้นอยู่กับสภาพผิว อายุ การโดนแดด และการดูแลของแต่ละบุคคล" },
  { q: "ปรึกษาก่อนได้ไหม มีค่าใช้จ่ายหรือเปล่า?", a: "ปรึกษาได้ฟรี ส่งรูปหน้าตรงและปีเกิดมาทาง LINE หรือนัดเข้ามาพูดคุยที่ร้านได้เลย" },
];

export const ZODIAC = [
  ["子", "ชวด"], ["丑", "ฉลู"], ["寅", "ขาล"], ["卯", "เถาะ"], ["辰", "มะโรง"], ["巳", "มะเส็ง"],
  ["午", "มะเมีย"], ["未", "มะแม"], ["申", "วอก"], ["酉", "ระกา"], ["戌", "จอ"], ["亥", "กุน"],
];

export const NAV = [
  { href: "/", label: "หน้าแรก" },
  { href: "/about", label: "เกี่ยวกับเรา" },
  {
    href: "/services",
    label: "บริการของเรา",
    sub: SERVICES.map((s) => ({ href: `/services#${s.id}`, label: s.title, note: s.menu })),
  },
  {
    href: "/portfolio",
    label: "ผลงานของเรา",
    sub: [
      ...PORTFOLIO.map((g) => ({ href: `/portfolio#${g.id}`, label: g.title, note: g.menu })),
      { href: "/portfolio#reviews", label: "รีวิวจากลูกค้า", note: "เสียงจากลูกค้าจริง" },
    ],
  },
  { href: "/contact", label: "ติดต่อเรา" },
];
