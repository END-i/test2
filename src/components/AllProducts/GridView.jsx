import React from 'react'

import { Grid } from './styled'

const GridLayout = ({ unit }) => {
  return (
    <Grid>
      {unit.map(unit => (
        <li key={unit.id}>{unit.product_name}</li>
      ))}
    </Grid>
  )
}

export default GridLayout
