import React, {useState, useEffect} from 'react'
import firework from '../../assets/firework.mp4'
import { FaGift } from "react-icons/fa";

import "./InvitationPage.css";

const InvitationPage = () => {
    const [start, setStart] = useState(false);
    const [counter, setCounter] = useState(0);

    const invitationArray = [
        { title: 'Starting my Invitation', about: 'just wait a few thousands of ms' },
        { title: 'Standart wish:', about: 'Health & Luck' },
        { title: 'Non Standart wish:', about: "DON'T be yourself" },
        { title: '', about: 'be BETTER...' },
        { title: 'Ordinary wish:', about: 'to be more creative!' },
        { title: 'Non Ordinary wish:', about: "to believe in Hakuna Matata, if you don't :)" },
        { title: '', about: "I do believe... " },  
        { title: '', about: "but not every day... :)" },
        { title: 'Emotional wish:', about: "to be kinder, more sensitive, more soulful" },
        { title: '', about: 'ouch.. drama, drama...' },
        { title: 'IT wish:', about: "endless wi-fi !! everywhere !!" },
        { title: 'It is not an Infinity...', about: "this is the end..." },
        { title: 'Merry Christmas', about: "and Happy New Year" },
        { title: "OK, Let's do it again...", about: "" },
    ]

    useEffect(() => {

        let interval

        if (start) {
            interval = setInterval(() => {      
                setCounter((prevIndex) => prevIndex === invitationArray.length - 1 ? 1 : prevIndex + 1);
            }, 7000);
        }
            
        return () => clearInterval(interval);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [invitationArray.length, start])


    const playVideo = () => {
        const video = document.getElementById('VideoId');
        video.play().catch((error) => {
            console.log('Play was prevented:', error);
        });
        setStart(true);
    };
    

    return (
        <div>
            <div className="video-background">
                <video loop muted playsInline className="video-bg" id="VideoId">
                    <source src={firework} type="video/mp4" /> 
                </video>
                <div className={!start ? "btn-content" : "content"}>                    
                    {!start ?
                        <div className="light-button">
                            <button className="bt" onClick={playVideo}>
                                <div className="light-holder">
                                    <div className="dot"></div>
                                    <div className="light"></div>
                                </div>
                                <div className="button-holder">
                                    <FaGift size={100} />                                    
                                    <p className="button-text">OPEN</p>
                                    
                                </div>
                            </button>
                        </div>
                        :
                        <div>
                            <h1 className="inv_title">{invitationArray[counter].title}</h1>
                            <p className="inv_about">{invitationArray[counter].about}</p>
                        </div>
                    }
                </div>
            </div>
            
        </div>
    )
};

export default InvitationPage