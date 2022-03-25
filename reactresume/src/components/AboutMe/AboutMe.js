import React from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'

import './AboutMe.css'

function AboutMe(props) {

  let fadeInScreenHandler = (screen) => {
    if(screen.fadeScreen !== props.id) {
        return Animations.animations.fadeInScreen(props.id)}
  }

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const aboutmeContent = {
    description: `I am a full-time and part-time learner. Developing web application with React 
    for frontend and Node.js for the backend. Interested in self learning, analytical thinking, 
    and data, because data is everything.` ,
    highlights: {
      bullets:[
        "ISTJ ",
        "Programing",
        "Psychology ",
        "Complex Problem solving",
        "person who passionate about self development",
      ],
      heading : "This is me:"
    }
  }

  const renderHighlight = () => {
    return (
        aboutmeContent.highlights.bullets.map((value, i) => (
            <div className='highlight' key={i}>
                <div className='highlight-blob'></div>
                <span>{value}</span>
            </div>
        ))
    )
}

  return (
    <div className='about-me-container screen-container fade-in' id ={props.id || ""} >
      <div className='about-me-parent'>
        <ScreenHeading title={'About Me'} subHeading={'Why choose Me?'}/>
        <div className='about-me-card'>
          <div className='about-me-profile'></div>
          <div className='about-me-details'>
                    <span className='about-me-description'>
                      {aboutmeContent.description}
                    </span>
                    <div className='about-me-highlights'>
                        <div className='highlight-heading'>
                            <span>
                              {aboutmeContent.highlights.heading}
                            </span>
                        </div>
                        {renderHighlight()}
                    </div>
                    <div className='about-me-quote'>
                      <span className='about-me-quote-text'>
                        ‘Intelligence is the ability to adapt to change.’ –Stephen Hawking
                      </span>
                    </div>
                </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe