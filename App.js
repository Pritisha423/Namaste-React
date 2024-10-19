import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - ResturantContainer
 *    - ResturantCard
 *      - Img , Name of Res , cuisine , Star Rating, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/beautiful-unique-logo-design-food-restaurant-company_1314480-8381.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img 
        className="res-logo"
        alt = "resturant-image"
        src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/36565714A.png"
      />
      <h3> Meghna Foods</h3>
      <h5>Biryani, North Indian & South Indian</h5>
      <h6>4.5 stars</h6>
      <h5>38 Minutes</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />

      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      // Footer
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
