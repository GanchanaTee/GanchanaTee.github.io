import React, { useState } from 'react'

import {TOTAL_SCREENS, GET_SCREEN_INDEX} from '../../../utilities/CommonScreens'
import ScrollService from '../../../utilities/ScrollService'
import logo from './logo.jpg'
import './Navbar.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

function Navbar() {

    const [selectedScreen, setSelectedScreen] = useState(0);
    const [showNavOptions, setShowNavOptions] = useState(false);

    const updateCurrentScreen = (currentScreen) => {
        if (!currentScreen || !currentScreen.screenInView) return;
    
        let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
        if (screenIndex < 0) return;
    };

    let currentScreenSubscription = ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen);

    // Get Navbar contents to show on screen
    const getNavOptions = () => {
        // i = index of array
        return TOTAL_SCREENS.map((Screen, i) => (
          <div
            key={Screen.screen_name}
            className={getNavOptionsClasses(i)}
            onClick={() => switchScreen(i, Screen)}
          >
            <span>{Screen.screen_name}</span>
          </div>
        ));
    };


    const getNavOptionsClasses = (index) => {
        // starter class : every Navbar contents have is class
        let classes = "nav-option ";
        // margin except last  component
        if (index < TOTAL_SCREENS.length - 1) classes += "nav-option-seperator ";
        // change color font when it selected
        if (selectedScreen === index) classes += "selected-nav-option ";
    
        return classes;
    };

    const switchScreen = (index, screen) => {
        let screenComponent = document.getElementById(screen.screen_name)
        if(!screenComponent)
        return;

        screenComponent.scrollIntoView({ behavior: "smooth"})
        setSelectedScreen(index);
        setShowNavOptions(false);
    }

    return (
        <div>
            <div className='nav-container' >
                <div className='nav-parent'>
                    <div className='nav-hamburger' onClick={() => setShowNavOptions(!showNavOptions)}>
                        <FontAwesomeIcon className='nav-hamburger-bars' icon={faBars} />
                    </div>
                    <div className='nav-logo'>
                        <img src={logo} alt='not found'/>
                        <span>Portfolio</span>
                    </div>
                    <div className={(showNavOptions) ? "nav-options show-hamburger-options" : 
                "nav-options"}>
                        {getNavOptions()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar