import React, { useEffect, useState } from "react";
import FormModal from "../../FormModal";
import ListSectionHeader from "../../ListSectionHeader";
import {
  deletarProduto,
  listarProdutos,
} from "../../../services/MainApi/produtos";
import TableProduct from "../../Table/TableProduct";
import { ProductData } from "../../../type";

export interface Column {
  key: keyof ProductData;
  label: string;
}

interface ProductSectionProps {
  title: string;
  columns: Column[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, columns }) => {
  const [data, setData] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  useEffect(() => {
    async function fetchListData() {
      try {
        const response = await listarProdutos();
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
      deletarProduto(id);
    }
  };

  const handleAddProduct = () => {
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
    { label: "Nome", name: "title", type: "text", required: true },
    { label: "Descrição", name: "description", type: "text", required: true },
    { label: "Preço", name: "price", type: "number", required: true },
    { label: "Quantidade", name: "amount", type: "number", required: true },
    { label: "Variante", name: "option", type: "text", required: true },
    { label: "Foto", name: "image", type: "image", required: true },
    { label: "Publicado", name: "published", type: "checkbox", required: true },
  ];

  return (
    <div>
      <ListSectionHeader title={title} onAddItem={handleAddProduct} />
      {loading && <div>Carregando...</div>}
      {!loading && data.length === 0 && <div>Nenhum produto encontrado.</div>}
      {!loading && data.length > 0 && (
        <>
          <TableProduct
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

export default ProductSection;
