import React from 'react'
import whyChooseUsData from '../data/whyChooseUsData'

import HeroSection from '../components/HeroSection'
import FeaturedCases from '../components/FeaturedCases'
import WhyChooseUs from '../components/WhyChooseUs'
import CallToAction from '../components/CallToAction'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import FAQSection from '../components/FAQSection'

const Home = () => {
  return (
    <div>
      <HeroSection
        title="Find & Explore"
        highlightText="Real-World Cases"
        titleEnd="For Learning & Teaching"
        description="Access thousands of high-quality case studies crafted by industry experts to accelerate your learning journey."
        primaryBtnText="Write Cases"
        primaryBtnLink=""
        secondaryBtnText="Join Chronicles"
        secondaryBtnLink=""
        imgSrc="/src/assets/mainBanner.jpg"
      />
      <FeaturedCases />
      <WhyChooseUs 
        mainTitle="Why Choose Us"
        subTitle="We provide the best resources and case studies to help you grow faster."
        whyChooseUsData={whyChooseUsData}
      />
      <CallToAction />
      <Testimonials />
      <Newsletter />
      <FAQSection />
    </div>
  )
}

export default Home
