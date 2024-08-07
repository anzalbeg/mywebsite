import React, { useEffect, useRef } from 'react';
import './Home.css'; // Import CSS file for HomePage styling
import LandingPage from './LandingPage';
import About from './About';
import ProjectsPage from './ProjectsPage'; // Update import to ProjectsPage
import WorkHistory from './WorkHistory';
import Contact from './Contact';
import Certifications from './CertificationsPage';
import fullpage from 'fullpage.js';
import ReactFullpage from '@fullpage/react-fullpage';
// Remove the invalid import statement

function HomePage() {
  const fullpageRef = useRef(null);

  useEffect(() => {
    if (!window.fullpage_api) {
      new fullpage('#fullpage', {
      autoScrolling: true,
      // scrollBar: false,
      // navigation: true, // Enable navigation dots or bullets
      // anchors: ['home', 'about', 'projects', 'work','certifications', 'contact'], // Define section anchors
     // easing: 'easeInOutCubic', // Adjust the easing function for JavaScript-based animations
      // scrollingSpeed: 700, // Adjust scrolling speed
      // fitToSection: true, // Enable fitToSection to fit content within sections
      // fitToSectionDelay: 100, // Delay to apply fitToSection after scroll
      // scrollHorizontally: true, // Enable horizontal scrolling
      // controlArrows: true, // Enable arrows for horizontal slides
      // slidesNavigation: true, // Enable slides navigation
      // easingcss3: 'cubic-bezier(0.565, 0.295, 0.900, 0.310)'

    });

    // Log the fullPage.js API object
    console.log("fullpageRef.current--->"+fullpageRef.current);
  }
    // Clean up on unmount
  }, []);

  return (
    <ReactFullpage
    easingcss3="cubic-bezier(0.875, 0.285, 0.320, 1.175)" 
    render={() => (
      <ReactFullpage.Wrapper>

    <div id="fullpage">
      <LandingPage />
      <About />
      <ProjectsPage />
      <WorkHistory />
      <Certifications />
      <Contact />
    </div>
    </ReactFullpage.Wrapper>
      )}
    />
  );
}

export default HomePage;
