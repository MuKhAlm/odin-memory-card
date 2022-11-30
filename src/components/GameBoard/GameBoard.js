import React, { useState } from 'react'

import './GameBoard.css'
import Card from '../Card/Card'
import generateRandomIntegers from '../../utils/utils'

export default function GameBoard () {
  // eslint-disable-next-line no-unused-vars
  const [shapes, setShapes] = useState(generateRandomIntegers(8))
  return (
    <div id='gameBoard' >
      <Card shapeID={shapes[0]}></Card>
      <Card shapeID={shapes[1]}></Card>
      <Card shapeID={shapes[2]}></Card>
      <Card shapeID={shapes[3]}></Card>
      <Card shapeID={shapes[4]}></Card>
      <Card shapeID={shapes[5]}></Card>
      <Card shapeID={shapes[6]}></Card>
      <Card shapeID={shapes[7]}></Card>
    </div>
  )
}
