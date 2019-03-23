import React, { Component } from 'react'

import { firestore } from '../firebase'

class Products extends Component {
  GoGoGo = async () => {
    console.log('click button')

    // const data = await fetch('https://api.myjson.com/bins/v3ct2')
    //   .then(data => {
    //     return data.json()
    //   })
    //   .then(response => {
    //     return response
    //   })
    // console.log(data)
    // const docRef = firestore.collection('products')

    // data.forEach(function(doc) {
    //   console.log(doc)
    //   docRef.add(doc)
    // })
    const docRef = await firestore.collection('products').get()

    const data = docRef.docs.map(item => {
      return { ...item.data() }
    })
    console.log(data)
    // console.log(docRef)
    // docRef
    //   .add(data)
    //   .then(function(docRef) {
    //     console.log('Document written with ID: ', docRef.id)
    //   })
    //   .catch(function(error) {
    //     console.error('Error adding document: ', error)
    //   })

    // docRef
    //   .get()
    //   .then(function(doc) {
    //     if (doc.exists) {
    //       console.log('Document data:', doc.data())
    //     } else {
    //       console.log('No such document!')
    //     }
    //   })
    //   .catch(function(error) {
    //     console.log('Error getting document:', error)
    //   })
  }

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
