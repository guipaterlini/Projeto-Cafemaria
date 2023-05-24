import { useState } from "react";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";

export default function Pedidos() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <Header open={open} setOpen={setOpen} />

      <h1>Pedidos</h1>
      <Footer />
    </main>
  );
}
