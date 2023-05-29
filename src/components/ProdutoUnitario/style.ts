import styled from 'styled-components';

export const ProdutoDefault = styled.div`
	justify-content: center;
  border: 1px solid;
	border-radius: 15px;
  align-items: center;
  width: 250px;
  height: 75vh;
	padding: 0.7rem;
	max-width: 250px;
	max-height: 75vh;
	margin: 5px 10px;
	
  h1, span{
		display: flex;
		justify-content: center;
		font-family: var(--fonte-destaque);
  	font-size: var(--fonte-maior);
		line-height: 3rem;
		width: 70%;
		font-weight: 900;
		text-align: center;
    }
	p{
		display: flex;
		justify-content: center;
		text-align: justify;
		font-size: var(--fonte-titulo);
	}
	img{
		width: 100%;
		height: 30vh;
		border-radius: 10px;
		justify-content: center;
		align-items: center;
		align-self: center;
	}
    
`;
export const BotaoCompra = styled.button`
	margin-bottom: 20px;
	display: flex;
	padding: 0.5rem;
	border: none;
	border-radius: 20px;
	width: 200px;
	background-color: var(--cor-secundaria);
	
		a{
			color: #fff;
			font-weight: 800;
			text-transform: uppercase;
		}
`;

