import React, { useEffect, useState } from "react";
import {
  deletarUsuario,
  listarUsuarios,
} from "../../services/MainApi/usuarios";
interface UserData {
  first_name: string;
  last_name: string;
  avatar: string;
  job: string;

  id: number;
  name: string;
  email: string;
  password: string;
  type: string;
}
interface ListSectionProps {
  title: string;
  dataKeys?: (keyof UserData)[];
}

const ListSection: React.FC<ListSectionProps> = ({ title, dataKeys }) => {
  const [data, setData] = useState<UserData[]>([]);
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
    const confirmed = window.confirm("Tem certeza que deseja deletar?");
    if (confirmed) {
      deletarUsuario(id);
    }
  };

  const getProperty = (obj: UserData, key: keyof UserData) => {
    return obj[key];
  };

  return (
    <div>
      <h2>{title}</h2>
      <button>Adicionar {title}</button>
      <ul>
        {data.map((user: UserData) => (
          <li key={user.id}>
            {dataKeys ? (
              <>
                {dataKeys.map((key) => (
                  <span key={key}>{getProperty(user, key)}</span>
                ))}
              </>
            ) : (
              <>
                {Object.entries(user).map(([key, value]) => (
                  <span key={key}>{value}</span>
                ))}
              </>
            )}
            <button onClick={() => handleEdit(user.id)}>Editar</button>
            <button onClick={() => handleDelete(user.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSection;
