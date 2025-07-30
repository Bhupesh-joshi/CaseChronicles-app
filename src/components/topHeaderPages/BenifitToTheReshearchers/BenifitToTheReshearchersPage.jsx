import React from 'react'
import PageIntro from '../whoCanSubmitPage/components/PageIntro'
import BenefitCards from './components/BenefitCards'
import Testimonials from '../../Testimonials'
import SubmitCTA from '../whoCanSubmitPage/components/SubmitCTA'
import ImpactStats from './components/ImpactStats'


const BenifitToTheReshearchersPage = () => {
  // console.log("SubmitEssentialsPage rendered");
  return (
    <div>
      <PageIntro
        title="Benefits for"
        highlight="Researchers"
        description="Submitting your case helps you gain visibility, contribute to academia, and make an impact in your field."
      />
      <BenefitCards />
      <Testimonials />
      <SubmitCTA />
      <ImpactStats />
      {/* <SubmitEssentialsList />
      <CallToAction /> */}

    </div>
  )
}

export default BenifitToTheReshearchersPage;