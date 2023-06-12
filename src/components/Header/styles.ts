import styled from "styled-components";

export const HeaderDefault = styled.nav`
  align-items: center;
  display: flex;
  margin: 20px 0;

  @media (max-width: 1024px) {
    width: 50%;
    a {
      flex-grow: 1;
      margin-right: auto;
    }
  }
`;

export const ListDefault = styled.ul<Props>`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  text-align: center;

  @media (max-width: 1024px) {
    background-color: var(--cor-secundaria);
    border-radius: 20px;
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    padding: 40px 10px 20px 10px;
    position: absolute;
    right: 20px;
    top: 40px;
    width: 30%;
    z-index: 10;
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
  font-weight: 600;
  margin: 1.5rem;
  text-decoration: none;
  transition: 300ms;

  :hover {
    a,
    button {
      color: var(--cor-font-preta);
      font-weight: 700;
    }
  }

  img {
    width: 30px;
    transition: 300ms;
    :hover {
      width: 35px;
      opacity: 0.7;
    }
  }
`;
interface Props {
  open: boolean;
}

export const StyledBurger = styled.button<Props>`
  background: transparent;
  border: none;
  cursor: pointer;
  display: none;
  height: 1.5rem;
  position: absolute;
  right: 30px;
  top: 55px;
  width: 1.5rem;
  z-index: 20;

  &:focus {
    outline: none;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
  }

  div {
    background-color: ${({ open }) => (open ? "#030303" : "#030303")};
    border-radius: 10px;
    height: 0.25rem;
    position: relative;
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 1.5rem;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
