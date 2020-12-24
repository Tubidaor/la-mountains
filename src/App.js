import './App.css';
import logo from './assets/logo.png'

function App() {
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
        <h1>
          <span className="LA">
            LOS ANGELES
          </span>
          <span className="mount">
            MOUNTAINS
          </span>
        </h1>
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
    </div>
  );
}

export default App;
