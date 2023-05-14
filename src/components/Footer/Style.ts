import styled from "styled-components";

export const FooterDefault = styled.footer`
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
    border: 1px solid;
    border-radius: 20px;
    margin-top: 10px;
  }

  input {
    border: none;
    border-radius: 20px;
    padding: 10px;
    width: 80%;
  }

  button {
    cursor: pointer;
    background: #fff;
    border: none;
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 1rem;
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
    line-height: 26px;
  }
`;
