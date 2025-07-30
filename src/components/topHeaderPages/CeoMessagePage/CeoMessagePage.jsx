import React from 'react'
import PageIntro from '../whoCanSubmitPage/components/PageIntro'
import MessageTextBlock from './components/MessageTextBlock'
import QuoteBanner from '../VisionaryLeadershipPage/components/QuoteBanner'
// import ImpactStats from '../BenifitToTheReshearchers/components/ImpactStats'
import CallToAction from '../../CallToAction'
import Timeline from './components/Timeline'
import ConnectWithCEO from './components/ConnectWithCEO'

// import careerEvents from '../../../../constants.js'

const careerEvents = [
  {
    title: "Joined XYZ Corporation",
    date: "2005",
    description: "Started the journey in the Learning & Development sector.",
  },
  {
    title: "Promoted to Director of Learning",
    date: "2010",
    description: "Led transformation initiatives in digital learning platforms.",
  },
  {
    title: "Founded ABC EdTech",
    date: "2015",
    description: "Built a vision-driven company impacting thousands of learners.",
  },
  {
    title: "Awarded National Education Leader",
    date: "2021",
    description: "Recognized for outstanding contribution to modern education.",
  },
];

const CeoMessagePage = () => {
  return (
    <div>
      <PageIntro
        title="A Message From Our"
        highlight="CEO to Learners"
        description="Our CEO shares heartfelt advice and inspiration for every learner on their journey to growth and impact."
      />
      <MessageTextBlock />
      <QuoteBanner />
      <Timeline events={careerEvents} />
      <ConnectWithCEO />
      <CallToAction />
    </div>
  )
}

export default CeoMessagePage;