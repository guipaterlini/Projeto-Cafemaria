import React, { useEffect, useState } from "react";
import {
  deletarUsuario,
  listarUsuarios,
} from "../../../services/MainApi/usuarios";
import FormModal from "../../FormModal";
import ListSectionHeader from "../../ListSectionHeader";
import { UserData } from "../../../type";
import TableAdmin from "../../Table/TableAdmin";

export interface Column {
  key: keyof UserData;
  label: string;
}

interface ListSectionProps {
  title: string;
  columns: Column[];
}

const AdminSection: React.FC<ListSectionProps> = ({ title, columns }) => {
  const [data, setData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  useEffect(() => {
    async function fetchListData() {
      try {
        const response = await listarUsuarios();
        setData(response.data.result || []);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados da lista:", error);
      }
    }

    fetchListData();
  }, []);

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
    setIsModalOpen(false);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
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
      <ListSectionHeader title={title} onAddItem={handleAddUser} />
      {loading && <div>Carregando...</div>}
      {!loading && data.length === 0 && <div>Nenhum usuário encontrado.</div>}
      {!loading && data.length > 0 && (
        <>
          <TableAdmin
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
                  title={title}
                />
              </div>
            </div>
          )}
        </>
      )}
      {isModalOpen && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <FormModal
              onClose={handleCloseModal}
              userId={selectedUserId}
              fields={fields}
              title={title}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSection;
