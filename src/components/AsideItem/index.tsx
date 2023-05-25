import React from "react";

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
      <button onClick={handleClick}>{label}</button>
    </li>
  );
};

export default AsideItem;
