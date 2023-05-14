import styled from "styled-components";

export const FooterDefault = styled.footer`
  display: flex;
  justify-content: space-around;
  padding: 45px 0;
  max-width: 1440px;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const NewsletterContainer = styled.div`
  width: 30%;

  h2 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 44px;
  }

  p {
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1rem;
    padding: 10px 0;
  }

  @media (max-width: 480px) {
    text-align: center;
    width: 90%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

export const FormNewsLetter = styled.form`
  background: #fff;
  border: 1px solid;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 10px;

  input {
    border: none;
    border-radius: 20px;
    width: 70%;
  }

  button {
    cursor: pointer;
    background: #fff;
    border: none;
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 1rem;
  }

  @media (max-width: 768px) {
    background-color: var(--cor-primaria);
    border: none;
    display: flex;
    flex-direction: column;
    margin: 20px;

    input {
      text-align: center;
      padding: 10px;
      width: 100%;
    }

    button {
      background-color: var(--cor-secundaria);
      border-radius: 20px;
      margin-top: 10px;
      padding: 10px 20px;
      width: 50%;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    background-color: var(--cor-primaria);
    border: none;
    display: flex;
    flex-direction: column;

    input {
      text-align: center;
      padding: 10px;
      width: 100%;
    }

    button {
      background-color: var(--cor-secundaria);
      border-radius: 20px;
      margin-top: 10px;
      padding: 10px 20px;
    }
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  font-size: 1rem;
  justify-content: space-around;
  width: 40%;

  ul {
    list-style: none;
  }

  h3 {
    margin: 0;
    margin-bottom: 20px;
  }

  a {
    font-size: 0.9rem;
    line-height: 26px;
  }

  @media (max-width: 480px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 80%;
    ul {
      margin: 20px;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    text-align: center;
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    ul {
      margin: 10px;
    }
  }
`;
