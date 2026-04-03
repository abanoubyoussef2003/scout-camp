import React from "react";

const S = {
  footer: {
    background: "var(--brown-deep)",
    color: "var(--sand-light)",
    textAlign: "center",
    padding: "1.6rem",
    fontSize: "0.85rem",
    fontFamily: "'Tajawal', sans-serif",
  },
};

export default function Footer() {
  return (
    <footer style={S.footer}>
      ©️ معسكر الكشافة — Abraam Youssef — جميع الحقوق محفوظة
    </footer>
  );
}
