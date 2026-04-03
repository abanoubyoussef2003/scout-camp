import React from "react";
const styles = {
  navbar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1.1rem 2.5rem",
    background: "linear-gradient(to bottom, rgba(20,8,2,0.55) 0%, transparent 100%)",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "0.7rem",
    textDecoration: "none",
    animation: "fadeUp 0.7s ease both",
  },
  logoIcon: {
    width: 46,
    height: 46,
    background: "var(--accent)",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 3px 14px rgba(212,104,42,0.5)",
    flexShrink: 0,
    overflow: "hidden",
  },
  logoImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  logoText: {
    display: "flex",
    flexDirection: "column",
    lineHeight: 1.15,
  },
  logoTitle: {
    fontFamily: "'Tajawal', sans-serif",
    fontSize: "1.05rem",
    fontWeight: 900,
    color: "#fff",
  },
  logoSub: {
    fontFamily: "'Cairo', sans-serif",
    fontSize: "0.68rem",
    fontWeight: 400,
    color: "var(--sand-light)",
    letterSpacing: "0.06em",
  },
};

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <a
        href="https://www.facebook.com/share/17uPvDKvot/"
        style={styles.logo}
        target="_blank"
        rel="noreferrer"
      >
        <div style={styles.logoIcon}>
          <img src="/Img/logo.jpg" alt="logo" style={styles.logoImg} />
        </div>
        <div style={styles.logoText}>
          <span style={styles.logoTitle}>معسكر الكشافة - طليعة كاسترون</span>
          <span style={styles.logoSub}>Scout Camp — Shubra El Kheima</span>
        </div>
      </a>
    </nav>
  );
}
