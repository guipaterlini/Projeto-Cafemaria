import styled, { css } from "styled-components";

export const Main = styled.main`
  background-image: url("../../../assets/images/fundo-login.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50vh;
  justify-content: center;
  span {
    a{
      transition: 300ms;
      :hover {
        font-weight: 700;
      }
    }
  }
`;

const SharedStyles = css`
  padding: 15px;
  margin: 10px;
  width: 80%;
  max-width: 300px;
  border: none;
  color: var(--cor-font-secundaria);
  font-size: var(--fonte-grande);
  font-weight: 300;

  ::placeholder {
    color: var(--cor-font-secundaria);
  }
`;

export const Input = styled.input`
  ${SharedStyles};
  border-radius: 30px;
  padding-left: 20px;
  background-color: #256098;
`;

export const Button = styled.button`
  ${SharedStyles};
  border-radius: 5px;
  background-color: #f2465c;
  font-weight: 500;
  cursor: pointer;
  transition: 300ms;

  :hover {
    opacity: 0.7;
  }
`;

export const Span = styled.span`
color: red;
opacity: 0.8;
font-size: var(--fonte-corpo);
margin-top: -10px;
`