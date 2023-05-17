import styled from "styled-components";

export const SearchComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const InputDefault = styled.input`
  border: 1px solid;
  border-radius: 20px;
  max-width: 250px;
  padding: 0.5rem;
  position: relative;
  align-self: center;
  text-align: center;
`;

export const LoadingText = styled.p`
  position: absolute;
  top: 100px;
`;

export const ResultadosPesquisa = styled.div`
  display: block;
  position: absolute;
  top: 100px;
  background-color: #fff;
  width: 163px;
  z-index: 1;
  border-radius: 20px;

  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  .row {
    padding: 5px;
  }
`;
