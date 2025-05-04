"use client";

import "@/app/styles/Header.css";

export default function Navbar() {
  return (
    <>
      <header className="main-header">
        <div className="header-grid">
          <div className="left">
            <div className="menu-toggle">&#9776;</div>
          </div>

          <div className="center">
            <div className="logo">LOGO</div>
          </div>

          <div className="right">
            <span className="icon">&#128269;</span>
            <span className="icon">&#9825;</span>
            <span className="icon">&#128100;</span>
            <span className="icon">&#128722;</span>
            <span className="icon">ENG &#9662;</span>
          </div>
        </div>

        <nav className="main-nav">
          <ul>
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>
              <a href="#">SKILLS</a>
            </li>
            <li>
              <a href="#">STORIES</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="product-header">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </section>
    </>
  );
}
