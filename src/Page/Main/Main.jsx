import React, { Component } from 'react'
import { SectionFive } from './SectionFive/SectionFive'
import SectionFour from './SectionFour/SectionFour'
import SectionOne from './SectionOne/SectionOne'
import SectionThree from './SectionThree/SectionThree'
import SectionTwo from './SectionTwo/SectionTwo'

export class Main extends Component {
  render() {
    return (
      <main>
        <SectionOne
        service='Services'
        we_work='WE WORK WITH YOU, NOT FOR YOU'
        />
        <SectionTwo
        works='Works.'
        things="THINGS WE'VE MADE"
        />
        <SectionThree
        about='About.'
        aboutmore="WE'RE MORE THAN A DIGITAL AGENCY"
        teamwork='Teamwork'
        commited='Commited and creative'
        phil='Philosophy'
        trust='Trust pays off'
        office='Office'
        berlin="Berlin, UK"
        />
        <SectionFour/>
        <SectionFive/>
      </main>
    )
  }
}

export default Main