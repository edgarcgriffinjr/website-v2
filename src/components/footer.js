import React from 'react';

import { Social } from './static/socialData'
import './assets/css/footer.css'

const Footer = () => {
    return ( 
        <section className="footer">
            <div className="footer-container">
                <div className="footer-trademark">
                    <a href = 'https://www.github.com/edgarcgriffinjr/website-v2'>
                        Developed & Design by Edgar Griffin
                    </a>
                </div>

                <ul className="footer-links">
                    {Social.map ((item, index) => {
                        return (
                            <li key = {index} >
                                <a href = {item.url}>
                                    {item.icon}
                                </a>
                            </li>
                        )      
                    })}
                </ul>
            </div>
        </section>
     );
}
 
export default Footer;