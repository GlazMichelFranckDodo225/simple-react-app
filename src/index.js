import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';

var element = <button class="btn btn-danger">Hello React World !</button>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

console.log(element);
