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
import { ProductData } from "../../../../type";

interface TableProps {
  data: ProductData[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const TableProduct: React.FC<TableProps> = ({ data, onEdit, onDelete }) => {
  return (
    <TableWrapper>
      <TableHead>
        <tr>
          <TableHeader>Nome</TableHeader>
          <TableHeader>Descrição</TableHeader>
          <TableHeader>Preço</TableHeader>
          <TableHeader>Quantidade</TableHeader>
          <TableHeader>Variante</TableHeader>
          <TableHeader>Codigo Categoria</TableHeader>
          <TableHeader>Imagem</TableHeader>
          <TableHeader>Ações</TableHeader>
        </tr>
      </TableHead>
      <tbody>
        {data.map((product: ProductData) => (
          <TableRow key={product.id}>
            <TableCell>{product.title}</TableCell>
            <TableCell>{product.description}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.amount}</TableCell>
            <TableCell>{product.option}</TableCell>
            <TableCell>{product.category_id}</TableCell>
            <TableCell>{product.image}</TableCell>
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
