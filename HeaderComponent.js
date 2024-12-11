import React from 'react';

const HeaderComponent = () => (
  <header className="header">
    <div className="logo">MyLogo</div>
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
    </div>
    <nav className="navigation">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#products">Products</a>
      <a href="#cart">Cart</a>
    </nav>
  </header>
);

export default HeaderComponent;
