import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
// import { NavBar } from "./App";
import './index.css';
import App from "./App";

// var element = <button class="btn btn-danger">Hello React World !</button>;
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
root.render(<App />);

// console.log(element);
