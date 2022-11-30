import React from 'react'
import {MdPersonSearch} from "react-icons/md";
import {GoGist} from "react-icons/go";
import Typewriter from 'typewriter-effect';

interface NotificationPopupProps {
    setToggleNotification: () => void;
}

const NotificationPopup = ({setToggleNotification}: NotificationPopupProps) => {
    return (
        <div className='flex-col notificationPopup'>
            <div className='flex justify-between p-2 h-[25%]'>
                <h1 className='aboutMeHeader'>
                    About Me
                </h1>
                <button className='closeBtn' onClick={setToggleNotification}>
                    x
                </button>
            </div>
            
            <div className='popupComponent'>
                <div className='flex'>
                    <MdPersonSearch className="m-3" size={28}></MdPersonSearch>
                    <h1 className='NotificationTitle'>
                        Bio
                    </h1>
                </div>
                <div className='font-bold ml-5'>
                    <Typewriter
                        options={{
                            strings: ['Web3 Dev', 'NFT Degen', 'Soccer Addict'],
                            autoStart: true,
                            loop: true,
                        }}
                        
                    />
                </div>    
            </div>
            <div className='popupComponent'>
                <div className='flex'>
                    <GoGist className="m-3" size={28}></GoGist>
                    <h1 className='NotificationTitle'>
                        Tech
                    </h1>
                </div>
                <div className='font-bold ml-5'>
                    <Typewriter
                        options={{
                            strings: ['Javascript', 'Typescript', 'MongoDB', 'Python', 'React', 'Rest API', 'UNIX'],
                            autoStart: true,
                            loop: true,
                        }}
                        
                    />
                </div>    
            </div>
        </div>
    )
}

export default NotificationPopup