import styled, { css } from "styled-components";

export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: var(--fonte-corpo);

  @media (max-width: 768px) {
    font-size: var(--fonte-corpo-mobile);
  }
`;

export const TableHead = styled.thead`
  border-bottom: 1px solid var(--cor-secundaria);
`;

export const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  font-weight: 600;
  color: var(--cor-font-secundaria);
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: var(--cor-secundaria);
  }

  &:last-child {
    td {
      border-bottom: none;
    }
  }
`;

export const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid var(--cor-secundaria);
`;

export const ActionButton = styled.button<{ primary?: boolean }>`
  border: none;
  background: none;
  cursor: pointer;
  margin-right: 8px;
  color: var(--cor-font-primaria);
  font-size: 18px;

  ${(props) =>
    props.primary &&
    css`
      color: var(--cor-alternativa);
    `}
`;
