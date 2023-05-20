import { useState } from "react";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";

export default function Produtos() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <Header open={open} setOpen={setOpen} />

      <h1>Produtos</h1>
      <Footer />
    </main>
  );
}
