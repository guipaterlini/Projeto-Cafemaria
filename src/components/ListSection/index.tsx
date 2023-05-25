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
  title: string;
}

const ListSection: React.FC<ListSectionProps> = ({ title }) => {
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

  const handleEdit = (id: number) => {
    // Lógica para editar o usuário com o ID fornecido
  };

  const handleDelete = (id: number) => {
    // Lógica para deletar o usuário com o ID fornecido
  };

  return (
    <div>
      <h2>{title}</h2>
      <button>Adicionar usuário</button>
      <ul>
        {data.map((item: ListItem) => (
          <li key={item.id}>
            {item.email}
            <button onClick={() => handleEdit(item.id)}>Editar</button>
            <button onClick={() => handleDelete(item.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSection;
