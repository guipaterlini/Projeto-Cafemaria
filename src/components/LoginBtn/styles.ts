import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: var(--fonte-titulo);
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;

  @media (max-width: 1024px) {
    color: var(--cor-font-preta);
    opacity: 0.7;
  }
`;
