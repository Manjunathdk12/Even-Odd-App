import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0, evenOddVar: 'Even'}

  increment = () => {
    this.setState(prevState => {
      const randomNum = Math.floor(Math.random() * 101) // ✅ Fix: Ensure range is 0-100
      const sumNum = randomNum + prevState.count
      const evenOddText = sumNum % 2 === 0 ? 'Even' : 'Odd'

      return {count: sumNum, evenOddVar: evenOddText}
    })
  }

  render() {
    const {count, evenOddVar} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="count-heading">Count {count}</h1>

          <p className="para">Count is {evenOddVar}</p>

          <button className="button" type="button" onClick={this.increment}>
            Increment
          </button>
          <p className="desc">*Increase By Random Number Between 0 to 100</p>
          <p className="footer">Coded By Manjunath DK</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
