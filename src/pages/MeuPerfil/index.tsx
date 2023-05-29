import { useState } from "react";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";

export default function MeuPerfil() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <Header open={open} setOpen={setOpen} />

      <h1>Meu Perfil</h1>
      <Footer />
    </main>
  );
}
