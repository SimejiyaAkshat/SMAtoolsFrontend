import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <div className='container'>
        <form className='website-form'>
          <input type='text' id='site-name' className='form-text-site' placeholder='Enter Site URL'></input>

          <input type='submit' id='submit' className='font-submit-btn' placeholder='Submit'></input>
        </form>

        <div className='performance-container'>
          <div className='grade-scores'>
            <div className='grade-card grade-card-1'>
              <h2>A</h2>

              <p>Performance<br/><span>88%</span></p>

              <p>Structure<br/><span>75%</span></p>
            </div>
            <div className='grade-card grade-card-2'>
              <p>LCP<br/><span>1.3s</span></p>

              <p>TBT<br/><span>79ms</span></p>

              <p>TTFB<br/><span>88ms</span></p>
            </div>
          </div>
          <div className='top-issues'>
            <div className='issues-list'>
              <div className='issue-item'>
                <div className='impact' style={{backgroundColor:"#ff0011"}}>Hight</div>

                <div className='title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex.</div>

                <div className='audit'> : 500 Elements</div>
              </div>

              <div className='issue-item'>
                <div className='impact' style={{backgroundColor:"#0000ee"}}>Medium</div>

                <div className='title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex.</div>

                <div className='audit'> : Total size</div>
              </div>

              <div className='issue-item'>
                <div className='impact' style={{backgroundColor:"#00ee00"}}>Low</div>

                <div className='title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex.</div>

                <div className='audit'> : 500 Elements</div>
              </div>

              <div className='issue-item'>
                <div className='impact' style={{backgroundColor:"#0000ee"}}>Medium</div>

                <div className='title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex.</div>

                <div className='audit'> : Total size</div>
              </div>

              <div className='issue-item'>
                <div className='impact' style={{backgroundColor:"#ff0011"}}>Hight</div>

                <div className='title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex.</div>

                <div className='audit'> : 500 Elements</div>
              </div>

              <div className='issue-item'>
                <div className='impact' style={{backgroundColor:"#0000ee"}}>Medium</div>

                <div className='title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex.</div>

                <div className='audit'> : Total size</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home