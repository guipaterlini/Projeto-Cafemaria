import React, { useEffect, useState } from "react";
import ListSectionHeader from "../../Components/ListSectionHeader";
import {
  deletarProduto,
  listarProduto,
  listarProdutos,
} from "../../../../services/MainApi/produtos";
import TableProduct from "../TableProduct";
import { ProductData } from "../../../../type";
import ProductModal from "../ProductModal";

interface ProductSectionProps {
  title: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({ title }) => {
  const [data, setData] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(
    null
  );
  const [isCreatingProduct, setIsCreatingProduct] = useState(false);

  useEffect(() => {
    async function fetchListData() {
      try {
        const response = await listarProdutos();
        setData(response.data?.result || []);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados da lista:", error);
      }
    }

    fetchListData();
  }, []);

  const fetchProductData = async (id: number) => {
    try {
      const response = await listarProduto(id);
      setSelectedProduct(response.data.result);
    } catch (error) {
      console.error("Erro ao buscar dados do produto:", error);
    }
  };

  const handleCreateProductSuccess = async () => {
    setIsCreatingProduct(true);

    try {
      const response = await listarProdutos();
      setData(response.data?.result || []);
    } catch (error) {
      console.error("Erro ao buscar dados da lista:", error);
    }

    setIsCreatingProduct(false);
  };

  const handleEdit = async (id: number) => {
    setIsModalOpen(true);
    await fetchProductData(id);
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm("Tem certeza que deseja deletar?");
    if (!confirmed) return;

    try {
      await deletarProduto(id);
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
    }
  };

  const handleAddProduct = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <ListSectionHeader title={title} onAddItem={handleAddProduct} />
      {loading && <div>Carregando...</div>}
      {isCreatingProduct && <div>Criando produto...</div>}
      {!loading && data.length === 0 && <div>Nenhum produto encontrado.</div>}
      {!loading && data.length > 0 && (
        <>
          <TableProduct
            data={data}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <ProductModal
                  onClose={handleCloseModal}
                  onCreateSuccess={handleCreateProductSuccess}
                  product={selectedProduct}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductSection;
