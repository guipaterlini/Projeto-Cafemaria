import { useState } from "react";
import Header from "../../components/Header";

export default function CenterMode() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Header open={open} setOpen={setOpen} />
      <h2>Pagina Admin</h2>
    </div>
  );
}