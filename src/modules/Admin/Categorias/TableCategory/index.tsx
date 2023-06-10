import React from "react";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri";
import {
  ActionButton,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableWrapper,
} from "./styles";
import { CategoryData } from "../../../../type";

interface TableProps {
  data: CategoryData[]; // Propriedade que recebe os dados da tabela
  onEdit: (id: number) => void; // Função de callback para editar uma categoria pelo ID
  onDelete: (id: number) => void; // Função de callback para excluir uma categoria pelo ID
}

const TableCategory: React.FC<TableProps> = ({ data, onEdit, onDelete }) => {
  return (
    <TableWrapper>
      {/* Cabeçalho da tabela */}
      <TableHead>
        <tr>
          {/* Cabeçalho da coluna "Nome" */}
          <TableHeader>Nome</TableHeader>
          {/* Cabeçalho da coluna "Descrição" */}
          <TableHeader>Descrição</TableHeader>
          {/* Cabeçalho da coluna "Ações" */}
          <TableHeader>Ações</TableHeader>{" "}
        </tr>
      </TableHead>
      <tbody>
        {/* Mapeamento dos dados para renderizar as linhas da tabela */}
        {data.map((category: CategoryData) => (
          <TableRow key={category.id}>
            <TableCell>{category.title}</TableCell> {/* Exibe o nome da categoria */}
            <TableCell>{category.description}</TableCell> {/* Exibe a descrição da categoria */}
            <TableCell>
              {/* Botões de ação para editar e excluir a categoria */}
              <ActionButton onClick={() => onEdit(category.id)}>
                <RiEdit2Line />
              </ActionButton>
              <ActionButton onClick={() => onDelete(category.id)}>
                <RiDeleteBinLine />
              </ActionButton>
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default TableCategory;
