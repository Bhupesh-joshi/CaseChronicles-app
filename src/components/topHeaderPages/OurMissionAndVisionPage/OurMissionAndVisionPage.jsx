import React from 'react'
import PageIntro from '../whoCanSubmitPage/components/PageIntro'
import MissionStatement from './components/MissionStatement'
import VisionStatement from './components/VisionStatement'
import ValuesGrid from './components/ValuesGrid'
import QuoteBanner from '../VisionaryLeadershipPage/components/QuoteBanner'
import ImpactStats from '../BenifitToTheReshearchers/components/ImpactStats'
import MediaBanner from './components/MediaBanner'
import CallToAction from '../../CallToAction' 
import MissionTimeline from './components/MissionTimeline' 


const OurMissionAndVisionPage = () => {
  return (
    <div>
      <PageIntro
        title="Our"
        highlight="Mission & Vision"
        description="Explore our core values and long-term vision that drive every initiative we undertake."
      />
      <MissionStatement />
      <VisionStatement />
      <ValuesGrid />
      <QuoteBanner />
      <ImpactStats />
      <MediaBanner />
      <CallToAction />
      <MissionTimeline />
    </div>
  )
}

export default OurMissionAndVisionPage;