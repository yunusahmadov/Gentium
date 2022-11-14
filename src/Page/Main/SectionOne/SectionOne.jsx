import React, { Component } from 'react'
import SectionOneCard from './SectionOneCard'

export class SectionOne extends Component {
  render() {
    const {service,we_work}=this.props
    return (
      <section>
        <div className="service" id='service'>
            <h2>{service}</h2>
            <h3>{we_work}</h3>
            <div className="services-container">
              <SectionOneCard
              back_icon="fa-solid fa-chess-knight"
              service_text="Digitale strategy"
              />
               <SectionOneCard
              back_icon="fa-solid fa-clipboard-list"
              service_text="UX Design"
              />
               <SectionOneCard

              back_icon="fa-solid fa-arrow-trend-up"
              service_text="Product Design"
              />
                  <SectionOneCard
              back_icon="fa-solid fa-clipboard-list"
              service_text="Content Strategy"
              />
                  <SectionOneCard
              back_icon="fa-solid fa-pen-ruler"
              service_text="Design & Concept"
              />
                  <SectionOneCard
              back_icon="fa-solid fa-comments"
              service_text="Social Media"
              />
                  <SectionOneCard
              back_icon="fa-solid fa-bullseye"
              service_text="Media Planing"
              />
                  <SectionOneCard
              back_icon="fa-solid fa-lightbulb"
              service_text="Brand Identity"
              />
                  <SectionOneCard
              back_icon="fa-solid fa-magnifying-glass"
              service_text="SEO Optimization"
              />
            </div>
        </div>
        </section>
    )
  }
}

export default SectionOne