import React, { Component } from 'react'
import './App.css';
import logo from './assets/logo.png'
import photo1 from './assets/photo1.jpg'
import photo2 from './assets/photo2.jpg'
import photo3 from './assets/photo3.jpg'
import photo4 from './assets/photo4.jpg'

export default class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      pics: [photo1, photo2, photo3, photo4],
      index: 0
    }
  }
  render() {
  return (
    <div className="App">
      <main className="main">
        <header>
          <nav>
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
        <footer>
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
        </footer>
      </main>
      <section className="history" id="history">
        <h2 className="history-h2">
          01. HISTORY
        </h2>
        <p className="history-intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Proin in ante viverra, rutrum erat rutrum, consectetur mi.
          Proin at maximus est. Nullam purus ex, iaculis sed erat sed,
          blandit tincidunt quam. Cras scelerisque id quam sed dignissim
          Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam.
          Vivamus suscipit dignissim tortor nec congue. 
        </p>
        <div className="main-pic-con">
          <img className="main-pic" src={this.state.pics[this.state.index]}></img>
        </div>
        <div className="carousel">
          <div className="pics-wrapper">
            <img className="side-pic" src={photo1} alt="Man on top of mountain."/>
            <img className="side-pic" src={photo2} alt="Man on top of mountain."/>
            <img className="side-pic" src={photo3} alt="Man on top of mountain."/>
            <img className="side-pic" src={photo4} alt="Man on top of mountain."/>
          </div>
          <div className="bubble-selector-con">
            <div className="bubble bubble1">
            </div>
            <div className="bubble bubble2">
            </div>
            <div className="bubble bubble3">
            </div>
            <div className="bubble bubble4">
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
}

