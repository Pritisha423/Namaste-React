import React from "react";
import ReactDOM from "react-dom/client";

// Component
const Title = () => (
    <h1 className = "head" tabIndex="5"> 
        Namaste React with JSX🚀
    </h1>
); 

//Functional Component || Component Composition
const HeadingComponent2 = () => (                 
     <div id="container">
        <Title/>            
        <h1> Namaste React Functional Component. </h1>
     </div>
     
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2/>); //For rendering a functional component.