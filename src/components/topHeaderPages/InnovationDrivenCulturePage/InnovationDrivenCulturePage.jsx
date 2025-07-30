import React from 'react'
import PageIntro from '../whoCanSubmitPage/components/PageIntro'
import InnovationImportance from './components/InnovationImportance'
import InnovationAreas from './components/InnovationAreas'
import FeaturedInitiatives from './components/FeaturedInitiatives'
import AwardsRecognition from './components/AwardsRecognition'
import Testimonials from '../../Testimonials' 
import CallToAction from '../../CallToAction'

const InnovationDrivenCulturePage = () => {
  return (
    <div>
      <PageIntro
        title="Fostering a Culture of"
        highlight="Continuous Innovation"
        description="We embrace change, challenge convention, and co-create future-ready learning experiences."
      />
      <InnovationImportance />
      <InnovationAreas />
      <FeaturedInitiatives />
      <AwardsRecognition />
      <Testimonials />
      <CallToAction />
    </div>
  )
}

export default InnovationDrivenCulturePage;