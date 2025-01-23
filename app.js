/* const heading = React.createElement("h1",{id:"heading"},"Hello! Welcome to React");

            const root = ReactDOM.createRoot(document.getElementById("root"));

            root.render(heading); */


// If we want to create a nested like structure

/* const parent =
 React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        React.createElement("h1",{},"I am H1 Heading")
    )
);

console.log(oarent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); */

// If a parent have a sibling or having a child node more than 1 then we wrap up the child in an "ARRAY"

const parent =
 React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I am H1 Heading"),
        React.createElement("h2",{},"I am H2 Heading"),
    ])
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);