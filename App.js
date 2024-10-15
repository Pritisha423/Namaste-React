import React from "react";
import ReactDOM from "react-dom/client";

//React Element.
const heading = ( 
    <h1 className = "head" tabIndex="5"> 
        Namaste React with JSX🚀
    </h1>
);
//React Component.
const Heading =() => { 
    <h1 className = "head" tabIndex="5"> 
        Namaste React with JSX🚀
    </h1>
};

// fn1 == fn2
const fn1 = () => true;

const fn2 = () => {
    return true;
};
console.log(fn1==fn2); 


//Functional Component
const HeadingComponent = () => {
    return <h1> Namaste React Functional Component. </h1>;
};
// HeadingComponent1 == HeadingComponent2
const HeadingComponent2 = () => (                   // we use () for writing multiple line code.
     <div id="container">
        <h1> Namaste React Functional Component. </h1>
     </div>
     
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>); //For rendering a functional component.