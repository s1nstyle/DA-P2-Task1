import React, {useState, useEffect, useCallback }from 'react'
import styles from '../styles/login.module.css';
import axios from 'axios';
import 'animate.css';
import Navbar from './Navbar';
import { animateCSS } from '../utils/animateCSS';
import { FaGithub, FaTwitter } from "react-icons/fa";

const LoginPage = () => {
    const [password, setPassword] = useState("");
    const [invalidAttempt, setInvalidAttempt] = useState(false);

    const handlePassword = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/login', {
                password: password
            });
            if (response.status === 200) {
               if (response.data['loginStatus']) {
                    setTimeout(function() {
                        window.location.replace("/profile")
                    }, 500);
               } else {
                    animateCSS('#loginForm', 'shakeX');
                    setInvalidAttempt(true);
               }
            }
            
        } catch (error){
            console.log(error)
        }
    }, [password])


    return (
        <div className={styles.loginPage}>
            <Navbar/>
            <img className={styles.loginBackground}/>

            <div className={styles.loginComponent}>
                <img className={styles.profile} src={'/profile.png'}/>
                
                <form id="loginForm" className={styles.loginForm} onSubmit={handlePassword}>
                    <input type={"password"} value={password} onChange={(e) => setPassword(e.target.value)} id={styles.password} name='password'/>
                </form>
               
                {invalidAttempt && 
                    <div className={styles.loginHint}>
                        Hint: What is my name?
                    </div>
                }
                <div className={styles.socialMedia}>
                    <a href='https://github.com/s1nstyle'>
                        <FaGithub size={25}/>
                    </a>
                    <a href='https://twitter.com/s1n_s1nstyle'>
                        <FaTwitter size={25}/>
                    </a>
                </div>
                
                
                    
            </div>

            
            
            
        </div>
        
    )
}

export default LoginPage