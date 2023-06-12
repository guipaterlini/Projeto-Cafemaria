import styled from "styled-components";

export const LogoutBtn = styled.button`
  padding: 10px;
  border-radius: 10px;
  align-self: center;
  border: none;
  display: flex;
  margin-bottom: 20px;
  background-color: var(--cor-secundaria);
  color: var(--cor-font-preta);
  cursor: pointer;
  transition: 0.3s;
  :hover {
    opacity: 0.7;
  }
`;

export const Container = styled.table`
  width: 90%;

  thead {
    background: #f8f8f8;
  }
`;

export const ListItem = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  height: 25px;
  background-color: #f2e7dc;
  text-align: center;
  font-family: var(--fonte-family);
  font-weight: 700;
  border-radius: 5px;
`;
