import React, { Fragment, Component } from 'react'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Products from './Products'
import Details from './Details'
import NotFound from './NotFound'
import AddNewProduct from './AddNewProduct'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AuthModal from '../components/AuthModal'
import InfoPopUpWin from '../components/InfoPopUpWin'

import { getProducts } from '../store/products/actions'
import { setUser } from '../store/authorizationStatus/actions'

import { firestore, auth } from '../firebase'

class Routes extends Component {
  state = { loading: true, error: false }

  componentDidMount = async () => {
    this.datafromFirestore()
    this.checkUser()
  }

  datafromFirestore = async () => {
    const docRef = await firestore.collection('products').get()
    const data = await docRef.docs.map(item => {
      return { ...item.data() }
    })
    this.animationLoading(data)
  }

  animationLoading = data => {
    setTimeout(() => {
      data
        ? this.setState({ loading: false }, () => {
            this.props.getProducts(data)
          })
        : this.setState({ loading: false, error: true })
    }, 500)
  }

  checkUser = () => {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.props.setUser(user)
      } 
    })
  }
  render() {
    const { loading, error } = this.state
    return (
      <Fragment>
        <Header />
        <div style={{ minHeight: 'calc(100vh - 144px)' }}>
          <Switch>
            <Route exact path="/" component={Products} />
            <Route strict path="/product_id/:id" component={Details} />
            <Route exact path="/add_new_product" component={AddNewProduct} />
            <Route exact path="/error" component={Error} />
            <Route exact strict path="/not_found" component={NotFound} />
            <Redirect from="*" to="/not_found" />>
          </Switch>
        </div>
        <Footer />
        <Loading loading={loading} />
        <Error error={error} />
        <AuthModal />
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getProducts: data => dispatch(getProducts(data)),
  setUser: user => dispatch(setUser(user)),
})

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Routes)
)
