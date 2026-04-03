import React from "react";
import Navbar from "./Navbar";

const S = {
  hero: {
    position: "relative",
    width: "100%",
    height: "100vh",
    minHeight: 500,
    overflow: "hidden",
    display: "flex",
    alignItems: "flex-end",
  },
  img: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center center",
    display:"block",
    transform: "scale(1.04)",
    animation: "heroZoom 18s ease-in-out infinite alternate",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom, rgba(61,34,20,0.08) 0%, rgba(61,34,20,0.15) 40%, rgba(61,34,20,0.72) 80%, rgba(61,34,20,0.9) 100%)",
  },
  content: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    padding: "3rem 4rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  badge: {
    display: "inline-block",
    background: "var(--accent)",
    color: "var(--white)",
    fontFamily: "'Tajawal', sans-serif",
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: "0.12em",
    padding: "0.3rem 1rem",
    borderRadius: 2,
    width: "fit-content",
    marginBottom: "0.5rem",
    textTransform: "uppercase",
    animation: "fadeUp 0.8s ease both",
  },
  title: {
    fontFamily: "'Tajawal', sans-serif",
    fontSize: "clamp(2.4rem, 6vw, 5rem)",
    fontWeight: 900,
    color: "var(--white)",
    lineHeight: 1.1,
    animation: "fadeUp 0.9s 0.1s ease both",
  },
  sub: {
    fontSize: "clamp(1rem, 2vw, 1.3rem)",
    color: "var(--sand-light)",
    fontWeight: 400,
    animation: "fadeUp 1s 0.2s ease both",
  },
};

export default function Hero() {
  return (
    <section style={S.hero}>
      <Navbar />
      <img src="/Img/team.jpg" alt="معسكر الكشافة" style={S.img} />
      <div style={S.overlay} />
      <div style={S.content}>
        <span style={S.badge}>🪢 مشروع كشفي</span>
        <h1 style={S.title}>معسكر الكشافة</h1>
        <p style={S.sub}>عناصر البناء والتجهيزات الميدانية — تصفح المنشآت وتفاصيلها</p>
      </div>
    </section>
    
  );
}
