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
import { UserData } from "../../../../type";

interface TableProps {
  data: UserData[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const TableClient: React.FC<TableProps> = ({ data, onEdit, onDelete }) => {
  const filteredData = data.filter((user: UserData) => user.role === "buyer");

  return (
    <TableWrapper>
      <TableHead>
        <tr>
          <TableHeader>Nome</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Tipo</TableHeader>
          <TableHeader>Ações</TableHeader>
        </tr>
      </TableHead>
      <tbody>
        {filteredData.map((user: UserData) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>
              <ActionButton onClick={() => onEdit(user.id)}>
                <RiEdit2Line />
              </ActionButton>
              <ActionButton onClick={() => onDelete(user.id)}>
                <RiDeleteBinLine />
              </ActionButton>
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default TableClient;
