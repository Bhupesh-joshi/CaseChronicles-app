import React from 'react'
import PageIntro from '../whoCanSubmitPage/components/PageIntro'
import CorePillars from './components/CorePillars'
import ImpactStats from '../BenifitToTheReshearchers/components/ImpactStats'
import Testimonials from '../../Testimonials'
import InitiativesSection from './components/InitiativesSection'
import QuoteBanner from '../VisionaryLeadershipPage/components/QuoteBanner'
import PartnershipsCarousel from './components/PartnershipsCarousel'
import CallToAction from './components/CallToAction'

const CommitmentToEducationPage = () => {
  return (
    <div>
      <PageIntro
        title="Our"
        highlight="Commitment to Education"
        description="We believe in accessible, inclusive, and high-quality education that empowers every learner to achieve more."
      />
      <CorePillars />
      <ImpactStats />
      <Testimonials />
      <InitiativesSection />
      <QuoteBanner />
      <PartnershipsCarousel />
      <CallToAction />
    </div>
  )
}

export default CommitmentToEducationPage;