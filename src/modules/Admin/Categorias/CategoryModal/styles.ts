import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background-color: var(--cor-font-secundaria);
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 40%; /* Define a largura do modal */

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
    color: var(--cor-font-primaria);
    font-size: var(--fonte-titulo);
    font-family: var(--fonte-family);
    width: 90%;
    input[type="checkbox"] {
      margin-bottom: -20px;
      transform: scale(1.5); /* Aumenta o tamanho do checkbox */
    }
  }

  label span {
    margin-bottom: 5px;
  }

  input[type="text"],
  input[type="number"],
  input[type="file"],
  input[type="email"],
  input[type="password"] {
    padding: 8px;
    margin-bottom: 10px;
    border-radius: 4px;
    border: 1px solid var(--cor-font-primaria);
    font-size: var(--fonte-corpo);
    font-family: var(--fonte-family);
    width: 100%;
  }

  span {
    color: var(--cor-alternativa);
    font-size: var(--fonte-corpo);
    margin-top: -15px;
    font-family: var(--fonte-family);
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
    background-color: var(--cor-secundaria);
    color: var(--cor-font-preta);
    cursor: pointer;
    font-size: var(--fonte-titulo);
    font-family: var(--fonte-family);
  }

  button[type="submit"]:hover,
  button[type="button"]:hover {
    background-color: var(--cor-primaria);
  }
`;
