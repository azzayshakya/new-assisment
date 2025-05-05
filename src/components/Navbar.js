"use client";

import "@/app/styles/Header.css";
import "@/app/globals.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setAuthToken(token);
  }, []);

  const logout = () => {
    localStorage.removeItem("authToken");
    setAuthToken(null);
    window.location.reload();
  };

  return (
    <>
      <header className={`main-header ${scrolled ? "scrolled" : ""}`}>
        <div className={`container header-grid ${scrolled ? "compact" : ""}`}>
          <div className="left animate-fade-in-up-1">
            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? "✕" : "☰"}
            </div>
          </div>
          <div className="center animate-fade-in">
            <div className="logo animate-pulse-soft">LOGO</div>
          </div>
          <div className="right animate-fade-in-up-2">
            <span className="icon animate-fade-in-up-1">&#128269;</span>
            <span className="icon animate-fade-in-up-2">&#9825;</span>
            <span className="icon animate-fade-in-up-3">&#128100;</span>
            <span className="icon animate-fade-in-up-4">&#128722;</span>
            <span className="icon animate-fade-in-up-4">ENG &#9662;</span>

            <div className="auth-buttons">
              {!authToken ? (
                <>
                  <Link href="/login" className="auth-button">
                    Login
                  </Link>
                  <Link href="/signup" className="auth-button">
                    Signup
                  </Link>
                </>
              ) : (
                <button onClick={logout} className="auth-button">
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>

        <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li className="animate-fade-in-up-1">
              <a href="#">SHOP</a>
            </li>
            <li className="animate-fade-in-up-2">
              <a href="#">SKILLS</a>
            </li>
            <li className="animate-fade-in-up-3">
              <a href="#">STORIES</a>
            </li>
            <li className="animate-fade-in-up-4">
              <a href="#">ABOUT</a>
            </li>
            <li className="animate-fade-in-up-4">
              <a href="#">CONTACT US</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="product-header animate-fade-in-down">
        <h1 className="animate-fade-in-up-2">DISCOVER OUR PRODUCTS</h1>
        <p className="animate-fade-in-up-3">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </section>
    </>
  );
}
