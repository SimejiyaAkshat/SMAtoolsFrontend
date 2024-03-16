import React, { Component } from 'react'
import ILogo from '../instagram.jpg'
import FLogo from '../facebooklogo.webp'
import YLogo from '../youtubelogo.png'
import XLogo from '../XLogo.png'

export class Smadata extends Component {
  render() {
    return (
      <div className='container'>
        <div className='analystics-container'>
          <div className='an-card'>
            <div className='account-title'>
              <img src={ILogo} alt='Instagram'/>
              <h2>Instagram</h2>
            </div>
            

            <p>Followers : 15M</p>
            <p>Likes in 7 days : 15k</p>
            <p>Comments in 7 days : 15k</p>
          </div>
          <div className='an-card'>
            <div className='account-title'>
              <img src={FLogo} alt='Facebook-1'/>
              <h2>Facebook</h2>
            </div>

            <p>Followers : 15M</p>
            <p>Likes in 7 days : 15k</p>
            <p>Comments in 7 days : 15k</p>
          </div>
          <div className='an-card'>
            <div className='account-title'>
              <img src={YLogo} alt='Instagram'/>
              <h2>Youtube</h2>
            </div>

            <p>Followers : 15M</p>
            <p>Likes in 7 days : 15k</p>
            <p>Comments in 7 days : 15k</p>
          </div>
          <div className='an-card'>
            <div className='account-title'>
              <img src={XLogo} alt='Instagram'/>
              <h2>X</h2>
            </div>
            <p>Followers : 15M</p>
            <p>Twittes in 7 days : 15k</p>
            <p>Comments in 7 days : 15k</p>
          </div>
        </div> 
      </div>
    )
  }
}

export default Smadata