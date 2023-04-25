import './index.css'

const ResultPage = props => {
  const {score, restartGame} = props

  const onPlayAgain = () => {
    restartGame()
  }

  return (
    <div className="result">
      <div className="page">
        <img
          className="trophy"
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
        />
        <p className="result-heading">YOUR SCORE</p>
        <h1 className="result-score">{score}</h1>
        <button onClick={onPlayAgain} className="result-button" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default ResultPage
