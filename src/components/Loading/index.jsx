import React, { useEffect, useState } from 'react'

import { Wrapper, Image } from './styled'

const Loading = ({ loading }) => {
  const [display, setDisplay] = useState('flex')

  const visibility = loading ? 1 : 0

  useEffect(() => {
    if (!loading) setTimeout(() => setDisplay('none'), 500)
  })

  return (
    <Wrapper display={display} visibility={visibility}>
      <Image src={require('./477.gif')} alt="spinner" />
    </Wrapper>
  )
}

export default Loading
