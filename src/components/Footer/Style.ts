import styled from "styled-components";

export const FooterDefault = styled.footer`
  display: flex;
  justify-content: space-around;
  background: #eff2f6;
  padding: 45px 0;
`;

export const NewsletterContainer = styled.div`
  width: 30%;

  h2 {
    font-size: 2rem;
    line-height: 44px;
    font-weight: 500;
  }

  p {
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1rem;
    padding: 10px 0;
  }

  form {
    margin-top: 10px;
    border: 0.5px solid #000000;
    background: #fff;
  }

  input {
    width: 80%;
    padding: 10px;
    border: none;
  }

  button {
    border: none;
    background: #fff;
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 1rem;
    cursor: pointer;
  }
`;

export const LinksContainer = styled.div`
  width: 40%;
  display: flex;
  font-size: 1rem;

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
