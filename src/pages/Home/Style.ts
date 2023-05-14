import styled from "styled-components";

export const FirstContainer = styled.div`
  margin: 30px 0;
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
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 80px 0;
`;

export const Image = styled.img`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 10px;
  height: 50vh;
  max-height: 300px;
  margin: 0 20px;
  max-width: 250px;

  &:nth-child(2) {
    margin-top: -40px;
  }
`;
