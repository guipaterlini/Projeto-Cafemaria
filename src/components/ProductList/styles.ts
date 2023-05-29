import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  justify-content: space-around;
`;

export const CardContainer = styled.div`
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 10px;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin: 5px auto;
`;

export const Price = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 32px; /* Adiciona uma margem inferior maior */
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
