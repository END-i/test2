import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import GridView from './GridView'
import ListView from './ListView'

import { Wrapper } from './styled'

const AllProducts = ({ products, viewProducts }) => {
  if (!products) return null

  return (
    <Wrapper>
      {!viewProducts ? (
        <ListView unit={products} />
      ) : (
        <GridView unit={products} />
      )}
    </Wrapper>
  )
}

const mapStateToProps = state => ({
  viewProducts: state.viewProducts,
  products: state.products,
})

export default withRouter(connect(mapStateToProps)(AllProducts))
