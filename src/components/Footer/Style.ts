import styled from "styled-components";

export const FooterDefault = styled.footer`
  background: #eff2f6;
  display: flex;
  justify-content: space-around;
  padding: 45px 0;
`;

export const NewsletterContainer = styled.div`
  width: 30%;

  h2 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 44px;
  }

  p {
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1rem;
    padding: 10px 0;
  }

  form {
    background: #fff;
    border: 0.5px solid #000000;
    margin-top: 10px;
  }

  input {
    border: none;
    padding: 10px;
    width: 80%;
  }

  button {
    background: #fff;
    border: none;
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 1rem;
    cursor: pointer;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  font-size: 1rem;
  width: 40%;

  ul {
    list-style: none;
  }

  h3 {
    margin-bottom: 20px;
  }

  a {
    color: #111111;
    opacity: 0.5;
    line-height: 26px;
  }
`;
