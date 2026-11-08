"use client";
import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { Brow } from "./Icons";

// Photo with a branded fallback: if the image can't load, the soft gradient
// and brow motif show instead, so the layout never breaks.
export default function Photo({
  src, alt, label, className = "", style, sizes = "(max-width: 900px) 100vw, 50vw", priority, dark,
}: {
  src?: string; alt: string; label?: string; className?: string; style?: CSSProperties;
  sizes?: string; priority?: boolean; dark?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`ph ${dark ? "dark-ph" : ""} ${className}`} style={style}>
      <Brow />
      {src && !failed && (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} onError={() => setFailed(true)} />
      )}
      {label && <span className="ph-label">{label}</span>}
    </div>
  );
}
