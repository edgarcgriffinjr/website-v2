import React from 'react';
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';

import './assets/css/featured.css'
import { featuredData } from './static/featuredData'

const Featured = () => {
    return ( 
        <section id = 'projects' className="featured">
            <div className="featured-container">
                <div className="featured-heading">
                    <AiIcons.AiFillCode />
                    <span> Some of my work </span>
                </div>

                <div className="featured-grid">
                    {featuredData.map((job, index) => {
                        return (
                            <div className = 'featured-grid-template'>
                                <div className="featured-image">
                                    <img src = {job.image} alt = {job.title}/>
                                </div>

                                <div key = {index } className="featured-content">
                                    <h1 className="featured-title"> { job.title } </h1>
                                    <div className="featured-desc">
                                        <p> { job.desc }</p>
                                    </div>
                                    <ul className="featured-tech-list">
                                        {job.tech.map((item, index) => {
                                            return (   
                                                <li> {item}</li>
                                            )
                                        })} 
                                    </ul>
                                    <div className="featured-links">
                                        <div className="github-link">
                                            <a href = {job.github}>
                                                <FaIcons.FaGithubAlt />
                                            </a>
                                        </div>
                                        <div className="url-link">
                                        <a href = {job.url}>
                                                <FiIcons.FiExternalLink />
                                            </a>
                                        </div>
                                    </div>
                                    
                                </div>     
                            </div>
                        )
                    })} 
                </div>
            </div>
        </section>
     );
}
 
export default Featured;