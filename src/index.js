import React from "react";
// which provides methods for rendering React components into the DOM
import ReactDOM from "react-dom/client"; 
import App from "./App";
import './style/index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
// This method creates a root React container, which is a DOM node 
// that can be used to render React components into the DOM. 
// The argument passed to createRoot is the root DOM element,
//  which is retrieved from the DOM using document.getElementById("root").

root.render(<App />);

// the root.render method is called and passed a JSX expression, 
// which creates an instance of the App component. 
// This will render the App component into the DOM, 
// making it visible on the page.