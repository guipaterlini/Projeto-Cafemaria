import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";
import { listarUsuarios } from "../../services/MainApi/usuarios";

interface Usuario {
  email: string;
  senha: string;
}

export default function PagAdmin() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await listarUsuarios();

        setUsuarios(response.data);
      } catch (error) {
        alert("Deu algo errado!");
      }
    };

    getData();
  }, [setUsuarios]);

  return (
    <main>
      <Header open={open} setOpen={setOpen} />
      <h1>Pagina Admin</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li>{usuario.email}</li>
        ))}
      </ul>
      <Footer />
    </main>
  );
}
