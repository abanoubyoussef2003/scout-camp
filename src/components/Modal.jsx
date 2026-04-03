import React, { useEffect } from "react";

const S = {
  backdrop: {
    position: "fixed",
    inset: 0,
    background: "rgba(20,8,2,0.82)",
    backdropFilter: "blur(6px)",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.5rem",
    transition: "opacity 0.35s ease",
  },
  modal: {
    background: "var(--white)",
    borderRadius: 14,
    overflow: "hidden",
    maxWidth: 820,
    width: "100%",
    maxHeight: "90vh",
    display: "flex",
    flexDirection: "row",
    boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
    transition: "transform 0.38s cubic-bezier(0.34,1.56,0.64,1)",
    position: "relative",
  },
  imgCol: {
    flex: "0 0 42%",
    overflow: "hidden",
    position: "relative",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  imgOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(135deg, rgba(61,34,20,0.12), transparent)",
  },
  contentCol: {
    flex: 1,
    padding: "2.2rem 2rem",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
  },
  closeBtn: {
    position: "absolute",
    top: 14,
    left: 14,
    background: "var(--brown-deep)",
    border: "none",
    color: "var(--sand-light)",
    width: 34,
    height: 34,
    borderRadius: "50%",
    fontSize: "1.1rem",
    cursor: "pointer",
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  tag: {
    display: "inline-block",
    fontFamily: "'Tajawal', sans-serif",
    fontSize: "0.72rem",
    fontWeight: 700,
    color: "var(--accent)",
    border: "1.5px solid var(--accent)",
    padding: "0.18rem 0.7rem",
    borderRadius: 3,
    letterSpacing: "0.06em",
    width: "fit-content",
  },
  title: {
    fontFamily: "'Tajawal', sans-serif",
    fontSize: "1.7rem",
    fontWeight: 900,
    color: "var(--brown-deep)",
    lineHeight: 1.2,
  },
  divider: {
    width: "100%",
    height: 1,
    background: "linear-gradient(to left, transparent, var(--sand), transparent)",
  },
  listTitle: {
    fontFamily: "'Tajawal', sans-serif",
    fontSize: "0.85rem",
    fontWeight: 700,
    color: "var(--brown-mid)",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    marginBottom: "0.5rem",
  },
  list: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "0.55rem",
  },
  listItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.7rem",
    fontSize: "0.97rem",
    color: "var(--text-dark)",
    lineHeight: 1.5,
  },
  bullet: {
    flexShrink: 0,
    marginTop: "0.45em",
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "var(--accent)",
    display: "inline-block",
  },
};

export default function Modal({ item, onClose }) {
  const isOpen = item !== null;

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <div
      style={{
        ...S.backdrop,
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? "all" : "none",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        style={{
          ...S.modal,
          transform: isOpen ? "scale(1) translateY(0)" : "scale(0.88) translateY(30px)",
        }}
      >
        <button style={S.closeBtn} onClick={onClose}>✕</button>

        {/* Image column */}
        <div style={S.imgCol}>
          {item && <img src={item.img} alt={item.title} style={S.img} />}
          <div style={S.imgOverlay} />
        </div>

        {/* Content column */}
        <div style={S.contentCol}>
          <span style={S.tag}>تفاصيل المنشأة</span>
          <h2 style={S.title}>{item?.title}</h2>
          <div style={S.divider} />
          <div>
            <p style={S.listTitle}>المواد والمتطلبات</p>
            <ul style={S.list}>
              {item?.items.map((text, i) => (
                <li key={i} style={S.listItem}>
                  <span style={S.bullet} />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
