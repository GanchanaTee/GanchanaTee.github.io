import React from 'react'

import './Home.css'
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner'
import HomeFooter from './HomeFooter/HomeFooter'

function Home() {
  
  return (
    <div className='home-container' id='Home'>
        <Navbar/>
        <Banner/>
        <HomeFooter/>
    </div>
  )
}

export default Home