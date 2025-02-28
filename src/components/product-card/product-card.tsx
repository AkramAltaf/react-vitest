import React from "react";
import { IProducts } from "../../@types/products";
import styles from "./product-card.module.scss";

interface ProductCardProps {
  product: IProducts;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImg}>
        <img src={product.image} alt={product.title} className={styles.image} />
        <h3 className={styles.title}>{product.title}</h3>
      </div>
      <div className={styles.info}>
        <p className={styles.price}>Rs.{product.price.toFixed(2)}</p>
        <button className={styles.buyButton}>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
