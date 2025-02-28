import React, { useEffect, useState } from "react";
import { IProducts } from "../../@types/products";
import styles from "./products.module.scss";
import ProductCard from "../../components/product-card/product-card";

const Products: React.FC = () => {
  const [products, setProducts] = useState<IProducts[]>([]);

  const fetchProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const products = await data.json();
    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.productsContainer}>
      <h2 className={styles.title}>Products</h2>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
