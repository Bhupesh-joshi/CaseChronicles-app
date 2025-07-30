import React from 'react'
// import WhoCanSubmitIntro from '../../headerLinks/WhoCanSubmitIntro'
import PageIntro from '../whoCanSubmitPage/components/PageIntro'
import SubmitEssentialsList from './components/SubmitEssentialsList'
import CallToAction from '../../CallToAction'


const SubmitEssentialsPage = () => {
  // console.log("SubmitEssentialsPage rendered");
  return (
    <div>
      <PageIntro
        title="Understand the"
        highlight="Submission Essentials"
        description="Before you submit your case, make sure you meet all the essential criteria such as structure, format, and required information."
      />
      <SubmitEssentialsList />
      <CallToAction />

    </div>
  )
}

export default SubmitEssentialsPage;