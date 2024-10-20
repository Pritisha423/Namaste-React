import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import ResturantCard from "./components/ReturantCard";


// not using key (not acceptable) <<<<<< index as a key <<<<<<<<< unique id (best practice)

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
