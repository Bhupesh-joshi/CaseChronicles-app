import React from 'react'
import PageIntro from '../whoCanSubmitPage/components/PageIntro'
import TeamTabs from './components/TeamTabs'
import TeamSection from './components/TeamSection'
import TeamValues from './components/TeamValues'
import CallToAction from '../../CallToAction'

const DiverseTeamOfExpertsPage = () => {
  return (
    <div>
      <PageIntro
        title="Meet Our Diverse"
        highlight="Team of Experts"
        description="Passionate professionals united by a mission to create meaningful impact."
      />
      <TeamTabs />
      <TeamSection />
      <TeamValues />
      <CallToAction  />
    </div>
  )
}

export default DiverseTeamOfExpertsPage;