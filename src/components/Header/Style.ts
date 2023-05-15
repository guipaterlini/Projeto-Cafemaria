import styled from "styled-components";

export const HeaderDefault = styled.nav`
  display: flex;
  margin: 20px 0;

  @media (max-width: 1024px) {
    width: 50%;
  }
`;

export const ListDefault = styled.ul<Props>`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  text-align: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    position: absolute;
    top: 40px;
    right: 20px;
    background-color: var(--cor-secundaria);
    width: 30%;
    padding: 40px 10px 20px 10px;
    display: ${({ open }) => (open ? "flex" : "none")};
    z-index: 10;
    border-radius: 20px;
    li {
      padding: 10px 0;
    }
    a {
      color: var(--cor-font-preta);
      opacity: 0.7;
    }
  }
`;

export const ListItem = styled.li`
  padding: 1.5rem;
  text-decoration: none;
  font-weight: 600;
`;

export const InputDefault = styled.input`
  align-self: center;
  border: 1px solid;
  border-radius: 20px;
  height: 1.5rem;
  margin: 1.29rem;
  text-align: center;
  max-width: 250px;
  width: 30%;

  @media (max-width: 1024px) {
    display: none;
  }
`;

interface Props {
  open: boolean;
}

export const StyledBurger = styled.button<Props>`
  width: 1.5rem;
  height: 1.5rem;
  position: fixed;
  top: 55px;
  right: 30px;
  z-index: 20;
  display: none;
  border: none;
  cursor: pointer;
  background: transparent;

  &:focus {
    outline: none;
  }

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 1.5rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#030303" : "#030303")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    position: relative;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
