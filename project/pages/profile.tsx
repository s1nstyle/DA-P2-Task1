import Head from 'next/head'
import type {NextPage} from "next";
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from "../styles/desktop.module.css";
import { FaPowerOff, FaCube } from "react-icons/fa";
import Popup from "../components/Popup";
import { useCallback, useState } from 'react';
import NotificationPopup from '../components/NotificationPopup';
import axios from 'axios';
import { server } from '../config';

const Profile: NextPage = (props: any) => {
  const [toggleProject, setToggleProjectPopup] = useState(false);
  const [toggleNoti, setToggleNoti] = useState(false);
  const returnToLogin = () => {
    setTimeout(function() {
      window.location.replace("/")
    }, 500);
  }

  const setToggleNotification = useCallback(() => {
    setToggleNoti(!toggleNoti)
}, [toggleNoti])

  return (
    <div className={styles.desktopPage}>
      <Navbar setToggleNotification={setToggleNotification}/>
      {toggleNoti && 
        <NotificationPopup setToggleNotification={setToggleNotification} techStack={props}></NotificationPopup>
      }
      <img className={styles.desktopBackground}/>
      <div>
        <a href='https://kam1.com/'>
          <div className={styles.websiteLinks1}>
            <img src={'/kam1_logo.png'}></img>
            <h3> KAM1 </h3>
          </div>
        </a>
        <a href='https://facade-home.vercel.app/'>
          <div className={styles.websiteLinks2}>
            <img src={'/facade_weblogo.png'}></img>
            <h3> Facade </h3>
          </div>
        </a>  
      </div>
      <Popup trigger={toggleProject} closePopup={setToggleProjectPopup} popupType={"Projects"}/>
      <div className={styles.appBar}>
      
        {/* Logout Button */}
        <div className={styles.app}>
          <button onClick={returnToLogin} className={styles.appButton}>
            <FaPowerOff/>
          </button>
          <p className={styles.appName}>
            Logout
          </p>
        </div>

        {/* Projects Button */}
        <div className={styles.app}>
          <button onClick={() => setToggleProjectPopup(true)} className={styles.appButton}>
            <FaCube/>
          </button>
          <p className={styles.appName}>
            Projects
          </p>
        </div>
        
        
      </div>
    </div>
  )
}

export default Profile;

export async function getServerSideProps() {
  
  const response = await axios.get(`${server}/api/getTech`);
  let techStackLst = []
  if (response.status === 200) {
    const data = response.data['techStack']
    for (let i = 0; i < data.length; i++) {
      techStackLst.push(data[i]['stack'])
    }
  }
  return { props: {techStackLst}}
}