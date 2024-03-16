import React, { Component } from 'react'
import LineGraph from '../components/Userschart'
import World from '../components/WorldMap'

export class Siteanalytics extends Component {
  render() {
    return (
      <div className='container'>
        <div className='first-data'>
          <div className='first-data-1'>
            User In Last 7 days : <br/><span>15k</span>
          </div>
          <div className='first-data-1'>
            Event Count In Last 7 days : <br/><span>1500</span>
          </div>
          <div className='first-data-1'>
            New Users In Last 7 days : <br/><span>5k</span>
          </div>
        </div>

        <div className='metrics'>
          <div className='metrics-1 metrics-graph'>
            <LineGraph></LineGraph>
          </div>
          <div className='metrics-1'>
            <World></World>
          </div>
        </div>
      </div>
    )
  }
}

export default Siteanalytics