import React, { Component } from 'react'
import NavBar from './components/NavBar'
import MainContent from './components/MainContent'

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
