import React, { useEffect, useState } from "react";
import ListSectionHeader from "../../Components/ListSectionHeader";
import { CategoryData } from "../../../../type";
import {
  deletarCategoria,
  listarCategorias,
  listarCategoria,
} from "../../../../services/MainApi/categorias";
import TableCategory from "../TableCategory";
import CategoryModal from "../CategoryModal";

interface ListSectionProps {
  title: string;
}

const CategorySection: React.FC<ListSectionProps> = ({ title }) => {
  const [data, setData] = useState<CategoryData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryData | null>(
    null
  );
  const [isCreatingCategory, setIsCreatingCategory] = useState(false);

  // Busca os dados da lista de categorias quando o componente é montado
  useEffect(() => {
    async function fetchListData() {
      try {
        const response = await listarCategorias();
        setData(response.data?.result || []);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados da lista:", error);
      }
    }

    fetchListData();
  }, []);

  // Busca os dados de uma categoria específica pelo ID
  const fetchCategoryData = async (id: number) => {
    try {
      const response = await listarCategoria(id);
      setSelectedCategory(response.data.result);
    } catch (error) {
      console.error("Erro ao buscar dados da categoria:", error);
    }
  };

  // Função de callback chamada quando a criação de uma categoria é bem-sucedida
  const handleCreateCategorySuccess = async () => {
    setIsCreatingCategory(true);

    try {
      const response = await listarCategorias();
      setData(response.data?.result || []);
    } catch (error) {
      console.error("Erro ao buscar dados da lista:", error);
    }

    setIsCreatingCategory(false);
  };

  // Função para editar uma categoria pelo ID
  const handleEdit = async (id: number) => {
    setIsModalOpen(true);
    await fetchCategoryData(id);
  };

  // Função para excluir uma categoria pelo ID
  const handleDelete = async (id: number) => {
    const confirmed = window.confirm("Tem certeza que deseja deletar?");
    if (!confirmed) return;

    try {
      await deletarCategoria(id);
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Erro ao deletar categoria:", error);
    }
  };

  // Função para adicionar uma nova categoria
  const handleAddCategory = () => {
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  return (
    <div>
      {/* Cabeçalho da seção de lista de categorias */}
      <ListSectionHeader title={title} onAddItem={handleAddCategory} />

      {/* Exibe uma mensagem de carregamento enquanto os dados estão sendo buscados */}
      {loading && <div>Carregando...</div>}

      {/* Exibe uma mensagem de criação da categoria */}
      {isCreatingCategory && <div>Criando categoria...</div>}

      {/* Exibe uma mensagem caso não haja categorias encontradas */}
      {!loading && data.length === 0 && (
        <div>Nenhuma categoria encontrada.</div>
      )}

      {/* Renderiza a tabela de categorias se houver dados */}
      {!loading && data.length > 0 && (
        <>
          <TableCategory
            data={data}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />

          {/* Renderiza o modal para adicionar/editar uma categoria */}
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <CategoryModal
                  onClose={handleCloseModal}
                  onCreateSuccess={handleCreateCategorySuccess}
                  category={selectedCategory}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CategorySection;
