import React, { Component } from 'react'

export class SectionOneCard extends Component {
  render() {
    const{back_icon,service_text}=this.props
    return (
      <div className="service-card">
        <i className={back_icon} id="back_icon"></i>
        <h3 className='service-card-text'>{service_text}</h3>
        <i class="fa-solid fa-arrow-right-long"></i>
      </div>
    )
  }
}

export default SectionOneCard