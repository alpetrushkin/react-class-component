import {Component} from "react";
import './count.css'

class Count extends Component {
    state = {
        count: 0
    }

    handleClickInc = () => {
        this.setState({count: this.state.count - 1})
    }

    handleClickDec = () => {
        this.setState({count: this.state.count + 1})
        // this.setState((prevState) => ({count: prevState.count + 1}))
    }

  render() {
    return (
        <div className="wrapper">
          <div><div>Count:</div>
              <button onClick={this.handleClickInc}>---</button>
              <span> {this.state.count} </span>
              <button onClick={this.handleClickDec}>+++</button>
          </div>
        </div>
    )
  }
}

export default Count