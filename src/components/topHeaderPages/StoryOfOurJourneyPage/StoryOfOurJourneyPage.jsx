import React from 'react'
import PageIntro from './components/PageIntro'
import TheSpark from './components/TheSpark'
import MilestoneTimeline from './components/MilestoneTimeline'
import ChallengesSection from './components/ChallengesSection'
import PhotoGallery from './components/PhotoGallery'
import VisionForward from './components/VisionForward'
import ThankYouSection from './components/ThankYouSection'

const StoryOfOurJourneyPage = () => {
  return (
    <div>
      <PageIntro />
      <TheSpark />
      <MilestoneTimeline />
      <ChallengesSection />
      <PhotoGallery />
      <VisionForward />
      <ThankYouSection />
    </div>
  )
}

export default StoryOfOurJourneyPage;