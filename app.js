// /* const heading = React.createElement("h1",{id:"heading"},"Hello! Welcome to React");

//             const root = ReactDOM.createRoot(document.getElementById("root"));

//             root.render(heading); */

// // If we want to create a nested like structure

// /* const parent =
//  React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},
//         React.createElement("h1",{},"I am H1 Heading")
//     )
// );

// console.log(oarent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent); */

// // If a parent have a sibling or having a child node more than 1 then we wrap up the child in an "ARRAY"
// import React, { Component } from "react";
// import ReactDOM from "react-dom/client";

// /* const parent =
//  React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},[
//         React.createElement("h1",{},"I am BIG Heading"),
//         React.createElement("h2",{},"I am H2 Heading"),
//     ])
// );

// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent); */

// /* // React Element

// const heading = React.createElement("h1",{id:"heading"},"Welcome to React World");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); */

// //JSX - It has syntax like HTML but not HTML in Java Script

// /* const jsxheading = <h1 id="heading">Welcome to React World</h1>
// console.log(jsxheading);
// const root =ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxheading); */

// // React Element

// const heading =(
//     <h1 className ="head" tabIndex="5">
//      Namaste React
//     </h1>
// );

// //--------React Component---------
//     // 1. Class Based Component
//     // 2. Functional Component

// // 2.React Functional Component -> Its just a simple Javascript function and function name start with Capital letter

// const Title =()=>(
//     <div id="head">
//     <h1 className="heading">This is a Title Component having called by writing Title in other function Component</h1>
//     </div>
// )

// const number = 1000;

// const HeadingComponent = () =>(
//     <div id="container">
//     <Title />
//     {number}
//     <h1 className="heading">Welcome to react World</h1>
//     </div>
// );

// const root =ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);
