import React, { useEffect, useState } from "react";

import ListSectionHeader from "../../Components/ListSectionHeader";
import { CategoryData } from "../../../../type";
import {
  deletarCategoria,
  listarCategorias,
} from "../../../../services/MainApi/categorias";
import TableCategory from "../TableCategory";
import FormModal from "../../Components/FormModal";

export interface Column {
  key: keyof CategoryData;
  label: string;
}

interface ListSectionProps {
  title: string;
  columns: Column[];
}

const CategorySection: React.FC<ListSectionProps> = ({ title, columns }) => {
  const [data, setData] = useState<CategoryData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [isCreatingCategory, setIsCreatingCategory] = useState(false);

  useEffect(() => {
    async function fetchListData() {
      try {
        const response = await listarCategorias();
        setData(response.data.result || []);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados da lista:", error);
      }
    }

    fetchListData();
  }, []);

  const handleCreateCategorySuccess = async () => {
    setIsCreatingCategory(true);
  
    try {
      const response = await listarCategorias();
      setData(response.data.result || []);
    } catch (error) {
      console.error("Erro ao buscar dados da lista:", error);
    }
  
    setIsCreatingCategory(false);
  };
  

  const handleEdit = (id: number) => {
    setSelectedUserId(id);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm("Tem certeza que deseja deletar?");
    if (confirmed) {
      try {
        await deletarCategoria(id);
        const response = await listarCategorias();
        setData(response.data.result || []);
      } catch (error) {
        console.error("Erro ao deletar categoria:", error);
      }
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
    { label: "Nome", name: "title", type: "text", required: true },
    { label: "Descrição", name: "description", type: "text", required: true },
    { label: "Publicado", name: "published", type: "checkbox", required: true },
  ];

  return (
    <div>
      <ListSectionHeader title={title} onAddItem={handleAddUser} />
      {loading && <div>Carregando...</div>}
      {isCreatingCategory && <div>Criando categoria...</div>}

      {!loading && data.length === 0 && (
        <div>Nenhuma categoria encontrada.</div>
      )}
      {!loading && data.length > 0 && (
        <>
          <TableCategory
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
                  fields={fields} // Fields para criar categorias
                  entityType="Categorias" // Tipo de entidade
                  title={title}
                  onCreateSuccess={handleCreateCategorySuccess}
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
              fields={fields} // Fields para criar categorias
              entityType="Categorias" // Tipo de entidade
              title={title}
              onCreateSuccess={handleCreateCategorySuccess}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorySection;
