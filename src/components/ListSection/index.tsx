import React, { useEffect, useState } from "react";
import {
  deletarUsuario,
  listarUsuarios,
} from "../../services/MainApi/usuarios";
import FormModal from "../FormModal";
import ListSectionHeader from "../ListSectionHeader";
import Table from "../Table";

export interface UserData {
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

export interface Column {
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
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a abertura/fechamento do modal
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null); // Estado para armazenar o ID do usuário selecionado para edição

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
    setSelectedUserId(id);
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    const confirmed = window.confirm("Tem certeza que deseja deletar?");
    if (confirmed) {
      deletarUsuario(id);
    }
  };

  const handleAddUser = () => {
    setSelectedUserId(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Fecha o modal
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseModal(); // Fecha o modal apenas se o clique foi fora da caixa do modal
    }
  };

  const fields = [
    { label: "Primeiro Nome", name: "firstName", type: "text", required: true },
    { label: "Último Nome", name: "lastName", type: "text", required: true },
    { label: "Email", name: "email", type: "email", required: true },
    { label: "Senha", name: "password", type: "password", required: true },
  ];

  return (
    <div>
      <ListSectionHeader title={title} onAddUser={handleAddUser} />
      <Table
        columns={columns}
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {isModalOpen && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <FormModal
              onClose={handleCloseModal}
              userId={selectedUserId}
              fields={fields}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ListSection;
