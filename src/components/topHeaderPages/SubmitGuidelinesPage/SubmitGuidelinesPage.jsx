import React from 'react'
import PageIntro from '../whoCanSubmitPage/components/PageIntro'
import WhoCanSubmitList from '../whoCanSubmitPage/components/WhoCanSubmitList'
import SubmissionRequirements from '../whoCanSubmitPage/components/SubmissionRequirements'
import CallToAction from '../../CallToAction'

const SubmitGuidelinesPage = () => {
  return (
    <div>
      <PageIntro
        title="Follow the"
        highlight="Submission Guidelines"
        description="Ensure your case study meets our submission policies including formatting, content clarity, originality, and required documentation. Review each step carefully before proceeding."
      />
      <WhoCanSubmitList />
      <SubmissionRequirements />
      <CallToAction />
    </div>
  )
}

export default SubmitGuidelinesPage;