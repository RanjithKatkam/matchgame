import {Component} from 'react'

import './index.css'

class Navbar extends Component {
  render() {
    const {score, timer} = this.props

    return (
      <nav className="navbar">
        <div>
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
        </div>
        <ul className="score-container">
          <li>
            <p className="score-para">
              Score: <span>{score}</span>
            </p>
          </li>
          <li>
            <img
              className="timer"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
            />
            <p className="timer-para">{timer} sec</p>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
