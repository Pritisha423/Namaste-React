import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches the Javascript)

// JSX ==> Bable transpiles it tio React.createElement => ReactElement-JS Object => HTMLElement(render)

const jsxHeading = ( 
    <h1 className = "head" tabIndex="5"> 
        Namaste React with JSX🚀
    </h1>
);

console.log(jsxHeading);  // here heading is an object it will give react element which is in actual a javascript object.
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);