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
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 10px;
  border-radius: 10px;
  background-color: var(--cor-secundaria);
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  border: 1px solid #000;
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  font-size: var(--fonte-grande);
  color: var(--cor-font-preta);
  font-family: var(--fonte-family);
`;

export const Price = styled.p`
  font-size: var(--fonte-titulo);
  color: var(--cor-font-preta);
  margin-bottom: 10px;
  font-family: var(--fonte-family);
`;

export const Button = styled.button`
  font-size: var(--fonte-grande);
  padding: 15px 0;
  width: 90%;
  border: none;
  font-family: var(--fonte-family);
  color: var(--cor-font-preta);
  background-color: var(--cor-primaria);
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: var(--cor-font-primaria);
    color: var(--cor-font-secundaria);
  }
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
