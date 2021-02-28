import React from 'react';

import './assets/css/hero.css'

const Hero = () => {
    const one = <h1 className = 'hero-welcome'>  Hi, welcome to </h1>
    const two = <h2 className = 'hero-name'>Edgar Griffin </h2>
    const three = <h3 className = 'hero-title'> Software Engineer</h3>
    const four = (
        <p className = 'hero-desc'>
            I am a newly graduated software developer from Georgia Southern 
            University located in the Metro Atlanta Area and am willing to relocate. 
        </p>
    );    
    const five = (
        <a className = 'hero-button' href = 'mailto: edgarcgriffinjr@gmail.com'>
            <button> Email me </button>
        </a>
    );

    const items = [ one, two, three, four, five ];

    return ( 
        <section className = 'hero'>
            <div className="hero-container">
                <div className="hero-items">
                    {items.map((item) => {
                        return (
                            <div>{item}</div>
                            )
                        })}
                </div>
            </div>
        </section>

     );
}
 
export default Hero;