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
    border: 1px solid #0d0d0d;
    margin-top: 40px;
    padding: 15px 45px;
    font-size: 1rem;
    font-weight: 600;
    background: #e5e5e5;
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 80px 0;
`;

export const Image = styled.img`
  margin: 0;
  max-width: 300px;
  height: 50vh;
  margin: 0 20px;
  border: 1px solid #000;

  &:nth-child(2) {
    margin-top: -40px;
  }
`;