import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

   img{
    width: 60%;
    height: 85vh;
    border: none;
    border-radius: 10px;
    margin: 1rem;
   }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  
  h1{
    margin-top: 10px;
    margin-bottom: 10px;
  }

  h1, span{
    display: flex;
    justify-content: center;
    text-align: center;
    font-family: var(--fonte-destaque);
  	font-size: var(--fonte-muito-grande);
    width: 100%;
    padding: 0.3rem;
  }

  p{
    font-family: var(--fonte-family);
    width: 80%;
    text-align: justify;
    font-weight: 700;
    color: #000;
  }
`;

export const BotaoAddCarrinho = styled.button`
	margin-bottom: 20px;
	display: flex;
	padding: 0.5rem;
	border: none;
	border-radius: 20px;
	width: 300px;
	background-color: var(--cor-secundaria);
  margin-top: 30px;
	
		a{
			color: #fff;
			font-weight: 800;
			text-transform: uppercase;
		}
`;
