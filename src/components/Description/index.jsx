import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Wrapper } from './styled'

const Description = ({ products }) => {
  const id = window.location.pathname.replace(/\D+/g, '')
  const index = products && products.map(e => e.id).indexOf(+id)
  const unit = products && products[index]

  if (products && !unit) window.location.pathname = '/not_found'

  if (!products) return null

  return (
      <Wrapper>
        <img src={unit.image} alt="car" />
        <ul>
          <li>{unit.product_name}</li>
          <li>{unit.price}</li>
          <li>{unit.modal}</li>
        </ul>
      </Wrapper>
  )
}

const mapStateToProps = state => ({
  products: state.products,
})

export default withRouter(connect(mapStateToProps)(Description))
