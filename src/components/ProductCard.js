import React from "react";
import "@/app/styles/ProductCard.css";
import { CiHeart } from "react-icons/ci";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <a href={`/products/${product.id}`} className="product-link">
        <div className="image-wrapper">
          <img src={product.image} alt={product.title} className="product-image" />
        </div>
        <div className="product-label">NEW PRODUCT</div>
        <div className="product-details">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-meta">Sign in or Create an account to see pricing</p>
        </div>
        <div className="wishlist-icon">
          <CiHeart />
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
