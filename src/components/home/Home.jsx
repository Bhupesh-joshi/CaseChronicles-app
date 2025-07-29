import React from 'react'
// import whyChooseUsData from '../data/whyChooseUsData'
// import {whyChooseUsData} from '../../constants.js'

import HeroSection from '../HeroSection.jsx'
import FeaturedCases from '../FeaturedCases.jsx'
import WhyChooseUs from '../WhyChooseUs.jsx'
import CallToAction from '../CallToAction.jsx'
import Testimonials from '../Testimonials.jsx'
import Newsletter from '../Newsletter.jsx'
import FAQSection from '../FAQSection.jsx'

import image from '../../assets/mainBanner.jpeg'

import {whyChooseUsData} from '../../constants.js';

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
        // imgSrc="/src/assets/mainBanner.jpg"
        imgSrc={image}
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
