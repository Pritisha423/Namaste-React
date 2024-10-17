import React from "react";
import ReactDOM from "react-dom/client";

// Component
const Title = () => {
  return (
    <h1 className="head" tabIndex="5">
      Namaste React with JSX🚀
    </h1>
  );
};
const elem = <span> React Element</span>

const heading = ( 
    <h1 className = "head" tabIndex="5"> 
        {elem}
        Namaste React with JSX🚀
    </h1>
);
const number = 1000;

//Functional Component || Component Composition
const HeadingComponent2 = () => (
  <div id="container">
    <h1>{number}</h1>
    {100+250}
    {console.log("kgjhgkjh")}
    {heading}     
    <h1> Namaste React Functional Component. </h1>
  </div>
);
//cross site scripting
const data = api.getData();  // If  this api passes malacious data to it jsx will scape it.

const heading2 = ( 
    <h1 className = "head" tabIndex="5"> 
        {data} 
        <Title></Title>
        <Title />
        {Title()} 
        {elem}
        Namaste React with JSX🚀
        <HeadingComponent2 />
    </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />); //For rendering a functional component.
