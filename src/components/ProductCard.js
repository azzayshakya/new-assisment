import React, { useState } from "react";
import "@/app/styles/ProductCard.css";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product, index }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const animationDelay = `${(index % 8) * 0.1}s`;

  return (
    <div
      className="product-card animate-fade-in-up"
      style={{ animationDelay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={`/products/${product.id}`} className="product-link">
        <div className="image-wrapper">
          <div className={`image-container ${isHovered ? "zoomed" : ""}`}>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
          </div>
          {product.isNew && (
            <div className="product-label animate-fade-in">NEW PRODUCT</div>
          )}
        </div>
        <div className="product-details">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-meta">
            Sign in or Create an account to see pricing
          </p>
        </div>
      </a>
      <div
        className={`wishlist-icon ${isLiked ? "liked" : ""}`}
        onClick={(e) => {
          e.preventDefault();
          setIsLiked(!isLiked);
        }}
      >
        {isLiked ? <FaHeart className="animate-pulse-soft" /> : <CiHeart />}
      </div>
    </div>
  );
};

export const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
};

export default ProductCard;
