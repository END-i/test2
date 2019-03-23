import React, { Component } from 'react'

class Products extends Component {
  GoGoGo = () => {}

  render() {
    return (
      <div>
        Products
        <button onClick={this.GoGoGo}>PRESS ME</button>
      </div>
    )
  }
}

export default Products
