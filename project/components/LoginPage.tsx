import React, {useState, useEffect, useCallback }from 'react'
import styles from '../styles/login.module.css';
import axios, { AxiosResponse } from 'axios';
import 'animate.css';
import Navbar from './Navbar';
import { animateCSS } from '../utils/animateCSS';
import { FaGithub, FaTwitter } from "react-icons/fa";

const LoginPage = () => {
    const [password, setPassword] = useState("");
    const [invalidAttempt, setInvalidAttempt] = useState(false);

    const handleLoginAttempt = (response: AxiosResponse<any, any> ) => {
        if (response.status === 200) {
            if (response.data['loginStatus']) {
                 setTimeout(function() {
                     window.location.replace("/profile")
                 }, 500);
            } else {
                 animateCSS('#loginForm', 'shakeX');
                 setInvalidAttempt(true);
                 console.log(invalidAttempt)
            }
         }
    }

    const handlePassword = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            if (!invalidAttempt) {
                const response = await axios.post('/api/login', {
                    password: password
                });
                handleLoginAttempt(response)
            } else {
                const response = await axios.post('/api/login', {
                    invalidAttempt: true,
                    password: password
                });
                handleLoginAttempt(response)
            }
        } catch (error){
            console.log(error)
        }
    }, [password, invalidAttempt])


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
                        Hint: What is your name?
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