import React from 'react'
import HeroAbout from './components/HeroAbout'
import OurStory from './components/OurStory'
import WhatWeDo from './components/WhatWeDo'
import CorePillars from '../commitmentToEducationPage/components/CorePillars'
import WhyChooseUs from '../../WhyChooseUs'
import { whyChooseUsData } from '../../../constants'
import ImpactStats from '../BenifitToTheReshearchers/components/ImpactStats'
import TeamSection from '../DiverseTeamOfExpertsPage/components/TeamSection'
import CallToAction from '../../CallToAction'
import FAQSection from '../../FAQSection'

const AboutCaseChroniclesPage = () => {
  return (
    <div>
      <HeroAbout />
      <OurStory />
      <WhatWeDo />
      <CorePillars />
      <WhyChooseUs 
        mainTitle="Why Choose Us"
                subTitle="We provide the best resources and case studies to help you grow faster."
                whyChooseUsData={whyChooseUsData}
      />
      <ImpactStats />
      <TeamSection />
      <CallToAction />
      <FAQSection />
    </div>
  )
}

export default AboutCaseChroniclesPage;