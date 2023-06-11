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
import { OrderData } from "../../../../type";

interface TableProps {
  data: OrderData[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const TableOrder: React.FC<TableProps> = ({ data, onEdit, onDelete }) => {
  return (
    <TableWrapper>
      <TableHead>
        <tr>
          <TableHeader>Comprador</TableHeader>
          <TableHeader>Produtos</TableHeader>
          <TableHeader>Total</TableHeader>
          <TableHeader>Data</TableHeader>
          <TableHeader>Ações</TableHeader>
        </tr>
      </TableHead>
      <tbody>
        {data.map((order: OrderData) => (
          <TableRow key={order.id}>
            <TableCell>{order.buyer}</TableCell>
            <TableCell>{order.cart}</TableCell>
            <TableCell>{order.total_value}</TableCell>
            <TableCell>{order.created_at}</TableCell>

            <TableCell>
              <ActionButton onClick={() => onEdit(order.id)}>
                <RiEdit2Line />
              </ActionButton>
              <ActionButton onClick={() => onDelete(order.id)}>
                <RiDeleteBinLine />
              </ActionButton>
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default TableOrder;
