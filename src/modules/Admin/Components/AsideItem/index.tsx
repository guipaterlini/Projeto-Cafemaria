import React from "react";
import { MenuButton } from "./styles";

interface AsideItemProps {
  onClick: () => void;
  label: string;
}

const AsideItem: React.FC<AsideItemProps> = ({ onClick, label }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <li>
      <MenuButton onClick={handleClick}>{label}</MenuButton>
    </li>
  );
};

export default AsideItem;
