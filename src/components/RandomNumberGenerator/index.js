// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  changeNum = () => {
    this.setState({num: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {num} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="head">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.changeNum} className="butt">
            Generate
          </button>
          <p className="para">{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
