import React, { Component } from 'react'

export class SectionThree extends Component {
  render() {
    const {about,aboutmore,teamwork,commited,phil,trust,office,berlin}=this.props
    return (
      <section>
        <div className="about-container" id='about'>
            <h2 className='abouttext' >{about}</h2>
            <h3 className='aboutmore'>{aboutmore}</h3>
        </div>
        <div className="about-grid-container">
            <div className='teamwork'>
                <img className='teamwork-img' src="https://gentium.pixerex.com/wp-content/uploads/2019/01/about_01.jpg" alt="" />
                <div className="teamwork-text">
                <h3>{teamwork}</h3>
                <h4>{commited}</h4>
                </div>
            </div>
            <div className="two-conts">

            <div className='philosophy'>
              <img className='philosophy-img' src="https://gentium.pixerex.com/wp-content/uploads/2019/01/about_03.jpg" alt="" />
               <div className="philosophy-text">
               <h3>{phil}</h3>
                <h4>{trust}</h4>
               </div>
            </div>
            <div className='office'>
              <img className='office-img' src="https://gentium.pixerex.com/wp-content/uploads/2019/01/about_02.jpg" alt="" />
               <div className="office-text">
               <h3>{office}</h3>
                <h4>{berlin}</h4>
               </div>
            </div>
            </div>
        </div>
        <div className="three-text-container">
              <div className="qq who-container">
              <h3>Who we are</h3>
              <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward will have multiple touchpoints for offshoring.</p>
              </div>
              <div className="qq our-container">
              <h3>Our philosophy</h3>
            <p>A new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time.</p>
              </div>
              <div className="qq how-container">
            <h3>How we work</h3>
            <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
              </div>
            </div>
      </section>
    )
  }
}

export default SectionThree