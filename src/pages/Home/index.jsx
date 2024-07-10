import React from 'react';
import FirstSection from './InnerSections/firstSection';
import SecondSection from './InnerSections/secondSection';
import ThirdSection from './InnerSections/thirdSection';
import FourthSection from './InnerSections/fourthSection';
import FifthSection from './InnerSections/fifthSection';
import SixthSection from './InnerSections/sixthSection';
import SeventhSection from './InnerSections/seventhSection';

const HomePage = () => {

  const title = 'New Arrivals';
  const description = 'Explore our artisanal handmade bedsheets, each piece crafted with care to elevate your comfort and style.'

  return (
    <>
      {/* First Section */}
      <FirstSection />

      {/* Second Section */}
      <SecondSection />

      {/* Third Section */}
      <ThirdSection />

      {/* Fourth Section */}
      <FourthSection title={title} description={description} />

      {/* Fifth Section */}
      {/* <FifthSection /> */}

      {/* Sixth Section */}
      <SixthSection />

      {/* SeventhSection */}
      <SeventhSection />

    </>
  )
}

export default HomePage
