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
  data: CategoryData[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const TableCategory: React.FC<TableProps> = ({ data, onEdit, onDelete }) => {
  return (
    <TableWrapper>
      <TableHead>
        <tr>
          <TableHeader>Nome</TableHeader>
          <TableHeader>Descrição</TableHeader>
          <TableHeader>Ações</TableHeader>
        </tr>
      </TableHead>
      <tbody>
        {data.map((category: CategoryData) => (
          <TableRow key={category.id}>
            <TableCell>{category.title}</TableCell>
            <TableCell>{category.description}</TableCell>
            <TableCell>
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
