import React from "react";

interface ListSectionHeaderProps {
  title: string;
  onAddUser: () => void;
}

const ListSectionHeader: React.FC<ListSectionHeaderProps> = ({ title, onAddUser }) => {
  return (
    <div>
      <h2>{title}</h2>
      <button onClick={onAddUser}>Adicionar {title}</button>
    </div>
  );
};

export default ListSectionHeader;
