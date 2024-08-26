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
        <h4 className='border-bottom m-1 p-1'>{this.state.pageTitle}</h4>
        <p>{this.state.customersCount}</p>
        <button className='btn btn-info' onClick={this.onRefreshClicked}>Refresh</button>
      </div>
    )
  }

  onRefreshClicked() {
    console.log("Refresh Button Clicked !");
  }
}
