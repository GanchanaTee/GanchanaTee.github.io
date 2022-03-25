import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaMedium, FaGithubSquare } from "react-icons/fa"
import ReactTypingEffect from 'react-typing-effect'
import ScrollService from '../../../utilities/ScrollService'

import './Banner.css'
import CV from '../../../assets/CV_Ganchana.pdf'

function Banner() {
  return (
    <div className='banner-container'>
        <div className='banner-parent'>
            <div className='banner-details'>
                <div className='icon-group'>
                    <a href='https://www.linkedin.com/in/ganchana-youpaisan-757823166/' target="_blank" rel="noopener noreferrer">
                        <FaLinkedin  className='icon' size="25px"/>
                    </a>
                    <a href='https://medium.com/@ganchana78' target="_blank" rel="noopener noreferrer">
                        <FaMedium  className='icon' size="25px"/>
                    </a>
                    <a href='https://github.com/GanchanaTee' target="_blank" rel="noopener noreferrer">
                        <FaGithubSquare  className='icon' size="25px"/>
                    </a>
                    <a href='https://www.facebook.com/ganchana.youpaisan' target="_blank" rel="noopener noreferrer">
                        <FaFacebookSquare  className='icon' size="25px"/>
                    </a>
                </div>
                <div className='banner-details-name'>
                    <span className='primary-text'>
                    Hello, I'm <span className='highlighted-text'> Ganchana Youpaisan</span>
                    </span>
                </div>
                <div className='banner-details-role'>
                    <span className='primary-text'>
                    <h1>
                        <ReactTypingEffect text={['Full Stack Developer', 'Full-time Learner']} speed={50} eraseDelay={1000} className="typing-effect" />
                    </h1>
                    <span className='profile-role-tagline'>Live as if you were to die today, Learn as if you were to live forever.</span>
                    </span>
                </div>
                <div className='banner-options'>
                    <button className='btn primary-btn' 
                    onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                    >
                        Hire Me
                    </button>
                    <a href={CV} target="_blank" rel="noopener noreferrer">
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'></div>
            </div>
        </div>
    </div>
  )
}

export default Banner