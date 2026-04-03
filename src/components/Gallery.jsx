import React from "react";
import GalleryCard from "./GalleryCard";
import campData from "../campData";

const S = {
  ropeDivider: {
    width: "100%",
    height: 6,
    background:
      "repeating-linear-gradient(90deg, var(--rope) 0px, var(--rope) 8px, var(--brown-light) 8px, var(--brown-light) 14px, var(--rope) 14px, var(--rope) 22px)",
    opacity: 0.7,
  },
  sectionHeader: {
    textAlign: "center",
    padding: "4rem 2rem 2rem",
  },
  h2Wrap: {
    display: "inline-block",
    position: "relative",
  },
  h2: {
    fontFamily: "'Tajawal', sans-serif",
    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
    fontWeight: 900,
    color: "var(--brown-deep)",
    display: "block",
  },
  underline: {
    display: "block",
    width: "60%",
    height: 3,
    background: "var(--accent)",
    margin: "0.5rem auto 0",
    borderRadius: 2,
  },
  subText: {
    marginTop: "0.8rem",
    color: "var(--brown-mid)",
    fontSize: "1.05rem",
  },
  gallerySection: {
    padding: "1rem 3rem 5rem",
    background: "var(--white)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "1.8rem",
    maxWidth: 1400,
    margin: "0 auto",
  },
};

export default function Gallery({ onCardClick }) {
  return (
    <>
      <div style={S.ropeDivider} />
      <div style={{width:"100%",maxHeight:900,overflow:"hidden"}}>
        <img src="/Img/image1.jpg" alt="صورة المعسكر" style={
          {
          width:"100%",
          height:"100%",
          objectFit:"cover",
          objectPosition:"center center",
          display:"block"
          }
        }/>
      </div>
      <div style={S.sectionHeader}>
        <div style={S.h2Wrap}>
          <span style={S.h2}>منشآت المعسكر</span>
          <span style={S.underline} />
        </div>
        <p style={S.subText}>اضغط على أي منشأة لعرض التفاصيل والمواد المستخدمة</p>
      </div>

      <section style={S.gallerySection}>
        <div style={S.grid}>
          {campData.map((item, i) => (
            <GalleryCard
              key={i}
              item={item}
              index={i}
              onClick={() => onCardClick(i)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
