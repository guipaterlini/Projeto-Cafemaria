import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  color: var(--cor-font-primaria);
  font-family: var(--fonte-family);
  font-size: var(--fonte-destaque);
  margin: 0 10px;
`;

export const AddButton = styled.button`
  color: var(--cor-font-preta);
  cursor: pointer;
  background-color: var(--cor-secundaria);
  border: none;
  border-radius: 30px;
  font-family: var(--fonte-family);
  font-size: var(--fonte-titulo);
  padding: 10px;
  margin: 0 10px;
  transition: opacity 0.3s; /* Adiciona uma transição suave para a mudança de opacidade */

  &:hover {
    opacity: 0.8; /* Define a opacidade do botão no hover */
    cursor: pointer;
  }
`;
