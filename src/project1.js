//Approch for the Food ordering Application

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body";



const AppLayout = () =>{                       //1
    return(
    <div className="app">
        <Header />
        <Body />
    </div>
    );
};



const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);