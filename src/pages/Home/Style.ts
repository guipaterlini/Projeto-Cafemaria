import styled from "styled-components";

export const Container = styled.div`
  margin: 60px 0;
  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 30px;
  }

  p {
    color: #979797;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.3rem;
    width: 50%;
  }

  button {
    background: #e5e5e5;
    border: 1px solid #0d0d0d;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 40px;
    padding: 15px 45px;
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 80px 0;
`;

export const Image = styled.img`
  border: 1px solid #000;
  height: 50vh;
  margin: 0 20px;
  max-width: 300px;

  &:nth-child(2) {
    margin-top: -40px;
  }
`;
