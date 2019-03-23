import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import Products from './Products'
import Details from './Details'
import NotFound from './NotFound'
import AddNewProduct from './AddNewProduct'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Routes = () => {
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
    </Fragment>
  )
}

export default Routes
