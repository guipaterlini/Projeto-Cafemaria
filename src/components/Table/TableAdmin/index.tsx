import React from "react";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri";
import { ActionButton, TableCell, TableHead, TableHeader, TableRow, TableWrapper } from "./styles";
import { Column } from "../../ListSection/AdminSection";
import { UserData } from "../../../type";

interface TableProps {
  columns: Column[];
  data: UserData[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const TableAdmin: React.FC<TableProps> = ({ columns, data, onEdit, onDelete }) => {
  const getProperty = (obj: UserData, key: keyof UserData) => {
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
        {data.map((user: UserData) => (
          <TableRow key={user.id}>
            {columns.map((column) => (
              <TableCell key={column.key}>{getProperty(user, column.key)}</TableCell>
            ))}
            <TableCell>
              <ActionButton onClick={() => onEdit(user.id)}>
                <RiEdit2Line />
              </ActionButton>
              <ActionButton onClick={() => onDelete(user.id)} >
                <RiDeleteBinLine />
              </ActionButton>
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default TableAdmin;
