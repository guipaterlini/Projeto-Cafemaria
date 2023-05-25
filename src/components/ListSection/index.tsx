import React, { useEffect, useState } from "react";
import {
  deletarUsuario,
  listarUsuarios,
} from "../../services/MainApi/usuarios";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri"; // Importando ícones do React Icons (https://react-icons.github.io/react-icons/)

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

interface Column {
  key: keyof UserData;
  label: string;
}

interface ListSectionProps {
  title: string;
  columns: Column[];
}

const ListSection: React.FC<ListSectionProps> = ({ title, columns }) => {
  const [data, setData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchListData() {
      try {
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
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user: UserData) => (
            <tr key={user.id}>
              {columns.map((column) => (
                <td key={column.key}>{getProperty(user, column.key)}</td>
              ))}
              <td>
                <button onClick={() => handleEdit(user.id)}>
                  <RiEdit2Line />
                </button>
                <button onClick={() => handleDelete(user.id)}>
                  <RiDeleteBinLine />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListSection;
