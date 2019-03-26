import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { MyButton, MyLogo } from './styled'
import { toggleViewProducts } from '../../store/viewProducts/actions'

const Header = ({toggleView}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        height: '60px',
        borderBottom: '2px solid #fff',
        margin: '0 20px',
        marginBottom: '40px',
      }}
    >
      <Link to="/" style={{ margin: 'auto 0' }}>
        <MyLogo src={require('./car.png')} alt=""/>
      </Link>
      <div style={{ display: 'flex' }}>
        <MyButton onClick={() => toggleView(true)}>
          <i className="fas fa-list" />
        </MyButton>
        <MyButton onClick={() => toggleView(false)}>
          <i className="fas fa-th" />
        </MyButton>
        <MyButton>
          <small
            style={{
              position: 'absolute',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#111',
              background: '#fff',
              borderRadius: '100%',
              width: '20px',
              height: '20px',
              fontSize: '16px',
              left: '30px',
              top: '15px',
            }}
          >
            12
          </small>
          <i className="fas fa-shopping-cart" />
        </MyButton>
        <MyButton>Log Out</MyButton>
        <MyButton>Log In</MyButton>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
    toggleView: bool => dispatch(toggleViewProducts(bool)),
})

const mapStateToProps = state => ({
  viewProducts: state.viewProducts,
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
)
