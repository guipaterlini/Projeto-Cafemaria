import styled from "styled-components";

export const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const ProductTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ProductImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 20px;

  @media (max-width: 768px) {
   margin: 20px auto;
   
  }
`;

export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
width: 40%;
  @media (max-width: 768px) {
    align-items: center;
    width: 80%;
    margin-bottom: 80px;
  }
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 10px;
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
`;

export const QuantitySelector = styled.select`
  font-size: 16px;
  padding: 8px;
  margin-bottom: 10px;
`;

export const AddToCartButton = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  background-color: #ccc;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #999;
  }
`;