import React, { useEffect, useState } from 'react'

import { MessageWrapper } from './styled'

const Message = ({ item }) => {
  const [view, setView] = useState('block')

  useEffect(() => {
    if (view === 'block') {
      setTimeout(() => {
        setView('none')
      }, 1000)
    }
  })

  return (
    <MessageWrapper display={view} color={item.color}>
        <span>X</span>
      <p>{item.headline}</p>
      <p>{item.text}</p>
    </MessageWrapper>
  )
}

export default Message
