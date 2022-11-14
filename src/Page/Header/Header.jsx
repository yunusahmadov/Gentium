import React, { Component } from 'react'
import { Link } from 'react-scroll'
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
                &#9776;
            </label>
            <input type="checkbox" id="toggle" />
            <nav> 
                <ul>
                <label htmlFor="toggle"></label>
            <input type="checkbox" id="toggle" />

                        <li className='lli home'>
                            <Link spy={true} smooth={true} to="home" activeClass="active">Home 
                            <div className='underline' ></div>
                            </Link>
                            
                        </li>
                        <li className='lli services'>
                            <Link spy={true} smooth={true} to="service" activeClass="active">Services
                            <div className='underline' ></div>
                            </Link>
                        </li>
                        <li className='lli works'>
                            <Link spy={true} smooth={true} to="works" activeClass="active">Works
                            <div className='underline' ></div>
                            </Link>   
                        </li>
                        <li className='lli about'>
                        <Link spy={true} smooth={true} to="about" activeClass="active">About
                            <div className='underline' ></div>
                        </Link>
                        </li>
                        <li className='lli client'>
                            <Link spy={true} smooth={true} to="client" activeClass="active">Client
                            <div className='underline' ></div>
                        </Link>
                        </li>
                        <li className='lli blog'>
                            <Link spy={true} smooth={true} to="blog" activeClass="active">Blog
                            <div className='underline' ></div>
                        </Link>
                        </li>
                        <li className='lli contact'>
                            {/* <a href="#contact">Contact</a> */}
                            <Link spy={true} smooth={true} to="contact" activeClass="active">Contact
                            <div className='underline' ></div>
                        </Link>
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










































