// var React = require("react");
// var ReactDom = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// This method creates an extra div in the html code toavoid it we use react fragments.
/*
ReactDOM.render(
  <div>
    <h1>Hello World!!</h1>
    <p>I am learning react.</p>
    <h2>It is Going well</h2>
  </div>,
  document.getElementById("root")
);
*/

// In React v16 it's possible for render() to return an array of elements.
/*
ReactDOM.render(
  [
    <h1>Hello World!!</h1>,
    <p>I am learning react.</p>,
    <h2>It is Going well</h2>,
  ],
  document.getElementById("root")
);
*/
// React Fragment -- To avoid extra div and it is little bit faster.
/*
ReactDOM.render(
  <React.Fragment>
    <h1>Hello World!!</h1>
    <p>I am learning react.</p>
    <h2>It is Going well</h2>
  </React.Fragment>,
  document.getElementById("root")
);
*/

// Challenge1
/*
ReactDOM.render(
  <>
    <h3>List of 5 Best Series</h3>
    <ol>
      <li>Dark</li>
      <li>Stranger Things</li>
      <li>Money Heist</li>
      <li>Mr Robot</li>
      <li>Breaking Bad</li>
    </ol>
  </>,
  document.getElementById("root")
);
*/

// We can use javaScript expression using curly braces in render method but we cannot use statements.
/*
const name = "Piyush Keshri";
ReactDOM.render(
  <>
    <h3>My Name is {name}</h3>
    <p>My Lucky number is {2 + 3}</p>
  </>,
  document.getElementById("root")
);
*/

// Challenge 2
/*
const name = "Piyush Keshri";
const date = new Date().toLocaleDateString();
const time =
  new Date().getHours() +
  ":" +
  new Date().getMinutes() +
  ":" +
  new Date().getSeconds();

ReactDOM.render(
  <>
    <h1>Hello, My name is {name}</h1>
    <p>Today's Date is {date}</p>
    <p>Current Time is {time}</p>
  </>,
  document.getElementById("root")
);
*/

//Displaying Images in React
/*
const name = "React";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links = "https://youtube.com";
ReactDOM.render(
  <>
    <h1 className="heading"> My name is {name}</h1>
    <img src={img1} alt="random" />
    <img src={img2} alt="random" />
    <a href={links} target="_target">
      <img src={img3} alt="random" />
    </a>
  </>,
  document.getElementById("root")
);
*/

// Inline Css in React
/*
const heading = {
  color: "#fa9191",
  textTransform: "capitalize",
  textAlign: "center",
  fontWeight: "bold",
  textShadow: "0px 2px 4px #ffe9c5 ",
  margin: "70px 0px",
  fontFamily: '"Josefin Sans", sans-serif',
};

ReactDOM.render(
  <>
    <h1 style={heading}>InLine Css</h1>
  </>,
  document.getElementById("root")
);
*/

// Challenge 3
/*
const hour = new Date().getHours();
var greeting;
const cssStyle = {};

if (0 <= hour <= 11) {
  greeting = "Good Morning";
  cssStyle.color = "green";
}
if (12 <= hour <= 19) {
  greeting = "Good AfterNoon";
  cssStyle.color = "orange";
}
if (19 < hour) {
  greeting = "Good Night";
}
ReactDOM.render(
  <>
    <h1>
      Hello Sir,<span style={cssStyle}>{greeting}</span>{" "}
    </h1>
  </>,
  document.getElementById("root")
);
*/

// React Components | Functional Components

ReactDOM.render(<App></App>, document.getElementById("root"));
