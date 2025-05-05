"use client";

import ProductCard from "@/components/ProductCard";
import SidebarFilters from "@/components/SidebarFilters";
import SortDropdown from "@/components/SortDropdown";
import { useEffect, useState } from "react";
import "@/app/styles/Home.css";
import "@/app/globals.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("RECOMMENDED");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  const filtered = category
    ? products.filter((p) => p.category === category)
    : products;
  const sorted = [...filtered].sort((a, b) => {
    if (sort === "PRICE : LOW TO HIGH") return a.price - b.price;
    if (sort === "PRICE : HIGH TO LOW") return b.price - a.price;
    return 0;
  });

  return (
    <div className="page-container">
      {loading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <div className="top-bar ">
            <span className="item-count">{sorted.length} ITEMS</span>
            <span
              className="hide-filter"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? "HIDE FILTER" : "SHOW FILTER"}
            </span>
            <SortDropdown sort={sort} setSort={setSort} />
          </div>

          <div className="layout ">
            {sidebarOpen && (
              <aside className="sidebar">
                <SidebarFilters
                  categories={categories}
                  selected={category}
                  onChange={setCategory}
                />
              </aside>
            )}

            <main className="main-content">
              <section
                className={`product-grid ${
                  sidebarOpen ? "three-columns" : "four-columns"
                }`}
                aria-label="Product List"
              >
                {sorted.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </section>
            </main>
          </div>
        </>
      )}
    </div>
  );
}
