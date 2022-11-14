import React, { Component } from 'react'

export class HeaderCard extends Component {
  render() {
    const {card_icon,card_title,card_subtitle}=this.props
    return (
        //tabindex для того , чтобы можно было использовать фокус для блока
      <div className='header-card' tabindex="0">
        <i className={card_icon}></i>
        <h2 className="header-card-title">
        {card_title}
        </h2>
        <h3 className='header-card-subtitle'>
        {card_subtitle}
        </h3>
      </div>
    )
  }
}

export default HeaderCard