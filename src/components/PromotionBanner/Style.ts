import styled from "styled-components";

export const BannerContainer = styled.div`
margin-top: 80px;
  display: flex;
  justify-content: center;
`;

export const BannerImg = styled.img`
  height: 50vh;
  width: 300px;
  margin: 20px;

  &:nth-child(2) {
    margin: -30px 20px;
  }
`;
