// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {stat1: false, stat2: false}

  frstname = () => {
    this.setState(prevState => ({stat1: !prevState.stat1}))
  }

  lastname = () => {
    this.setState(prevState => ({stat2: !prevState.stat2}))
  }

  render() {
    const {stat1, stat2} = this.state
    return (
      <div className="main">
        <h1 className="mainhead">Show/Hide</h1>
        <div className="row_names">
          <div className="name_btn">
            <button className="btn" type="button" onClick={this.frstname}>
              Show/Hide Firstname
            </button>
            {stat1 ? <p className="name">Joe</p> : null}
          </div>
          <div className="name_btn">
            <button className="btn" type="button" onClick={this.lastname}>
              Show/Hide Lastname
            </button>
            {stat2 ? <p className="name">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
