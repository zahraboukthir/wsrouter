import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ list }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {list.map((el, i) => (
        <ProductCard produit={el} key={i} />
      ))}
    </div>
  );
};

export default ProductList;
