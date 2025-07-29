import React from 'react'
import WhoCanSubmitIntro from '../headerLinks/WhoCanSubmitIntro'
import WhoCanSubmitList from '../headerLinks/WhoCanSubmitList'
import SubmissionRequirements from '../headerLinks/SubmissionRequirements'
import SubmissionProcess from '../headerLinks/SubmissionProcess'
import WhySubmit from '../headerLinks/WhySubmit'
import SubmitCTA from '../headerLinks/SubmitCTA'


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