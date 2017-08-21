import React from 'react';

const Sitemap = () => (
  <ul className="Sitemap Post">
    <li className="Sitemap-topItem Sitemap-item"><a className="Sitemap-link" href="/">Home</a></li>
    <li className="Sitemap-topItem Sitemap-item"><a className="Sitemap-link" href="/about-me/">All About Viki</a></li>
    <li className="Sitemap-topItem Sitemap-item"><a className="Sitemap-link" href="/contact/">Contact</a></li>
    <li className="Sitemap-topItem Sitemap-item"><a className="Sitemap-link" href="/search/">Search</a></li>
    <li className="Sitemap-topItem Sitemap-item"><a className="Sitemap-link" href="/sitemap/">Sitemap</a></li>
    <li className="Sitemap-topItem Sitemap-item">
      <a className="Sitemap-link" href="/categories/">Categories</a>
      <ul className="Sitemap-subList">
        <li className="Sitemap-subItem Sitemap-item"><a className="Sitemap-link" href="/categories/events/">Events</a></li>
        <li className="Sitemap-subItem Sitemap-item"><a className="Sitemap-link" href="/categories/restaurants/">Restaurants</a></li>
        <li className="Sitemap-subItem Sitemap-item"><a className="Sitemap-link" href="/categories/travel/">Travel</a></li>
        <li className="Sitemap-subItem Sitemap-item"><a className="Sitemap-link" href="/categories/life/">Life</a></li>
        <li className="Sitemap-subItem Sitemap-item"><a className="Sitemap-link" href="/categories/food/">Food</a></li>
        <li className="Sitemap-subItem Sitemap-item"><a className="Sitemap-link" href="/categories/recipes/">Recipes</a></li>
      </ul>
    </li>
  </ul>
);

export default Sitemap;
