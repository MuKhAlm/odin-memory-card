import React, { useState } from 'react'

import './GameBoard.css'
import Card from '../Card/Card'
import generateRandomIntegers from '../../utils/utils'

export default function GameBoard () {
  const handleShapeClick = (shapeID) => {
    console.log(shapeID)
  }

  // eslint-disable-next-line no-unused-vars
  const [shapes, setShapes] = useState(generateRandomIntegers(8))
  return (
    <div id='gameBoard' >
      <Card shapeID={shapes[0]} onClick={ handleShapeClick }></Card>
      <Card shapeID={shapes[1]} onClick={ handleShapeClick }></Card>
      <Card shapeID={shapes[2]} onClick={ handleShapeClick }></Card>
      <Card shapeID={shapes[3]} onClick={ handleShapeClick }></Card>
      <Card shapeID={shapes[4]} onClick={ handleShapeClick }></Card>
      <Card shapeID={shapes[5]} onClick={ handleShapeClick }></Card>
      <Card shapeID={shapes[6]} onClick={ handleShapeClick }></Card>
      <Card shapeID={shapes[7]} onClick={ handleShapeClick }></Card>
    </div>
  )
}
