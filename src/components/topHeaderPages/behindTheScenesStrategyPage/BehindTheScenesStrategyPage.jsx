import React from 'react'
import PageIntro from '../whoCanSubmitPage/components/PageIntro'
import StrategyTimeline from './components/StrategyTimeline'
import TeamInAction from './components/TeamInAction'
import QuoteBanner from '../VisionaryLeadershipPage/components/QuoteBanner'
import ImpactStats from '../BenifitToTheReshearchers/components/ImpactStats'
import SubmitCTA from '../whoCanSubmitPage/components/SubmitCTA'

const BehindTheScenesStrategyPage = () => {
  return (
    <div>
      <PageIntro
        title="Explore the"
        highlight="Strategy Behind the Scenes"
        description="Discover how strategic planning, team collaboration, and innovation come together to drive impact."
      />
      <StrategyTimeline />
      <TeamInAction />
      <QuoteBanner />
      <ImpactStats />
      <SubmitCTA />
    </div>
  )
}

export default BehindTheScenesStrategyPage;