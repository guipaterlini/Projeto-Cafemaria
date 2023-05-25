import React, { useEffect, useState } from "react";
import { listarUsuarios } from "../../services/MainApi/usuarios";
interface ListItem {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
interface ListSectionProps {
  // Não é necessário passar os dados como propriedade agora
}

const ListSection: React.FC<ListSectionProps> = () => {
  const [data, setData] = useState<ListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchListData() {
      try {
        // Fazer a chamada à API e obter os dados
        const response = await listarUsuarios();
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados da lista:", error);
      }
    }

    fetchListData();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (data.length === 0) {
    return <div>Nenhum usuário encontrado.</div>;
  }

  return (
    <div>
      <h2>Título da Seção</h2>
      <ul>
        {data.map((item: ListItem) => (
          <li key={item.id}>{item.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListSection;
