import React, { Component } from "react";

export default class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/#">My App</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">Home</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* <h1>Hello from :</h1>
                <p classNameName="hightlight">"NavBar" className Component</p> */}
            </React.Fragment>
        )
    }
    /* 
    <div>
        <h1>Hello from :</h1>
        <p>"NavBar" className Component</p>
    </div> 
    */
}