import React, { useState, useEffect } from "react";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri";
import {
  ActionButton,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableWrapper,
} from "./styles";
import { ProductData } from "../../../../type";
import { listarCategoria } from "../../../../services/MainApi/categorias";

interface TableProps {
  data: ProductData[]; // Array de dados dos produtos
  onEdit: (id: number) => void; // Função de callback para edição de um produto
  onDelete: (id: number) => void; // Função de callback para exclusão de um produto
}

const TableProduct: React.FC<TableProps> = ({ data, onEdit, onDelete }) => {
  // Estado para armazenar os títulos das categorias
  const [categoryTitles, setCategoryTitles] = useState<Record<number, string>>(
    {}
  );

  useEffect(() => {
    // Função assíncrona para buscar os títulos das categorias
    const fetchCategoryTitles = async () => {
      // Extrai os IDs das categorias dos produtos
      const categoryIds = data.map((product) => product.category_id);

      // Cria um array de promises para buscar os títulos das categorias
      const categoryPromises = categoryIds.map((id) => listarCategoria(id));

      try {
        // Aguarda a resolução de todas as promises
        const responses = await Promise.all(categoryPromises);

        // Objeto para armazenar os títulos das categorias
        const titles: Record<number, string> = {};

        // Itera sobre as respostas e armazena os títulos correspondentes aos IDs
        responses.forEach((response, index) => {
          const category = response.data.result;
          titles[categoryIds[index]] = category.title;
        });

        // Atualiza o estado com os títulos das categorias
        setCategoryTitles(titles);
      } catch (error) {
        console.error("Erro ao buscar títulos das categorias:", error);
      }
    };

    // Chama a função de busca dos títulos das categorias quando os dados dos produtos mudarem
    fetchCategoryTitles();
  }, [data]);

  return (
    <TableWrapper>
      <TableHead>
        <tr>
          <TableHeader>Nome</TableHeader>
          <TableHeader>Descrição</TableHeader>
          <TableHeader>Preço</TableHeader>
          <TableHeader>Quantidade</TableHeader>
          <TableHeader>Variante</TableHeader>
          <TableHeader>Categoria</TableHeader>
          <TableHeader>Imagem</TableHeader>
          <TableHeader>Ações</TableHeader>
        </tr>
      </TableHead>
      <tbody>
        {/* Renderiza uma linha para cada produto */}
        {data.map((product: ProductData) => (
          <TableRow key={product.id}>
            <TableCell>{product.title}</TableCell>
            <TableCell>{product.description}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.amount}</TableCell>
            <TableCell>{product.option}</TableCell>
            <TableCell>
              {/* Exibe o título da categoria correspondente ou "Carregando..." */}
              {categoryTitles[product.category_id] || "Carregando..."}
            </TableCell>
            <TableCell>{product.image}</TableCell>
            <TableCell>
              {/* Botões de ação para editar e excluir o produto */}
              <ActionButton onClick={() => onEdit(product.id)}>
                <RiEdit2Line />
              </ActionButton>
              <ActionButton onClick={() => onDelete(product.id)}>
                <RiDeleteBinLine />
              </ActionButton>
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default TableProduct;
