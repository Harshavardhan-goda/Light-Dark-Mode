import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {value: true}

  onModeButton = () => {
    const {value} = this.state

    this.setState({value: !value})
  }

  render() {
    let modeClass

    const {value} = this.state

    const modeBtn = value
      ? ((modeClass = 'dark-card'), 'Light Mode')
      : ((modeClass = 'light-card'), 'Dark Mode')

    return (
      <div className="container">
        <div className={modeClass}>
          <h1>Click To Change Mode</h1>
          <button className="btn" type="button" onClick={this.onModeButton}>
            {modeBtn}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
