import React, { useEffect, useState } from "react";
import {
  deletarUsuario,
  listarUsuario,
  listarUsuarios,
} from "../../../../services/MainApi/usuarios";
import ListSectionHeader from "../../Components/ListSectionHeader";
import { UserData } from "../../../../type";
import TableClient from "../TableCliente";
import ClientModal from "../ClienteModal";

interface ListSectionProps {
  title: string;
}

const ClienteSection: React.FC<ListSectionProps> = ({ title }) => {
  const [data, setData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<UserData | null>(null);
  const [isCreatingClient, setIsCreatingClient] = useState(false);

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

  const fetchClientData = async (id: number) => {
    try {
      const response = await listarUsuario(id);
      setSelectedClient(response.data.result);
    } catch (error) {
      console.error("Erro ao buscar dados do cliente:", error);
    }
  };

  const handleCreateClientSuccess = async () => {
    setIsCreatingClient(true);

    try {
      const response = await listarUsuarios();
      setData(response.data?.result || []);
    } catch (error) {
      console.error("Erro ao buscar dados da lista:", error);
    }

    setIsCreatingClient(false);
  };

  const handleEdit = async (id: number) => {
    setIsModalOpen(true);
    await fetchClientData(id);
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm("Tem certeza que deseja deletar?");
    if (!confirmed) return;

    try {
      await deletarUsuario(id);
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Erro ao deletar cliente:", error);
    }
  };

  const handleAddClient = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedClient(null);
  };

  return (
    <div>
      <ListSectionHeader title={title} onAddItem={handleAddClient} />
      {loading && <div>Carregando...</div>}
      {isCreatingClient && <div>Cadastrando cliente...</div>}
      {!loading && data.length === 0 && <div>Nenhum cliente encontrado.</div>}
      {!loading && data.length > 0 && (
        <>
          <TableClient
            data={data}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <ClientModal
                  onClose={handleCloseModal}
                  onCreateSuccess={handleCreateClientSuccess}
                  client={selectedClient}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ClienteSection;
