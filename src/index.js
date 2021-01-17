import React from 'react'
import ReactDOM from 'react-dom'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      now: new Date()
    }
  }
  componentWillMount () {
    this.timerId = setInterval(e => {
      this.setState({now: new Date()})
    }, 1000)
  }
  componentWillUnmount () {
    clearInterval(this.timerId)
  }
  render() {
    const z2 = (num) => {
      const s = '00' + String(num)
      return s.substr(s.length - 2, 2)
    }
    const now = this.state.now
    const hh = now.getHours()
    const mm = now.getMinutes()
    const ss = now.getSeconds()
    return(<div>
      <h1>App</h1>
      <p>{z2(hh)}:{z2(mm)}:{z2(ss)}</p>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
