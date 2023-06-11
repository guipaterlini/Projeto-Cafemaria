import React, { useEffect, useState } from "react";
import {
  deletarUsuario,
  listarUsuario,
  listarUsuarios,
} from "../../../../services/MainApi/usuarios";
import ListSectionHeader from "../../Components/ListSectionHeader";
import { UserData } from "../../../../type";
import TableAdmin from "../TableAdmin";
import AdminModal from "../AdminModal";

interface ListSectionProps {
  title: string;
}

const AdminSection: React.FC<ListSectionProps> = ({ title }) => {
  const [data, setData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState<UserData | null>(null);
  const [isCreatingAdmin, setIsCreatingAdmin] = useState(false);

  useEffect(() => {
    async function fetchListData() {
      try {
        const response = await listarUsuarios();
        setData(response.data?.result || []);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados da lista:", error);
      }
    }

    fetchListData();
  }, []);

  const fetchAdminData = async (id: number) => {
    try {
      const response = await listarUsuario(id);
      setSelectedAdmin(response.data.result);
    } catch (error) {
      console.error("Erro ao buscar dados do usuario admin:", error);
    }
  };

  const handleCreateAdminSuccess = async () => {
    setIsCreatingAdmin(true);

    try {
      const response = await listarUsuarios();
      setData(response.data?.result || []);
    } catch (error) {
      console.error("Erro ao buscar dados da lista:", error);
    }

    setIsCreatingAdmin(false);
  };

  const handleEdit = async (id: number) => {
    setIsModalOpen(true);
    await fetchAdminData(id);
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm("Tem certeza que deseja deletar?");
    if (!confirmed) return;

    try {
      await deletarUsuario(id);
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Erro ao deletar admin:", error);
    }
  };

  const handleAddAdmin = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAdmin(null);
  };

  return (
    <div>
      <ListSectionHeader title={title} onAddItem={handleAddAdmin} />
      {loading && <div>Carregando...</div>}
      {isCreatingAdmin && <div>Cadastrando admin...</div>}
      {!loading && data.length === 0 && <div>Nenhum admin encontrado.</div>}
      {!loading && data.length > 0 && (
        <>
          <TableAdmin data={data} onEdit={handleEdit} onDelete={handleDelete} />
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <AdminModal
                  onClose={handleCloseModal}
                  onCreateSuccess={handleCreateAdminSuccess}
                  admin={selectedAdmin}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default AdminSection;
