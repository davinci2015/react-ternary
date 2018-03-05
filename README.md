# react-ternary

Use ternary conditional operator in a declarative way.

## Installation

```bash
npm install react-ternary --save
```

## Usage

Instead of:
```js
import React, { Component } from 'react'

class App extends Component {
  render() {
    return(
      <div>
        {
          this.props.language === 'JS' ? 
            <div>Language is JS</div> : 
            <div>Language is not JS</div>
        }
      </div>
    )
  }
}
```

you can use ternary in a declarative way:
```js
import React, { Component } from 'react'
import Ternary from 'react-ternary'

class App extends Component {
  render() {
    return(
      <Ternary condition={this.props.language === 'JS'}>
        <div>Language is JS</div>     {/* first element will render if condition is true */}
        <div>Language is not JS</div> {/* second element will render if condition is false */ }
      </Ternary>
    )
  }
}
```
