import styled from "styled-components";

export const ProductPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  width: 90%;
`;

export const ProductTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: var(--cor-font-primaria);
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  margin: 0 0 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ProductImage = styled.img`
  width: 330px;
  height: 330px;
  object-fit: cover;
  border-radius: 10px;
  background-color: var(--cor-font-secundaria);
  margin: 0;

  @media (max-width: 768px) {
    margin: 20px auto;
  }
`;

export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  margin: 0;
  @media (max-width: 768px) {
    align-items: center;
    width: 80%;
    margin-bottom: 80px;
  }
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  color: var(--cor-font-primaria);
  margin-bottom: 10px;
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  color: var(--cor-font-primaria);
  margin-bottom: 10px;
`;

export const QuantitySelector = styled.select`
  font-size: 16px;
  padding: 8px;
  margin-bottom: 10px;
  color: var(--cor-font-primaria);
`;

export const AddToCartButton = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  background-color: var(--cor-secundaria);
  border: none;
  border-radius: 4px;
  color: var(--cor-font-preta);
  cursor: pointer;
  transition: 300ms;

  &:hover {
    opacity: 0.8;
  }
`;
