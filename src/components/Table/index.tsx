import React from "react";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri";
import { Column, UserData } from "../ListSection";

interface TableProps {
  columns: Column[];
  data: UserData[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const Table: React.FC<TableProps> = ({ columns, data, onEdit, onDelete }) => {
  const getProperty = (obj: UserData, key: keyof UserData) => {
    return obj[key];
  };

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.label}</th>
          ))}
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user: UserData) => (
          <tr key={user.id}>
            {columns.map((column) => (
              <td key={column.key}>{getProperty(user, column.key)}</td>
            ))}
            <td>
              <button onClick={() => onEdit(user.id)}>
                <RiEdit2Line />
              </button>
              <button onClick={() => onDelete(user.id)}>
                <RiDeleteBinLine />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
