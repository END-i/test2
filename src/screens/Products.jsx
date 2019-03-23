import React, { Component } from 'react'

import AllProducts from '../components/AllProducts'

class Products extends Component {
  render() {
    return (
      <div>
        Products
        <button onClick={this.GoGoGo}>PRESS ME</button>
        <AllProducts />
      </div>
    )
  }
}

export default Products
