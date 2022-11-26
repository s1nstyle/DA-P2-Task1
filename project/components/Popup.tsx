import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Image from "next/image";
import styles from "../styles/popup.module.css";

interface PopupInterface {
  trigger: boolean,
  closePopup: Dispatch<SetStateAction<boolean>>,
  popupType: string
}

const Popup = ({trigger, closePopup, popupType}: PopupInterface ) => {
  const [roadmap1Selected, setRoadmap1Selected] = useState(false);
  const [roadmap2Selected, setRoadmap2Selected] = useState(false);
  const [roadmap3Selected, setRoadmap3Selected] = useState(false);
  const [roadmap4Selected, setRoadmap4Selected] = useState(false);
  const [roadmap5Selected, setRoadmap5Selected] = useState(false);
  const [roadmap6Selected, setRoadmap6Selected] = useState(false);

  useEffect(() => {
    switch (popupType) {
      case ('Vision and Values'):
        setRoadmap1Selected(true)
        break;
      case ('IRL Utility'):
        setRoadmap2Selected(true)
        break;
      case ('Fragment Ticket'):
        setRoadmap3Selected(true)
        break;
      case ('Academy Assignments'):
        setRoadmap4Selected(true)
        break;
      case ('Grading System'):
        setRoadmap5Selected(true)
        break;
      case ('New Recruits'):
        setRoadmap6Selected(true)
        break;
    }
  }, [trigger])

  return (
    <div>
      {trigger && roadmap1Selected &&
        <div className={styles.popup} >
          <div className={styles.popupInner}>
            <button className={styles.closeBtn} onClick={() => closePopup(false)}>X</button>
            <h1>
                Project Highlights
            </h1>

            <div className={styles.videoContainer}>
              {/* Burn Function */}
              
              <div className={styles.videoSingle}>
                <video className={styles.vid} controls width="80%" height="70%">
                  <source src='/burn_function.mp4' type='video/mp4'></source>
                  Sorry, your browser doesn't support videos.
                </video>
                <div className={styles.videoDescription}>
                  <img className={styles.videoLogo} src={'/kam1_logo.png'}></img>
                  <div className={styles.videoText}>
                    <p className={styles.videoTitle}>[Exalt Protocol] Burn Function</p>
                    <p className={styles.videoAuthor}> KAM1/IZUKAI </p>
                  </div>
                </div>
              </div>
              
              <div className={styles.videoSingle}>
                <video className={styles.vid} controls muted width="80%">
                  <source src='/transcend_function.mp4' type='video/mp4'></source>
                  Sorry, your browser doesn't support videos.
                </video>
                <div className={styles.videoDescription}>
                  <img className={styles.videoLogo} src={'/kam1_logo.png'}></img>
                  <div className={styles.videoText}>
                    <p className={styles.videoTitle}>[Exalt Protocol] NFT Update Function</p>
                    <p className={styles.videoAuthor}> KAM1/IZUKAI </p>
                  </div>
                </div>
              </div>

              <div className={styles.videoSingle}>
                <img className={styles.vid} src={'/studentProfile.png'}  width="80%"/>
                
                <div className={styles.videoDescription}>
                  <img className={styles.facadeLogo} src={'/facade_logo.png'}></img>
                  <div className={styles.videoText}>
                    <p className={styles.videoTitle}>[NFT Modification] Metadata & Image Update on Call</p>
                    <p className={styles.videoAuthor}> FacadeNFT </p>
                  </div>
                </div>
              </div>

              <div className={styles.videoSingle}>
                <video className={styles.vid} controls muted width="80%">
                  <source src='/twitter_banner_generator.mp4' type='video/mp4'></source>
                  Sorry, your browser doesn't support videos.
                </video>
                <div className={styles.videoDescription}>
                  <img className={styles.facadeLogo} src={'/facade_logo.png'}></img>
                  <div className={styles.videoText}>
                    <p className={styles.videoTitle}>[Social Media] Diary Board & Twitter Banner Generator</p>
                    <p className={styles.videoAuthor}> FacadeNFT </p>
                  </div>
                </div>
              </div>
                
            </div>
              
            
          </div>
          </div>
      }
      
    </div>
  )

    
}

export default Popup