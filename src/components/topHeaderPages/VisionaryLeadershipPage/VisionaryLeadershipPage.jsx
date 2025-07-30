import React from 'react'
import PageIntro from '../whoCanSubmitPage/components/PageIntro'
import QuoteBanner from './components/QuoteBanner'
import InsightCards from './components/InsightCards'
import QuoteCarousel from './components/QuoteCarousel'
import ImpactStats from '../BenifitToTheReshearchers/components/ImpactStats'


const VisionaryLeadershipPage = () => {
  return (
    <div>
      <PageIntro
        title="Learn from"
        highlight="Visionary Leaders"
        description="Explore inspiring perspectives and strategic insights from leaders shaping the future across industries."
      />
      <QuoteBanner />
      <InsightCards />
      <QuoteCarousel />
      <ImpactStats />
    </div>
  )
}

export default VisionaryLeadershipPage;