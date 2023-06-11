import React, { useEffect, useState } from "react";
import ListSectionHeader from "../../Components/ListSectionHeader";
import { OrderData } from "../../../../type";
import {
  deletarPedido,
  listarPedido,
  listarPedidos,
} from "../../../../services/MainApi/pedidos";
import TableOrder from "../TableOrder";
import OrderModal from "../OrderModal";

interface ListSectionProps {
  title: string;
}

const OrderSection: React.FC<ListSectionProps> = ({ title }) => {
  const [data, setData] = useState<OrderData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<OrderData | null>(null);
  const [isCreatingOrder, setIsCreatingOrder] = useState(false);

  useEffect(() => {
    async function fetchListData() {
      try {
        const response = await listarPedidos();
        setData(response.data?.result || []);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados da lista:", error);
      }
    }

    fetchListData();
  }, []);

  const fetchOrderData = async (id: number) => {
    try {
      const response = await listarPedido(id);
      setSelectedOrder(response.data.result);
    } catch (error) {
      console.error("Erro ao buscar dados do pedido:", error);
    }
  };

  const handleCreateOrderSuccess = async () => {
    setIsCreatingOrder(true);

    try {
      const response = await listarPedidos();
      setData(response.data?.result || []);
    } catch (error) {
      console.error("Erro ao buscar dados da lista:", error);
    }

    setIsCreatingOrder(false);
  };

  const handleEdit = async (id: number) => {
    setIsModalOpen(true);
    await fetchOrderData(id);
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm("Tem certeza que deseja deletar?");
    if (!confirmed) return;

    try {
      await deletarPedido(id);
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Erro ao deletar pedido:", error);
    }
  };

  const handleAddOrder = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  return (
    <div>
      <ListSectionHeader title={title} onAddItem={handleAddOrder} />
      {loading && <div>Carregando...</div>}
      {isCreatingOrder && <div>Cadastrando pedido...</div>}
      {!loading && data.length === 0 && <div>Nenhum pedido encontrado.</div>}
      {!loading && data.length > 0 && (
        <>
          <TableOrder data={data} onEdit={handleEdit} onDelete={handleDelete} />
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <OrderModal
                  onClose={handleCloseModal}
                  onCreateSuccess={handleCreateOrderSuccess}
                  order={selectedOrder}
                  />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      );
    };

export default OrderSection;
