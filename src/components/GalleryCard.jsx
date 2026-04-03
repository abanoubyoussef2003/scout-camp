import React, { useState } from "react";

const S = {
  card: {
    background: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    cursor: "pointer",
    boxShadow: "0 3px 16px var(--shadow)",
    border: "1px solid rgba(200,169,110,0.3)",
    transition: "transform 0.32s ease, box-shadow 0.32s ease",
    animation: "cardIn 0.5s ease both",
  },
  cardHover: {
    transform: "translateY(-8px) scale(1.015)",
    boxShadow: "0 14px 40px rgba(61,34,20,0.22)",
  },
  imgWrap: {
    position: "relative",
    width: "100%",
    paddingTop: "75%",
    overflow: "hidden",
    background: "var(--sand-pale)",
  },
  img: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  },
  imgHover: { transform: "scale(1.08)" },
  number: {
    position: "absolute",
    top: 10,
    right: 10,
    background: "var(--brown-deep)",
    color: "var(--sand-light)",
    fontFamily: "'Tajawal', sans-serif",
    fontSize: "0.75rem",
    fontWeight: 700,
    width: 28,
    height: 28,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(61,34,20,0.55) 0%, transparent 50%)",
    transition: "opacity 0.3s ease",
  },
  viewBtn: {
    position: "absolute",
    bottom: 12,
    left: "50%",
    background: "var(--accent)",
    color: "#fff",
    fontFamily: "'Cairo', sans-serif",
    fontSize: "0.8rem",
    fontWeight: 600,
    padding: "0.35rem 1.1rem",
    borderRadius: 20,
    whiteSpace: "nowrap",
    transition: "opacity 0.3s ease, transform 0.3s ease",
    pointerEvents: "none",
  },
  body: {
    padding: "1rem 1.1rem",
    borderTop: "3px solid var(--sand)",
  },
  cardTitle: {
    fontFamily: "'Tajawal', sans-serif",
    fontSize: "1.05rem",
    fontWeight: 700,
    color: "var(--brown-deep)",
    textAlign: "center",
  },
};

export default function GalleryCard({ item, index, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        ...S.card,
        ...(hovered ? S.cardHover : {}),
        animationDelay: `${(index * 0.07).toFixed(2)}s`,
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={S.imgWrap}>
        <span style={S.number}>{index + 2}</span>
        <img
          src={item.img}
          alt={item.title}
          loading="lazy"
          style={{ ...S.img, ...(hovered ? S.imgHover : {}) }}
        />
        <div style={{ ...S.overlay, opacity: hovered ? 1 : 0 }} />
        <span
          style={{
            ...S.viewBtn,
            transform: hovered
              ? "translateX(-50%) translateY(0)"
              : "translateX(-50%) translateY(10px)",
            opacity: hovered ? 1 : 0,
          }}
        >
          عرض التفاصيل ←
        </span>
      </div>
      <div style={S.body}>
        <h3 style={S.cardTitle}>{item.title}</h3>
      </div>
    </div>
  );
}
