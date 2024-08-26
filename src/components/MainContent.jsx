import React, { Component } from 'react'

export default class MainContent extends Component {
  // state = {appTitle: "Customers"};
  // state = {appTitle: "Employees"};
  state = {
    pageTitle: "Customers",
    customersCount: 5
  };

  render() {
    return (
      <div>
        {/* <h4>Customers</h4> */}
        <h4>{this.state.pageTitle}</h4>
        <p>{this.state.customersCount}</p>
        <button onClick={this.onRefreshButtonClicked}>Refresh</button>
      </div>
    )
  }

  onRefreshButtonClicked = () => {
    // console.log("Refresh Button Clicked !");
    this.setState({
      customersCount: 7
    });
  }
}
