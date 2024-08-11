import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
// import { NavBar } from "./App";
import NavBar from "./App";
import './index.css';

// var element = <button class="btn btn-danger">Hello React World !</button>;
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
root.render(<NavBar />);

// console.log(element);
