import { useState } from "react";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";
import React from "react";

export default function PagAdmin() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <Header open={open} setOpen={setOpen} />

      <h1>Pagina Admin</h1>

      <Footer />
    </main>
  );
}
