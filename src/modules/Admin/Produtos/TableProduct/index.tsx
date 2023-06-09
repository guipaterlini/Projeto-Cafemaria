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
import { Column } from "../ProductSection";
import { ProductData } from "../../../../type";

interface TableProps {
  columns: Column[];
  data: ProductData[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const TableProduct: React.FC<TableProps> = ({
  columns,
  data,
  onEdit,
  onDelete,
}) => {
  const getProperty = (obj: ProductData, key: keyof ProductData) => {
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
        {data.map((product: ProductData) => (
          <TableRow key={product.id}>
            {columns.map((column) => (
              <TableCell key={column.key}>
                {getProperty(product, column.key)}
              </TableCell>
            ))}
            <TableCell>
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
