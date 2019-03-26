import React from 'react'
import {Link} from 'react-router-dom'

import {
  List,
  ListWrapper,
  MyImage,
  LeftRow,
  LeftColumn,
  RightColumn,
  MyButton,
} from './styled'

const ListLayout = ({ unit }) => {
  return (
    <List>
      {unit.map(unit => (
        <ListWrapper key={unit.id}>
          <LeftRow>
            <MyImage src={unit.image} alt="image product" />
            <LeftColumn>
              <h1>{unit.product_name}</h1>
              <h2>{unit.modal}</h2>
            </LeftColumn>
          </LeftRow>
          <RightColumn>
            <h2>{unit.price}</h2>
            <Link to={`/product_id/:${unit.id}`} style={{ margin: 'auto 0' }}>
              <MyButton>More</MyButton>
            </Link>
          </RightColumn>
        </ListWrapper>
      ))}
    </List>
  )
}

export default ListLayout
