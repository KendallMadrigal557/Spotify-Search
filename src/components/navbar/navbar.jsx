import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import './navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div>
                    <a>
                        <FontAwesomeIcon className="icon-nav" icon={faSpotify} />
                    </a>
                    <input type="text" placeholder="Write here what you are looking for..." className="nav-input" />
                    <button className="navbar-btn btnwhite" ><FontAwesomeIcon icon={faMagnifyingGlass} />Search</button>
                </div>
                <div>
                    <ul>
                        <li>
                            <button className="navbar-btn active" >All</button>
                        </li>
                        <li>
                            <button className="navbar-btn" >Albums</button>
                        </li>
                        <li>
                            <button className="navbar-btn" >Artists</button>
                        </li>
                        <li>
                            <button className="navbar-btn" >Podcasts</button>
                        </li>
                        <li>
                            <button className="navbar-btn" >Playlists</button>
                        </li>
                        <li>
                            <button className="navbar-btn" >Songs</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;