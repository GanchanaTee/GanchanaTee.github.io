import React from 'react'
import './UptoTop.css'
import ScrollService from '../../utilities/ScrollService';

import { FiHome } from "react-icons/fi";

function UptoTop() {
  return (
    <div className='up-to-top-container'>
        <button onClick={() => ScrollService.scrollHandler.scrollToHome()}>
            < FiHome className='up-icon' size="33px"/>
        </button>    
    </div>
  )
}

export default UptoTop