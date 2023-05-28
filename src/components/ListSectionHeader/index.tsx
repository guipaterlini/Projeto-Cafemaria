import React from "react";
import { AddButton, Title, Wrapper } from "./styles";

interface ListSectionHeaderProps {
  title: string;
  onAddItem: () => void;
}

const ListSectionHeader: React.FC<ListSectionHeaderProps> = ({ title, onAddItem }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <AddButton onClick={onAddItem}>Adicionar {title}</AddButton>
    </Wrapper>
  );
};

export default ListSectionHeader;
