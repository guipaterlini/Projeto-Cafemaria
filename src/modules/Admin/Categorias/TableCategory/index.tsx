import React from "react";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri";
import { ActionButton, TableCell, TableHead, TableHeader, TableRow, TableWrapper } from "./styles";
import { CategoryData } from "../../../../type";
import { Column } from "../CategorySection";

interface TableProps {
  columns: Column[];
  data: CategoryData[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const TableCategory: React.FC<TableProps> = ({ columns, data, onEdit, onDelete }) => {
  const getProperty = (obj: CategoryData, key: keyof CategoryData) => {
    return obj[key];
  };

  return (
    <TableWrapper>
      <TableHead>
        <tr>
          {columns.map((column) => (
            <TableHeader key={column.key}>{column.label}</TableHeader>
          ))}
          <TableHeader>Ações</TableHeader>
        </tr>
      </TableHead>
      <tbody>
        {data.map((category: CategoryData) => (
          <TableRow key={category.id}>
            {columns.map((column) => (
              <TableCell key={column.key}>{getProperty(category, column.key)}</TableCell>
            ))}
            <TableCell>
              <ActionButton onClick={() => onEdit(category.id)}>
                <RiEdit2Line />
              </ActionButton>
              <ActionButton onClick={() => onDelete(category.id)} >
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
