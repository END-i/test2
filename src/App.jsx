import React, { Fragment, Component } from 'react'

import Routes from './screens/Routes'
import GlobalStyle from './GlobalStyle'

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Routes />
      </Fragment>
    )
  }
}

export default App
