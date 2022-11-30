import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Image from "next/image";
import styles from "../styles/popup.module.css";

interface PopupInterface {
  trigger: boolean,
  closePopup: Dispatch<SetStateAction<boolean>>,
  popupType: string
}

const Popup = ({trigger, closePopup, popupType}: PopupInterface ) => {
  const [projectSelected, setProjectSelected] = useState(false);

  useEffect(() => {
    switch (popupType) {
      case ('Projects'):
        setProjectSelected(true)
        break;
    }
  }, [trigger])

  return (
    <div>
      {trigger && projectSelected &&
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
              
              {/* Transcend Function */}
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

              {/* Student Profile Function */}
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

              {/* Twitter Banner Generator Function */}
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