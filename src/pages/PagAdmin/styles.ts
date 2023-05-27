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
