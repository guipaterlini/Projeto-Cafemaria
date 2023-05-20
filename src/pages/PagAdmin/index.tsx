import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";

export default function PagAdmin() {
  const [open, setOpen] = useState(false);
  useEffect(() => {}, []);
  return (
    <main>
      <Header open={open} setOpen={setOpen} />
      <h1>Pagina Admin</h1>
      <ul>
        <li>Usuario 1</li>
      </ul>
      <Footer />
    </main>
  );
}
