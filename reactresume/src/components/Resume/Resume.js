import React, {useState} from 'react'
import { DiHtml5, DiCss3, DiJavascript, DiReact, DiNodejsSmall, DiMongodb } from "react-icons/di";
import { FaGithubSquare, FaExternalLinkSquareAlt } from "react-icons/fa"

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import ResumeHeading from './ResumeHeading/ResumeHeading'

import './Resume.css'

function Resume(props) {

    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id) {
            return Animations.animations.fadeInScreen(props.id)}
    }
    
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


    const resumeBullets = [
        {label: "Education", logoSrc: "education.svg"},
        {label: "Work History", logoSrc: "work-history.svg"},
        {label: "Programming Skills", logoSrc: "programming-skills.svg"},
        {label: "Projects", logoSrc: "projects.svg"},
        {label: "Interests", logoSrc: "interests.svg"},
    ];

    const programminigSkillsDetails = [
        {skill: "HTML"},
        {skill: "CSS"},
        {skill: "Javascript"},
        {skill: "React JS"},
        {skill: "Node JS"},
        {skill: "Express JS"},
        {skill: "Mongo DB"},
        {skill: "SQL language"},
        {skill: "R language"},
    ];

    const projectDetails = [
        {
            title: "Personal Profolio Website", 
            description:"A Personal Portfolio website to showcase all my details and projects at one place.",
            subHeading: "Technologies Used: React JS, Node JS, Express JS and Nodemailer",
            githubLink: "https://github.com/GanchanaTee/GanchanaTee.github.io",
            link:"https://ganchanatee.github.io/"
        },
        {
            title: "JAMMMIMG",  
            description:"The webpage which create a new playlist that you want to save to your Spotify account. My Spotify API is currently in Developer Mode.If you want try, Please send your spotify email to me.",
            subHeading: "Technologies Used: React.JS, NPM, Surge and Spotify API",
            githubLink: "https://github.com/GanchanaTee/jsd-jamming-assessment",
            link:"http://jammming-tee.surge.sh/"
        },
    ];

    const resumeDetails = [
        <div className='resume-screen-container' key="education">
            <ResumeHeading
            heading={"King Mongkut's Institute of Technology Ladkrabang, Bangkok "}
            subHeading={"Bachelor of Engineering: Control Engineering"}
            fromDate={"2016"}
            toDate={"2020"}/>
            <ResumeHeading
            heading={"Suankularb Wittayalai Rangsit School, Pathumthani"}
            subHeading={"Sciences and Mathematics Program"}
            fromDate={"2012"}
            toDate={"2015"}/>
        </div>,
        <div className='resume-screen-container' key="work-experience">
            <div className='experience-container'>
                <ResumeHeading
                heading={"Generation Thailand"}
                subHeading={"Junior Software Developer Bootcamp"}
                fromDate={"01/2021"}
                toDate={"Present"}
                />
                <div className='experience-description'>
                    <span className='resume-description-text'>
                    Learned How to build web application from React as Front-end, Node.js as Back-end and MongoDB as Database.
                    </span>
                </div>
                <br/>
                <ResumeHeading
                heading={"TOTO(Thailand) CO., Ltd"}
                subHeading={"Engineer "}
                fromDate={"07/2020"}
                toDate={"12/2021"}
                />
                <div className='experience-description'>
                    <span className='resume-description-text'>
                    - Worked as a Preventive Maintenance Supervisor to prevent recurrence of problems.
                    </span>
                    <br />
                    <span className='resume-description-text'>
                    - Worked as a Spare Part Supervisor to stock parts of the machine to be ready for supporting machine breakdown.
                    </span>
                </div>
            </div>
        </div>,
        <div className='resume-screen-container' key="programming-skills">
            <div className='programming-skills-container'>
                {programminigSkillsDetails.map((skill, index) => (
                    <div className='skill-parent' key={index}>
                        <div className='heading-bullet'></div>
                        <span>{skill.skill}</span>
                    </div>
                ))}
            </div>
            <div className='skill-icons'>
                <span>My Stack : <span>MERN Stack</span></span>
                <DiHtml5  className='skill-icon' size="50px"/>
                <DiCss3  className='skill-icon' size="50px"/>
                <DiJavascript  className='skill-icon' size="50px"/>
                <DiReact  className='skill-icon' size="50px"/>
                <DiNodejsSmall  className='skill-icon' size="50px"/>
                <DiMongodb  className='skillicon' size="50px"/>
            </div>
        </div>,
        <div className='resume-screen-container' key="projects">
            {projectDetails.map((projectDetail, index)=>(
                <div key={index}>
                    <ResumeHeading 
                    heading={projectDetail.title}
                    subHeading={projectDetail.subHeading}
                    description={projectDetail.description}
                    />
                    <div className='project-icons'>
                        <a href={[projectDetail.githubLink]} target="_blank" rel="noopener noreferrer">
                            <FaGithubSquare  className='project-icon' size="25px"/>
                        </a>
                        <a href={[projectDetail.link]} target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkSquareAlt  className='project-icon' size="25px"/>
                        </a>
                    </div>
                </div>
            ))}
        </div>,
        <div className='resume-screen-container' key="interests">
            <ResumeHeading 
            heading={'Data Science and Data Engineer'}
            description={'Apart from being a tech enthusiast and a code writer, i also love to analyze data for find some insight that make me interested.'}/>
            <ResumeHeading 
            heading={'Marketing and Business development'}
            description={`In addition to coding knowledge, what we should have is a business perspective, because it is the one that drives company and us to achieve target.`}/>
            <ResumeHeading 
            heading={'Self-improvement'}
            description={'I like to challenge myself in everyday. I trust in discipline and attempt because Practice makes me perfect'}/>
        </div>
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;
        let newCarousalOffset = {
            style: {transform: "translateY("+ index * offsetHeight * -1 + "px)"}
        };
        setCarousalOffSetStyle(newCarousalOffset)
        setSelectedBulletIndex(index)
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div onClick={()=>{handleCarousal(index)}} className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"} key={index}>
                <img className='bullet-logo' src={require(`../../assets/resumeIcon/${bullet.logoSrc}`)} alt="oops,,, no internet connection"/>
                <span className='bullet-label' >{bullet.label}</span>
            </div>
        ))
    };

    const getResumeScreen = () => {
        return (
            <div style={carousalOffSetStyle.style} className='resume-details-carousal'>
                {resumeDetails.map((resumeDetail) => resumeDetail)}
            </div>
        )
    }

  return (
    <div className='resume-container screen-container fade-in' id={props.id || ''}>
        <div className='resume-content'>
            <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'}/>
            <div className='resume-card'>
                <div className='resume-bullets'>
                    <div className='bullet-container'>
                        <div className='bullet-icons'></div>
                        <div className='bullets'>{getBullets()}</div>
                    </div>
                </div>
                <div className='resume-bullet-details'>{getResumeScreen()}</div>
            </div>
        </div>

    </div>
  )
}

export default Resume