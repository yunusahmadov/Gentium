import React, { Component } from 'react'
import Slider2 from '../Slider/Slider2'

export class SectionFive extends Component {
  render() {
    return (
      <section>
        <div className="latest" id='blog'>
          <h2>Latest News.</h2>
          <h3>CHECK OUT SOME OF OUR THINKING</h3>
        </div>
        <Slider2/>
      </section>
    )
  }
}

export default SectionFive