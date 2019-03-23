import React, { Component, Fragment } from 'react'
import GridView from './layout/GridView'
import ListView from './layout/ListView'

class AllProducts extends Component {
  state = { list: true }

  render() {
    return (
      <Fragment>
        {list && <ListView />}
        {!list && <GridView />}
      </Fragment>
    )
  }
}

export default AllProducts
