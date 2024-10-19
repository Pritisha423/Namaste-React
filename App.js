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

const Body = () => {
  return (
    <div className = "body">
        <div className = "search"></div>
        <div className = "res-container">
            //ResturantCard
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
