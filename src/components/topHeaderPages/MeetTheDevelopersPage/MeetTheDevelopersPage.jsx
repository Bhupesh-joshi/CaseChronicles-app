import React from 'react'
import PageIntro from '../whoCanSubmitPage/components/PageIntro'
import DeveloperCardsGrid from './components/DeveloperCardsGrid'
import TechStackSection from './components/TechStackSection'
import DevelopmentTimeline from './components/DevelopmentTimeline'
import DevValuesBanner from './components/DevValuesBanner'
import MessageCard from './components/MessageCard'

const MeetTheDevelopersPage = () => {
  return (
    <div>
      <PageIntro
        title="Meet the minds"
        highlight="behind CaseCenter"
        description="A glimpse into the team responsible for building and maintaining the platform that empowers researchers, educators, and learners."
      />
      <DeveloperCardsGrid />
      <TechStackSection />
      <DevelopmentTimeline />
      <DevValuesBanner />
      <MessageCard />
    </div>
  )
}

export default MeetTheDevelopersPage;