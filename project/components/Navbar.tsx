import {useState, useEffect} from 'react'
import { FaGithub, FaTwitter } from "react-icons/fa";

const Navbar = () => {
    const [currDate, setCurrentDate] = useState('');
    const setDate = () => {
        var hours = new Date().getHours();
        var min = new Date().getMinutes();
        var timeofDay = "AM"
        if (hours > 12) {
            timeofDay = "PM"
            hours = hours - 12
        }

        if (hours == 0) {
            hours = 12
        }

        var minToString = ""
        if (min < 10) {
            minToString = "0" + min.toString()
        } else {
            minToString = min.toString();
        }
        setCurrentDate(hours.toString() + ":" + minToString +  " " + timeofDay)
    }

    useEffect(() =>{
        setDate();
        setInterval(() => {
            setDate();
        }, 60000);
    }, []);

  return (
    <div id="navbar">
         <div className='socialLink'>
            <a href='https://github.com/s1nstyle'>
                <FaGithub size={25}/>
            </a>
            <a href='https://twitter.com/s1n_s1nstyle'>
                <FaTwitter size={25}/>
            </a>
        </div>
        <div className='timenow'>
            {currDate}
        </div>
        <img className="battery" src={'/low-battery.png'}/>
    </div>
  )
}

export default Navbar