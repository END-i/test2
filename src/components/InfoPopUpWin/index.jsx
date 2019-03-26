import React, { Fragment, useState, useEffect } from 'react'

import { Wrapper } from './styled'
import Message from './Message'

const InfoPopUpWin = () => {
  const [messages, setMessages] = useState([])
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(null)

  const timer = () => {
    
    const newTime = Number(new Date())
    if(count === 0){
      setTime(newTime)
      setCount(1000)
    }else{
      const item = newTime - time + count + 1000
      setCount(item)
    }
  }

  const mewInfoMessage = () => {
    const newMessage = {
      id: messages.length,
      headline: 'Info',
      color: 'info',
      text: 'This is info message, please read all!!!',
    }
    setMessages([newMessage, ...messages])
    timer()
  }
  const mewErorMessage = () => {
    const newMessage = {
      id: messages.length,
      headline: 'Error',
      color: 'error',
      text: 'Something went wrong',
    }
    setMessages([newMessage, ...messages])
    timer()
  }
  const mewProcessMessage = () => {
    const newMessage = {
      id: messages.length,
      headline: 'Info',
      color: 'process',
      text: 'Loading............',
    }
    setMessages([newMessage, ...messages])
    timer()
  }

  useEffect(()=>{
    count > 0 && setTimeout(() => {
      setMessages([])
      setCount(0)
    }, count);
  })
  console.log(messages, count)

  return (
    <Fragment>
      <button
        onClick={mewProcessMessage}
        style={{
          padding: '20px',
          fontSize: '25px',
          display: 'flex',
          margin: 'auto',
          marginBottom: '10px',
        }}
      >
        press
      </button>
      <button
        onClick={mewInfoMessage}
        style={{
          padding: '20px',
          fontSize: '25px',
          display: 'flex',
          margin: 'auto',
          marginBottom: '10px',
        }}
      >
        info
      </button>
      <button
        onClick={mewErorMessage}
        style={{
          padding: '20px',
          fontSize: '25px',
          display: 'flex',
          margin: 'auto',
          marginBottom: '10px',
        }}
      >
        error
      </button>
      <Wrapper>
        {messages.map((item) => (
          <Message key={item.id} item={item}/>
        ))}
      </Wrapper>
    </Fragment>
  )
}

export default InfoPopUpWin
