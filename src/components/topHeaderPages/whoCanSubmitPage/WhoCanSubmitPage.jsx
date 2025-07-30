import React from 'react'
// import WhoCanSubmitIntro from '../../headerLinks/WhoCanSubmitIntro'
import PageIntro from './components/PageIntro'
import WhoCanSubmitList from './components/WhoCanSubmitList'
import SubmissionRequirements from './components/SubmissionRequirements'
import SubmissionProcess from './components/SubmissionProcess'
import WhySubmit from './components/WhySubmit'
import SubmitCTA from './components/SubmitCTA'


const WhoCanSubmitPage = () => {
  return (
    <div>
        <PageIntro
  title="Submit Your Case Studies and"
  highlight="Inspire Learning"
  description="Share your real-world experiences and insights by submitting case studies. Your contribution will not only inspire thousands of learners but also foster a community of knowledge sharing and practical learning."
/>
        <WhoCanSubmitList />
        <SubmissionRequirements />
        <SubmissionProcess />
        <WhySubmit />
        <SubmitCTA />
    </div>
  )
}

export default WhoCanSubmitPage;