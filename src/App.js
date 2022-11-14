import React, { Component } from 'react'
import Footer from './Page/Footer/Footer'
import Header from './Page/Header/Header'
import Main from './Page/Main/Main'



export class App extends Component {
  render() {
    return (
      <div>
        <Header
        logo='Gentium.'
        digital="We're a digital agency."
        />
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default App
