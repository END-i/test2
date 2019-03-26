import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Wrapper } from './styled'

import { firestore } from '../../firebase'

const Description = ({ products }) => {
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [messages, setMessages] = useState([])

  const id = window.location.pathname.replace(/\D+/g, '')
  const index = products && products.map(e => e.id).indexOf(+id)
  const unit = products && products[index]

  useEffect(() => {
    // getData()
  })
  const getData = async () => {
    console.log('click get data')
    const docRef = await firestore.collection('messages').get()
    const data = await docRef.docs.map(item => {
      return { ...item.data() }
    })

    setMessages(data)

    const docRef1 = await firestore.collection('messages').doc('1').get()
    console.log(docRef1.data())
    const docRef2 = await firestore.collection('messages/1/comments').get()
    const data2 = await docRef2.docs.map(item => {
      return { ...item.data() }
    })

    console.log(data2)
    return data
  }

  const sendData = async () => {
    console.log('click send data')

    const data = await getData()
    const id = String(data.length)
    const mess = {
      id,
      text: message,
      author: name,
    }
    // const docRef = await firestore
    //   .collection('messages')
    //   .doc('1')
    //   .set(mess)
    const docRef = await firestore
    .collection('messages')
    .doc('1')
    .collection('comments')
    .doc('0')
    .set(mess)

    getData()
  }

  if (products && !unit) window.location.pathname = '/not_found'

  if (!products) return null

  return (
    <Fragment>
      <Wrapper>
        <img src={unit.image} alt="car" />
        <ul>
          <li>{unit.product_name}</li>
          <li>{unit.price}</li>
          <li>{unit.modal}</li>
        </ul>
        __________________________________________________
        <br />
      </Wrapper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '300px',
          margin: 'auto',
        }}
      >
        <input type="file" style={{ padding: '20px', fontSize: '20px' }} />
        <input
          type="text"
          placeholder="name"
          style={{ padding: '20px', fontSize: '20px' }}
          onKeyUp={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="message"
          style={{ padding: '20px', fontSize: '20px' }}
          onKeyUp={e => setMessage(e.target.value)}
        />
        <button
          style={{ padding: '20px', fontSize: '20px' }}
          onClick={sendData}
        >
          SNED
        </button>
        <button style={{ padding: '20px', fontSize: '20px' }} onClick={getData}>
          GTE
        </button>
        <ul>
          {messages.length > 0 ? (
            messages.map(item => (
              <li key={item.id}>
                <p>{`Author: #${item.id}${item.author}`}</p>
                <p>{`Text:  ${item.text}`}</p>
                <ul>
                  comments:
                  {item.comments ? item.comments.map((item)=>(
                    <li>item</li>
                  )) : 'none'}
                </ul>
                <p>___________________________</p>
              </li>
            ))
          ) : (
            <h1>dont have messages</h1>
          )}
        </ul>
      </div>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  products: state.products,
})

export default withRouter(connect(mapStateToProps)(Description))
