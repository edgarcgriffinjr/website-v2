import React, { useState } from 'react';
import { HashLink as Link} from 'react-router-hash-link'
import * as AiIcons from 'react-icons/ai'
import * as CgIcons from 'react-icons/cg'

import pdf from '../assets/docs/resume.pdf'
import { navData } from '../static/navData'
import '../assets/css/nav.css'
import Logo  from '../static/logo'


const Nav = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return ( 
        <div className = 'nav'>
            <div className="header">
                <div className="header-box">
                    <div className="logo">
                        <Link smooth to = '#'> <Logo /></Link>
                    </div>

                    <nav className="link-list-item">
                        {navData.map((item, index) => {
                            return (
                                <li key = {index} className = {item.cName}>
                                    <Link smooth to = {item.path}>
                                        {item.icon}
                                        <span> {item.title} </span>
                                    </Link>
                                </li>
                            )
                        })}
                        <a className = 'nav-button' href = {pdf} target = '_blank' rel = 'noreferrer'>
                            <button> Resume </button>
                        </a>
                    </nav>
                </div>
            </div>
            
            <div className = "navbar">
                <div className = "navbar-logo">
                    <Link smooth to = '#'> <Logo /></Link>
                </div>

                <div className = 'navbar-burger'>
                    <div className = 'burger'>
                        <CgIcons.CgMenuRight onClick = {showSidebar} />
                    </div>
                </div>
            </div>

            <nav className= {sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-item" onClick = {showSidebar}>
                    <li className="navbar-toggle">
                        <Link smooth to ='#' className = 'close'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {navData.map((item, index) => {
                        return (
                            <li key = {index} className = {item.cName}>
                                <Link smooth to = {item.path}>
                                    {item.icon}
                                    <span> {item.title} </span>
                                </Link>
                            </li>
                        )
                    })}
                    <a className = 'nav-button' href = {pdf} target = '_blank' rel = 'noreferrer'>
                            <button> Resume </button>
                    </a>

                </ul>
            </nav>  
        </div>
    );
}
 
export default Nav;