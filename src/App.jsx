import React, { Component } from 'react'
import NavBar from './components/NavBar'
import MainContent from './components/MainContent'
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <MainContent />
      </>
    )
  }
}
