import React from "react";
import ReactDOM from "react-dom";

let element = <div>Hello React World !</div>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

console.log(element);
