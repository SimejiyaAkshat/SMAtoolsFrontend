import React, { Component } from 'react'
import { Outlet, Link } from "react-router-dom";
import ProfileImg from '../profileavatar.png';

export class Layout extends Component {
  render() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Website Performance</Link>
                    </li>
                    <li>
                        <Link to="/Social-Media-Analytics">Social Media Analytics</Link>
                    </li>
                    <li>
                        <Link to="/Site-Analytics">Website Analystics</Link>
                    </li>
                </ul>

                <div className='Profile-Img'>
                    <div>
                        <img src={ProfileImg} alt='profile-image'/>
                    </div>
                </div>
            </nav>

            <Outlet />
      </>
    )
  }
}

export default Layout