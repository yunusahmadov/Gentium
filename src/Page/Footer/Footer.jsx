import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <footer id='contact'>
        <div className="foooter-top">
            <div className="footer-top-logos">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>       
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-github"></i>
            </div>
            <div className="footer-top-text">
                <h2>Let's Talk?</h2>
            </div>
            <div className="footer-top-button">
                <button className='enquiry'>Make an enquiry!</button>
            </div>
        </div>
        <div className="footer-center">
            <div className="footer-center-card">
                <h3 className='bq'>Berlin.</h3>
                <p className='number'>+21 30 310 0010</p>
            </div>
            <div className="footer-center-card">
            <h3 className='bq'>Melbourne.</h3>
            <p className='number'>+21 201 161 0011</p>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="footer-bottom-left">
            2018 © <span>Gentium</span>, All rights reserved.
            </div>
            <div className="footer-bottom-right">
                <ul>
                    <li>
                    Terms of use
                    </li>
                    <li>
                         Privacy Policy
                    </li>
                    <li>
                    Cookie Policy
                    </li>
                </ul>
                </div>
        </div>
      </footer>
    )
  }
}

export default Footer