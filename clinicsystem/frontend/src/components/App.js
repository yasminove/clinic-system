import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    render(){
        return(
            <div>
                <h3>hi react</h3>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

