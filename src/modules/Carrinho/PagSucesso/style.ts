import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 50%;
  height: 50%;
  justify-content: center;
  background-color: #f2e7dc;
  flex-direction: column;
  border-radius: 0.938rem;
  padding: 1rem;

  h1 {
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-bottom: 7.813rem;
    margin-top: 7.813rem;
  }
`;

export const BotaoHome = styled.button`
  width: 50%;
  height: 1.875rem;
  background-color: var(--cor-secundaria);
  border-radius: 0.938rem;
  border: none;
  margin-bottom: 0.625rem;

  a {
    font-family: var(--fonte-family);
    font-weight: 800;
    text-transform: uppercase;
    color: white;
  }
`;
