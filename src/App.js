import React, { Component } from 'react'
import './App.css';
import logo from './assets/logo.png'
import photo1 from './assets/photo1.jpg'
import photo2 from './assets/photo2.jpg'
import photo3 from './assets/photo3.jpg'
import photo4 from './assets/photo4.jpg'
import thirdPageFooter from './assets/3rdPageFooter.png'
import climbHeading from './assets/climbHeading.png'
import historyHeading from './assets/historyHeading.png'


export default class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      pics: [photo1, photo2, photo3, photo4],
      index: null,
      mountId: "mount1"
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.stickNav)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.stickNav)
  }

  stickNav = () => {
    const footer = document.getElementById("stick-con")
    const stay = document.getElementById("stick")
    const stick = footer.getBoundingClientRect()

    if(stick.top <= 0) {
      stay.style.position = "fixed"
      stay.style.top = 0
      stay.style.width = "100%"
      stay.style.backgroundColor = "white"
      stay.style.bottom = null;
    }
    if(stick.top >= 0) {
      stay.style.position = "absolute"
      stay.style.bottom = 0;
      stay.style.width = "100%"
    }
  }

  handlePicClick = (index, picId, bubbleId) => {
    const bubbles = document.getElementsByClassName("bubble")
    const pics = document.getElementsByClassName("side-pic")
    let close = document.getElementById('close')
    close.style.display = "block"

    for(let i = 0; i < Object.keys(bubbles).length; i++) {
      if(Object.values(bubbles[i])[1].id == bubbleId) {
        let id = document.getElementById(bubbleId)
        id.classList.add('bubble-selected')
      }
      else {
        let id = document.getElementById(Object.values(bubbles[i])[1].id)
        id.classList.remove('bubble-selected')
      }
    }
    for(let i = 0; i < Object.keys(pics).length; i++) {
      if(Object.values(pics[i])[1].id == picId) {
        let id = document.getElementById(picId)
        id.classList.add('side-pic-selected')
      }
      else {
        let id = document.getElementById(Object.values(pics[i])[1].id)
        id.classList.remove('side-pic-selected')
      }
    }
    this.setState({
      index
    })
  }

  handleSchedClick = (mountId) => {
    const id = document.getElementById(mountId)
    const li = document.getElementsByClassName("m-choice")
    
    for(let i = 0; i < Object.keys(li).length; i++) {
      if(Object.values(li[i])[1].id == mountId) {
        id.classList.add("mount-selected")
      }
      else {
        let id = document.getElementById(Object.values(li[i])[1].id)
        id.classList.remove("mount-selected")
      }
    }
    this.setState({mountId})
  }

  handleClose = () => {
    let close = document.getElementById('close')
    close.style.display = "none"
  }

  render() {

    return (
      <div className="App">
        <main className="main">
          <header>
            <nav className="main-nav">
              <img className="logo" src={logo} alt="ct-logo"/>
              <ul className="nav-items">
                <li>
                  <a href="#history">
                    01. HISTORY
                  </a>
                </li>
                <li>
                  <a href="#team">
                    02. TEAM
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <header>
            <h1>
              LOS ANGELES MOUNTAINS
            </h1>
          </header>
          <footer className="sticky-footer" id="stick-con">
            <div  id="stick">
              <div className="foot-wrapper">
                <div className="logo-and-la">
                  <img className="foot-logo" src={logo} alt="ct-logo"/>
                  <div className="la-mount">
                    <span className="foot-la">
                      LOS ANGELES
                    </span>
                    <span className="foot-mount">
                      MOUNTAINS
                    </span>
                  </div>
                </div>
                <ul className="foot-items">
                  <li>
                    <a href="#history">
                      01. HISTORY
                    </a>
                  </li>
                  <li>
                    <a href="#team">
                      02. TEAM
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </main>
        <section className="history" id="history">
          <header className="history-header">
            <h2 className="history-h2">
              01. HISTORY
            </h2>
            <img className="history-heading-img" src={historyHeading}></img>
          </header>
          <p className="history-intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin in ante viverra, rutrum erat rutrum, consectetur mi.
            Proin at maximus est. Nullam purus ex, iaculis sed erat sed,
            blandit tincidunt quam. Cras scelerisque id quam sed dignissim
            Pellentesque urna nunc, gravida quis hendrerit ac, tristique
            ut quam. Vivamus suscipit dignissim tortor nec congue. 
          </p>
          <div 
            className="main-pic-con hide-pic"
            id="close"
            onClick={e => this.handleClose()}
          >
            <div className="close-pic">
              <div className="bar bar1">
              </div>
              <div className="bar bar2">
              </div>
            </div>
            {
              this.state.index != null &&
              <img 
                className="main-pic"
                src={this.state.pics[this.state.index]}
              >
              </img>
            }
          </div>
          <div className="carousel">
            <div className="pics-wrapper">
              <img
                className="side-pic"
                id="img1" src={photo1}
                alt="Man on top of mountain."
                onClick={e => this.handlePicClick(0, "img1", "bubble1")}
              />
              <img
                className="side-pic"
                id="img2"
                src={photo2}
                alt="Man on top of mountain."
                onClick={e => this.handlePicClick(1, "img2", "bubble2")}
              />
              <img
                className="side-pic"
                id="img3"
                src={photo3}
                alt="Man on top of mountain."
                onClick={e => this.handlePicClick(2, "img3", "bubble3")}
              />
              <img
                className="side-pic"
                id="img4"
                src={photo4}
                alt="Man on top of mountain."
                onClick={e => this.handlePicClick(3, "img4", "bubble4")}
              />
            </div>
            <div className="bubble-selector-con">
              <div className="bubble" id="bubble1">
              </div>
              <div className="bubble" id="bubble2">
              </div>
              <div className="bubble" id="bubble3">
              </div>
              <div className="bubble" id="bubble4">
              </div>
            </div>
          </div>
        </section>
        <section className="team" id="team">
          <div className="team-header-con">
            <header className="team-header">
              <h2 className="climb-h2">
                02. Climb
              </h2>
              <img className="climb-heading-img" src={climbHeading}/>
              <p className="climb-p">
                Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
                gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
                dignissim tortor nec congue.
              </p>
            </header>
            <header className="team-nav-header">
              <nav className="team-nav">
                <ul className="team-ul">
                  <li
                    className="m-choice mount-selected"
                    id="mount1"
                    onClick={e => this.handleSchedClick("mount1")}
                  >
                    MOUNTAIN 1
                  </li>
                  <li
                    className="m-choice"
                    id="mount2"
                    onClick={e => this.handleSchedClick("mount2")}
                  >
                    MOUNTAIN 2
                  </li>
                </ul>
              </nav>
                  </header>
                  </div>
              <div className="climb-bg">
                <div className="mount-sched">
                  <h3 class="sched-h3">Schedule</h3>
                  {this.state.mountId === "mount1" &&
                  <div className="table1-con">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <span class="t-data">25 Nov 2016</span>
                          </td>
                          <td>
                            <span class="t-data">
                              &nbsp;&nbsp;&nbsp;&nbsp;Vestibulumviverra
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span class="t-data">28 Nov 2016</span>
                          </td>
                          <td>
                            <span class="t-data">
                              &nbsp;&nbsp;&nbsp;&nbsp;Vestibulumviverra
                            </span>
                          </td>
                        </tr>
                        <br></br>
                        <tr>
                          <td>
                            <span class="t-data">18 Dec 2016</span>
                          </td>
                          <td>
                            <span class="t-data">
                              &nbsp;&nbsp;&nbsp;&nbsp;Vestibulumviverra
                            </span>
                          </td>
                        </tr>
                        <br></br>
                        <tr>
                          <td>
                            <span class="t-data">7 Jan 2017</span>
                          </td>
                          <td>
                            <span class="t-data">
                              &nbsp;&nbsp;&nbsp;&nbsp;Vestibulumviverra
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  }
                  {this.state.mountId === "mount2" &&
                  <div className="table2-con">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <span class="t-data">25 Oct 2016</span>
                          </td>
                          <td>
                            <span class="t-data">
                              &nbsp;&nbsp;&nbsp;&nbsp;Vestibulumviverra
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span class="t-data">28 Oct 2016</span>
                          </td>
                          <td>
                            <span class="t-data">
                              &nbsp;&nbsp;&nbsp;&nbsp;Vestibulumviverra
                            </span>
                          </td>
                        </tr>
                        <br></br>
                        <tr>
                          <td>
                            <span class="t-data">18 Nov 2016</span>
                          </td>
                          <td>
                            <span class="t-data">
                              &nbsp;&nbsp;&nbsp;&nbsp;Vestibulumviverra
                            </span>
                          </td>
                        </tr>
                        <br></br>
                        <tr>
                          <td>
                            <span class="t-data">7 Feb 2017</span>
                          </td>
                          <td>
                            <span class="t-data">
                              &nbsp;&nbsp;&nbsp;&nbsp;Vestibulumviverra
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  }
                </div>
              </div>
          <footer className="sched-footer">
            <img
              className="sched-foot-img"
              src={thirdPageFooter}
              alt="LA mountains footer image."
            />
            <span className="copyright">
              COPYRIGHT 2016. ALL RIGHTS RESERVED.
            </span>
          </footer>
        </section>
      </div>
    )
  }
}

