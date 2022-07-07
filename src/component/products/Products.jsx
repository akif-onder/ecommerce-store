import React from "react";
import Categories from "../categories/Categories";
import { Container } from "@mui/system";

const Products = ({ products }) => {
  return (
    <div>
      <Container>
        <Categories />
      </Container>
    </div>
  );
};
export default Products;
