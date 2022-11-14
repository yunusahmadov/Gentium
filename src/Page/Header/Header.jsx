import React, { Component } from 'react'
import HeaderCard from './HeaderCard'

export class Header extends Component {
  render() {
    const{logo,digital}=this.props
    return (
      <header id='home'>
        <div className="header-container">
        <div className="header-left">
            <div className="header-logo">
                {logo}
            </div>
        </div>
        <div className="header-right">
            <label htmlFor="toggle">
            <span className='cart'> 
            <div className="palka"></div>
                </span>
            </label>
            <input type="checkbox" id="toggle" />
            <nav> 
                <ul>
                <label htmlFor="toggle"></label>
            <input type="checkbox" id="toggle" />

                        <li className='lli home'>
                            <a href="#home">Home</a>
                            {/* <div className='underline' ></div> */}
                        </li>
                        <li className='lli services'>
                            <a href="#service">Services</a>
                            {/* <div className='underline' ></div> */}
                        </li>
                        <li className='lli works'>
                            <a href="#works">Works</a>
                
                        </li>
                        <li className='lli about'>
                        <a href="#about">About</a>
                        </li>
                        <li className='lli client'>
                            <a href="#client">Client</a>
                        </li>
                        <li className='lli blog'>
                            <a href="#blog">Blog</a>
                        </li>
                        <li className='lli contact'>
                            <a href="#contact">Contact</a>
                        </li>
                        <li>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        </li>
                </ul>
            </nav>
        </div>
        </div>
        <div className="header-main">
            <div className="digital" >
            {digital}
            </div>
            <button className='started'>Getting Started</button>
            <div className="header-main-bottom">
                <HeaderCard
                card_icon='fa-solid fa-chart-column'
                card_title='Future Vision.'
                card_subtitle='It is a long established fact that a reader will be distracted by the readable content of a page.'
                />
                <HeaderCard
                card_icon='fa-solid fa-rocket'
                card_title='Product Design.'
                card_subtitle='There are many variations of passages of available, but the majority alteration in some form.'
                />
                <HeaderCard
                card_icon='fa-solid fa-chart-pie'
                card_title='Inovative Solutions.'
                card_subtitle='The generated Lorem Ipsum is therefore always free from repetition, injected humour.'
                />
            </div>
       </div>
      
      </header>
    )
  }
}

export default Header










































