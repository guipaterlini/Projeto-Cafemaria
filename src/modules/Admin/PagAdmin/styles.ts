import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const AsideMenu = styled.aside`
  height: 100%;
  background-color: var(--cor-secundaria);
  z-index: 9998;
  position: fixed;
  left: 0;
  width: 245px;

  ul {
    width: 100%;
  }
`;

export const TableSection = styled.section`
  flex: 1;
  margin-left: 245px;
  padding: 0 30px;
`;
