import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Ternary from '../src/Ternary'

class App extends Component {
    render() {
        return (
            <Ternary condition={false}>
                <div>True</div>
                <div>False</div>
            </Ternary>
        )
    }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)

module.hot.accept()