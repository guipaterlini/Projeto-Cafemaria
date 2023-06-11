import React from "react";
import {
  ListContainer,
  CardContainer,
  Image,
  Title,
  Price,
  PaginationContainer,
  PageButton,
  Container,
  Button,
} from "./styles";
import { Link } from "react-router-dom";

// Definindo a interface do produto
export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

// Definindo a interface das props do ProductList
interface ProductListProps {
  products: Product[]; // Array de produtos
  itemsPerPage: number; // Número de itens por página
}

// Componente ProductList
const ProductList: React.FC<ProductListProps> = ({
  products,
  itemsPerPage,
}) => {
  const [currentPage, setCurrentPage] = React.useState(1); // Estado para controlar a página atual

  const totalPages = Math.ceil(products.length / itemsPerPage); // Cálculo do número total de páginas
  const indexOfLastItem = currentPage * itemsPerPage; // Índice do último item na página atual
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Índice do primeiro item na página atual
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem); // Itens da página atual

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber); // Função para atualizar a página atual
  };

  return (
    <Container>
      <ListContainer>
        {currentItems.map((product) => (
          <CardContainer key={product.id}>
            <Image src={product.image || "../../../assets/images/defaultImage.png"} alt={product.title} />
            <Title>{product.title}</Title>
            <Price>R$ {product.price}</Price>
            <Link to={`/produto/${product.id}`} className="link-produto-id">
              <Button>Comprar</Button>
            </Link>
          </CardContainer>
        ))}
      </ListContainer>

      <PaginationContainer>
        {/* Mapeamento dos botões de página */}
        {Array.from(Array(totalPages), (_, index) => index + 1).map((page) => {
          const isActivePage = page === currentPage; // Verifica se o botão de página está ativo
          return (
            <PageButton
              key={page}
              isActive={isActivePage}
              onClick={() => handlePageChange(page)} // Função para lidar com a troca de página
            >
              {page}
            </PageButton>
          );
        })}
      </PaginationContainer>
    </Container>
  );
};

export default ProductList;
