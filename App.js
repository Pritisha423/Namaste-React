import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => (Object) => HTML(rendered) 
const heading = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement("h1", {}, "Hello World from H1 Tag")
    )
);

console.log(heading);  // here heading is an object it will give react element which is in actual a javascript object.
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);