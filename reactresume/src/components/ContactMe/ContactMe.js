import React,{useState} from 'react'
import { FaPaperPlane} from "react-icons/fa"
import { FaFacebookSquare, FaLinkedin, FaMedium, FaGithubSquare } from "react-icons/fa"
import ReactTypingEffect from 'react-typing-effect'
import axios from 'axios'
import { toast } from 'react-toastify'

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'

import './ContactMe.css'
import bannerBG from '../../assets/banner.jpg'
import load1 from '../../assets/load2.gif'

function ContactMe(props) {

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id) {
            return Animations.animations.fadeInScreen(props.id)}
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const [name, setName] =useState('');
    const [email, setEmail] =useState('');
    const [message, setMessage] =useState('');
    const [banner, setBanner] =useState('');
    const [bool, setBool] =useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleMessage = (e) => {
        setMessage(e.target.value);
    }
    const submitForm = async (e) => {
        e.preventDefault();
        try {
            let data = {
                name, email, message
            } 
            setBool(true); 
            const res = await axios.post(`/contact`, data);
            if(name.length === 0 || email.length === 0 || message.length === 0) {
                setBanner(res.data.msg)
                toast.error(res.data.msg)
                setBool(false)
            } else if(res.status === 200){
                setBanner(res.data.msg)
                toast.success(res.data.msg)
                setBool(false)
                setName('')
                setEmail('')
                setMessage('')
            }
        } catch (error) {
            console.log(error)
        }
       
    }

    return (
        <div className='main-container contact-me-container fade-in' id={props.id || ''}>
            <ScreenHeading title={"Contact Me"} subHeading={"Lets Keep In Touch"} />
            <div className='central-form'>
                <div className='col'>
                    <h2>
                        <ReactTypingEffect text={''} staticText={['Get In Touch📩']} speed={50} className="typing-effect" />
                    </h2>
                    <div className='icons'>
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
                </div>
                    <div className='back-form'>
                    <div className='img-back'>
                        <h4>Send Your Email Here!</h4>
                        <img src={bannerBG} alt="not found"/>
                    </div>
                    <form onSubmit={submitForm}>
                        <p>{banner}</p>
                        <label htmlFor='name'>Name</label>
                        <input type='text' onChange={handleName} value={name}/>

                        <label htmlFor='email'>Email</label>
                        <input type='email' onChange={handleEmail} value={email}/>

                        <label htmlFor='message'>Message</label>
                        <textarea type='text' onChange={handleMessage} value={message}/>

                        <div className='send-btn'>
                            <button type='submit'>
                            {bool ? <b className='load'>
                            <FaPaperPlane className='icon' size="20px"/><img src={load1} alt='not responding'/>
                            </b> : <b className='normal'>Send<FaPaperPlane className='icon' size="20px"/></b>}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactMe