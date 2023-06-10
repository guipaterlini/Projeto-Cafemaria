import styled from "styled-components";

const colors = {
  fontPrimary: "var(--cor-font-primaria)",
  fontSecondary: "var(--cor-font-secundaria)",
  primary: "var(--cor-primaria)",
  secondary: "var(--cor-secundaria)",
  blackFont: "var(--cor-font-preta)",
  alternative: "var(--cor-alternativa)",
};

const fonts = {
  title: "var(--fonte-titulo)",
  body: "var(--fonte-corpo)",
  family: "var(--fonte-family)",
};

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  overflow-y: auto; /* Habilita a rolagem da página */
`;

export const ModalContent = styled.div`
  background-color: ${colors.fontSecondary};
  padding: 20px;
  margin: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 50%;

  h2 {
    width: 90%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    color: ${colors.fontPrimary};
    font-size: ${fonts.title};
    font-family: ${fonts.family};
    width: 90%;
  }

  label span {
    margin-bottom: 5px;
  }

  input, select {
    padding: 8px;
    margin-bottom: 10px;
    border-radius: 4px;
    border: 1px solid ${colors.fontPrimary};
    font-size: ${fonts.body};
    font-family: ${fonts.family};
    width: 100%;
  }

  textarea {
    padding: 8px;
    margin-bottom: 10px;
    border-radius: 4px;
    border: 1px solid ${colors.fontPrimary};
    font-size: ${fonts.body};
    font-family: ${fonts.family};
    width: 100%;

    /* Estilos para tornar o textarea expansível */
    resize: vertical;
    min-height: 100px;
    overflow: auto;
    max-height: 300px; /* Defina a altura máxima desejada */
  }

  span {
    color: ${colors.alternative};
    font-size: ${fonts.body};
    margin-top: -15px;
    font-family: ${fonts.family};
  }

  .button-group {
    display: flex;
    gap: 10px;
  }

  button[type="submit"],
  button[type="button"] {
    padding: 8px 16px;
    margin-top: 10px;
    border-radius: 4px;
    border: none;
    background-color: ${colors.secondary};
    color: ${colors.blackFont};
    cursor: pointer;
    font-size: ${fonts.title};
    font-family: ${fonts.family};
  }

  button[type="submit"]:hover,
  button[type="button"]:hover {
    background-color: ${colors.primary};
  }
`;
