import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

// import GridView from './GridView'
// import ListView from './ListView'

class AllProducts extends Component {
  state = { list: true }

  render() {
    console.log('render', this.props.products)
    return (
      <Fragment>
        {/* {list && <ListView />}
        {!list && <GridView />} */}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products,
})

export default connect(mapStateToProps)(AllProducts)
