import React from 'react';
import * as AiIcons from 'react-icons/ai'

import './assets/css/about.css'
import me from './assets/images/me.jpg'

const About = () => {

    const skills = ['JavaScript (ES6+)', 'HTML & CSS', 'React', 'Python', 'SQL'];

    return ( 
        <section id = 'about' className="about">
            <div className="about-container">
                <div className="about-heading">
                    <AiIcons.AiFillInfoCircle />
                    <span> About Me </span>
                </div>
                <div className="about-grid">
                    <div className="about-left">
                        <p>
                            Hi, my name is Edgar and I am a software engineer in  based 
                            Atlanta, GA.
                        </p>

                        <p>
                            I am a skilled software engineer that enjoys building and 
                            creating all types of things through code. The main things I'm 
                            focused on right now is Front-End Engineering and clean, simple
                            UI's.
                        </p>

                        <p>
                            I am a skilled software engineer that recently graduated from 
                            <a href = 'https://www.georgiasouthern.edu'> Georgia Southern </a> with a 
                            B.S. in Computer Engineering where I chose to focus more on the 
                            programming portion as opposed to hardware. I was a 3 year leadership 
                            member of the Southern Pride Marching Band Drumline and was involved 
                            in various events on campus. I am currently doing some freelance 
                            while I continue to look for oppurtunities in the industy.
                        </p>

                        <p>
                            These are some of the technologies I work with on a daily basis:
                        </p>

                        <ul className="skills-list">
                            {skills.map((skill, index) => 
                                <li key={index}>{skill}</li>
                            )}
                        </ul>


                    </div>
                    <div className="about-right">
                        <img src = {me} alt = 'me'></img>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default About;