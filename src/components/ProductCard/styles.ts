import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Price = styled.p`
  font-size: 16px;
  color: #666;
`;

export const ListContainer = styled.div`
  margin-top: 16px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

export const PageButton = styled.button<{ isActive: boolean }>`
  padding: 8px 12px;
  margin-right: 4px;
  background-color: ${(props) => (props.isActive ? "#ccc" : "transparent")};
  border: 1px solid #ccc;
  border-radius: 4px;
  color: ${(props) => (props.isActive ? "#fff" : "#333")};
  cursor: pointer;

  &:hover {
    background-color: #ccc;
    color: #fff;
  }
`;
