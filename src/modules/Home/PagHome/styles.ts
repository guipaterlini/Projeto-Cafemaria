import styled from "styled-components";

export const FirstContainer = styled.div`
  margin: 30px auto;
  text-align: center;

  h1 {
    color: var(--cor-font-preta);
    font-family: "Fraunces", serif;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    color: var(--cor-font-primaria);
    font-size: var(--fonte-titulo);
    font-weight: 400;
    line-height: 1.3rem;
    width: 45%;
  }

  button {
    color: var(--cor-font-preta);
    background: var(--cor-secundaria);
    border: none;
    border-radius: 30px;
    font-size: var(--fonte-titulo);
    font-weight: 600;
    margin-top: 30px;
    padding: 15px 45px;
  }

  @media (max-width: 1024px) {
    width: 90%;

    p {
      width: 80%;
    }
  }

`;

