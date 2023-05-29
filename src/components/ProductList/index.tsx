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

export interface Product {
  id: number;
  name: string;
  photo: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
  itemsPerPage: number;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  itemsPerPage,
}) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <ListContainer>
        {currentItems.map((product) => (
          <CardContainer key={product.id}>
            <Image src={product.photo} alt={product.name} />
            <Title>{product.name}</Title>
            <Price>R$ {product.price}</Price>
            <Link to={`/produto/${product.id}`} className="link-produto-id">
              <Button>Comprar</Button>
            </Link>
          </CardContainer>
        ))}
      </ListContainer>

      <PaginationContainer>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <PageButton
              key={page}
              isActive={page === currentPage}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </PageButton>
          )
        )}
      </PaginationContainer>
    </Container>
  );
};

export default ProductList;
