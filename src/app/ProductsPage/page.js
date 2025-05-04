import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

import "@/app/styles/Midpart.css";

import { IoIosHeart } from "react-icons/io";

const MidPart = () => {
  const [hearts, setHearts] = useState(Array(16).fill(true));
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleHeart = (index) => {
    setHearts((prevHearts) =>
      prevHearts.map((heart, i) => (i === index ? !heart : heart))
    );
  };

  const toggleFilter = () => setFilter(!filter);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = [];
      for (let i = 1; i <= 16; i++) {
        const response = await fetch(`https://fakestoreapi.com/products/${i}`);
        const product = await response.json();
        allProducts.push(product);
      }
      setProducts(allProducts);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="midpartrow">
        <div className="itemsnumber">3425 ITEMS</div>
        <div className="filterbutton">
          <span onClick={toggleFilter}>
            {filter ? (
              <div className="">
                <span className="midparttoprowicons">
                  <IoIosArrowDown />
                </span>
                <span>SHOW FILTER</span>
              </div>
            ) : (
              <div className="">
                <span className="midparttoprowicons">
                  <MdKeyboardArrowLeft />
                </span>
                <span>CLOSE FILTER</span>
              </div>
            )}
          </span>
        </div>

        <div className="RecommenedButton" onClick={toggleDropdown}>
          <span>RECOMMENDED</span>{" "}
          <span>
            <MdOutlineKeyboardArrowDown />
          </span>
          {showDropdown && (
            <div className="dropdownContent">
              <p className="dropdownactive">
                {" "}
                <span>
                  <FaCheck />
                </span>
                RECOMMENDED
              </p>
              <p>NEWEST FIRST</p>
              <p>POPULAR</p>
              <p>PRICE : HIGH TO LOW</p>
              <p>PRICE : LOW TO HIGH</p>
            </div>
          )}
        </div>
      </div>
      <div className="cardsside">
        {filter ? (
          <div></div>
        ) : (
          <div className="leftpart">
            <Filter />
          </div>
        )}

        <div className="rightpart">
          <div className="rightpartcards">
            {loading ? (
              <div className="loading">
                <div className="spinner"></div>
                <p>Loading...</p>
              </div>
            ) : (
              products.map((product, index) => (
                <div className="card" key={index}>
                  <div className="cardimg">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="cardname">{product.title}</div>
                  <div className="cardlastrow">
                    <div className="cardabout">{product.description}</div>
                    <div className="heart" onClick={() => toggleHeart(index)}>
                      {hearts[index] ? (
                        <div className="whiteheart">
                          <CiHeart />
                        </div>
                      ) : (
                        <div className="redheart">
                          <IoIosHeart />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidPart;
