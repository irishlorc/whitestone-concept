"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuLabel = menuOpen ? "Close" : "Menu";
  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header
      style={{
        position: "sticky",
        top: "0",
        zIndex: "50",
        background: "#F6F1E7",
        borderBottom: "1px solid rgba(42,42,34,0.12)",
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          minHeight: "76px",
        }}
      >
        <a
          href="#top"
          aria-label="Whitestone — home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
            minHeight: "44px",
          }}
        >
          <img
            src="/images/emblem-dark.png"
            alt=""
            style={{ height: "30px", width: "auto", display: "block" }}
            decoding="async"
          />
          <img
            src="/images/wordmark-dark.png"
            alt="Whitestone"
            style={{ height: "12px", width: "auto", display: "block" }}
            decoding="async"
          />
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a className="nav-link" href="#services">
            Services
          </a>
          <a className="nav-link" href="#approach">
            Our Approach
          </a>
          <a className="nav-link" href="#about">
            About
          </a>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </nav>
        <a
          className="nav-cta"
          href="#contact"
          style={{
            textDecoration: "none",
            fontSize: "13px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            alignItems: "center",
            gap: "12px",
            background: "#3B4426",
            color: "#F6F1E7",
            borderRadius: "999px",
            padding: "0 24px",
            minHeight: "46px",
          }}
        >
          {"Enquire Now"}{" "}
          <span className="arr" aria-hidden="true">
            →
          </span>
        </a>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
          style={{
            alignItems: "center",
            background: "none",
            border: "1px solid rgba(46,54,32,0.5)",
            borderRadius: "999px",
            color: "#2E3620",
            font: "inherit",
            fontSize: "12px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            padding: "0 20px",
            minHeight: "44px",
            cursor: "pointer",
          }}
        >
          {menuLabel}
        </button>
      </div>
      {menuOpen && (
        <>
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="wrap mobile-menu serif"
            style={{
              display: "flex",
              flexDirection: "column",
              paddingBlock: "8px 32px",
              color: "#2E3620",
            }}
          >
            <a className="m-link" href="#services" onClick={closeMenu}>
              Services
            </a>
            <a className="m-link" href="#approach" onClick={closeMenu}>
              Our Approach
            </a>
            <a className="m-link" href="#about" onClick={closeMenu}>
              About
            </a>
            <a className="m-link" href="#contact" onClick={closeMenu}>
              Contact
            </a>
            <a
              className="btn btn-olive"
              href="#contact"
              onClick={closeMenu}
              style={{
                marginTop: "28px",
                fontFamily: "var(--font-jost), sans-serif",
              }}
            >
              Enquire Now
            </a>
          </nav>
        </>
      )}
    </header>
  );
}
