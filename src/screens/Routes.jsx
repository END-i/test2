import React, { Fragment, Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Products from './Products'
import Details from './Details'
import NotFound from './NotFound'
import AddNewProduct from './AddNewProduct'
import Loading from '../components/Loading'
import Error from '../components/Error'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { getProducts } from '../store/products/actions'

import { firestore } from '../firebase'

class Routes extends Component {
  state = { loading: true, error: false }

  componentDidMount = async () => {
    const docRef = await firestore.collection('products').get()
    const data = await docRef.docs.map(item => {
      return { ...item.data() }
    })
    setTimeout(() => {
      data
        ? this.setState({ loading: false }, () => {
            this.props.getProducts(data)
          })
        : this.setState({ error: true })
      console.log(data)
    }, 500)
  }

  render() {
    const { loading, error } = this.state
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/:id" component={Details} />
          <Route path="/add_new_product" component={AddNewProduct} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
        <Error error={error} />
        <Loading loading={loading} />
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getProducts: data => dispatch(getProducts(data)),
})

export default connect(
  null,
  mapDispatchToProps
)(Routes)
