import styled from "styled-components";

export const H1 = styled.h1`
  font-size: var(--fonte-destaque);
  color: var(--cor-font-primaria);
  margin-bottom: 20px;
`;

export const Table = styled.table`
  max-width: 90%;
  border-collapse: collapse;
  color: var(--cor-font-primaria);

  th,
  td {
    padding: 12px;
    text-align: center;
    border-bottom: 1px solid var(--cor-secundaria);
  }

  th {
    background-color: var(--cor-secundaria);
    color: var(--cor-font-preta);
  }

  .tdTotal {
    border: none;
    font-weight: 700;
  }

  .RemoveBtn {
    border: none;
    background: none;
    cursor: pointer;
    color: var(--cor-font-primaria);
    font-size: 18px;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const OrderButton = styled.button`
  padding: 8px 16px;
  margin: 20px 15px;
  background-color: var(--cor-secundaria);
  color: var(--cor-font-preta);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    opacity: 0.7;
  }
`;
export const CancelButton = styled.button`
  padding: 8px 16px;
  margin: 20px 15px;
  background-color: var(--cor-secundaria);
  color: var(--cor-font-preta);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    opacity: 0.7;
  }
`;
