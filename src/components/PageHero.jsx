import React from "react";

const PageHero = ({ title, highlight, subtitle, image }) => {
  return (
    <section className="page-hero">
      <div className="page-hero-bg">
        <img src={image} alt={title} className="page-hero-img" />
        <div className="page-hero-overlay"></div>
      </div>

      <div className="page-hero-content">
        <h1 className="page-hero-title">
          {title} <span className="page-hero-highlight">{highlight}</span>
        </h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHero;
