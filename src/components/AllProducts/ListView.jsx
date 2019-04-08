import React from 'react'
import { Link } from 'react-router-dom'

import {
  List,
  ListWrapper,
  MyImage,
  LeftRow,
  LeftColumn,
  RightColumn,
  MyButton,
  Price,
} from './styled'

const ListLayout = ({ unit }) => {
  return (
    <List>
      {unit.map(unit => (
        <ListWrapper key={unit.id}>
          <LeftRow>
            <Link to={`/product_id/:${unit.id}`}>
              <MyImage src={unit.image} alt="image product" />
            </Link>
            <LeftColumn>
              <h1>{unit.product_name}</h1>
              <h2>{unit.modal}</h2>
            </LeftColumn>
          </LeftRow>
          <RightColumn>
            <Price>{unit.price}</Price>
            <Link to={`/product_id/:${unit.id}`}>
              <MyButton>More</MyButton>
            </Link>
          </RightColumn>
        </ListWrapper>
      ))}
    </List>
  )
}

export default ListLayout
