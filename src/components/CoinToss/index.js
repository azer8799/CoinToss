// Write your code here
import {Component} from 'react'
import './index.css'

const headsImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: headsImageUrl,
    headsCount: 0,
    tailsCount: 0,
  }

  changeImage = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      latestHeadsCount += 1
      tossImage = headsImageUrl
    } else {
      latestTailsCount += 1
      tossImage = tailsImageUrl
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  getTotalTosses = () => {
    const {headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return totalCount
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = this.getTotalTosses()

    return (
      <div className="bg-container">
        <div className="coin-card">
          <h1 className="heading"> Coin Toss Game</h1>
          <p className="top-desc"> Heads (or) Tails </p>
          <img className="logo" alt="toss result" src={tossResultImage} />
          <button className="button" type="button" onClick={this.changeImage}>
            {' '}
            Toss Coin
          </button>
          <div className="results">
            <p className="desc"> Total: {totalCount}</p>
            <p className="desc"> Heads: {headsCount}</p>
            <p className="desc"> Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
