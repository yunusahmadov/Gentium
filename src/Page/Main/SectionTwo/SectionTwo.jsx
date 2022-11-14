import React, { Component } from 'react'
import  { Slider } from '../Slider/Slider'

export class SectionTwo extends Component {
  render() {
    const {works,things}=this.props
    return (
      <section>
        <div className="works-section" id='works'>
            <div className="works-text">
                <h3>{works}</h3>
                <h4>{things}</h4>
            </div>
            <button className='viewall'>View All</button>
        </div>
        {/* <SimpleSlider/> */}
        <Slider/>
      </section>
    )
  }
}

export default SectionTwo