import React from 'react'
import WhoCanSubmitIntro from '../components/headerLinks/WhoCanSubmitIntro'
import WhoCanSubmitList from '../components/headerLinks/WhoCanSubmitList'
import SubmissionRequirements from '../components/headerLinks/SubmissionRequirements'
import SubmissionProcess from '../components/headerLinks/SubmissionProcess'
import WhySubmit from '../components/headerLinks/WhySubmit'
import SubmitCTA from '../components/headerLinks/SubmitCTA'


const WhoCanSubmitPage = () => {
  return (
    <div>
        <WhoCanSubmitIntro />
        <WhoCanSubmitList />
        <SubmissionRequirements />
        <SubmissionProcess />
        <WhySubmit />
        <SubmitCTA />
    </div>
  )
}

export default WhoCanSubmitPage