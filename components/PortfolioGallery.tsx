"use client";
import { useEffect, useState } from "react";
import { PORTFOLIO } from "@/lib/site";
import Photo from "./Photo";

// Before/after gallery with category filter. Opening /portfolio#lip
// (from the menu) jumps straight to that category.
export default function PortfolioGallery() {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const sync = () => {
      const h = window.location.hash.slice(1);
      if (PORTFOLIO.some((g) => g.id === h)) {
        setFilter(h);
        requestAnimationFrame(() => document.getElementById(h)?.scrollIntoView({ behavior: "smooth" }));
      }
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const groups = filter === "all" ? PORTFOLIO : PORTFOLIO.filter((g) => g.id === filter);

  return (
    <>
      <div className="filters" role="tablist">
        <button className={filter === "all" ? "on" : ""} onClick={() => setFilter("all")}>ทั้งหมด</button>
        {PORTFOLIO.map((g) => (
          <button key={g.id} className={filter === g.id ? "on" : ""} onClick={() => setFilter(g.id)}>
            {g.title.replace("ผลงาน", "")}
          </button>
        ))}
      </div>
      {groups.map((g) => (
        <div className="port-group" id={g.id} key={g.id}>
          <div className="sec-head">
            <span className="eyebrow">{g.menu}</span>
            <h2>{g.title}</h2>
          </div>
          <div className="grid g3">
            {g.works.map((w) => (
              <div className="ba" key={w.title}>
                <div className="ba-pair">
                  <Photo src={w.before} alt={`${w.title} ก่อนทำ`} label="Before" sizes="(max-width: 620px) 50vw, 200px" />
                  <Photo src={w.after} alt={`${w.title} หลังทำ`} label="After" dark sizes="(max-width: 620px) 50vw, 200px" />
                </div>
                <div className="ba-body"><h3>{w.title}</h3><p>{w.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
