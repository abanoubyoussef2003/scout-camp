import React, { useState } from "react";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import campData from "./campData";

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedItem = selectedIndex !== null ? campData[selectedIndex] : null;

  return (
    <>
      <Hero />
      <Gallery onCardClick={(i) => setSelectedIndex(i)} />
      <Footer />
      <Modal item={selectedItem} onClose={() => setSelectedIndex(null)} />
    </>
  );
}
