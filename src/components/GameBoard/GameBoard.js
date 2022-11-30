import React, { useState } from 'react'

import './GameBoard.css'
import Card from '../Card/Card'
import generateRandomIntegers from '../../utils/utils'

export default function GameBoard () {
  // eslint-disable-next-line no-unused-vars
  const [shapes, setShapes] = useState(generateRandomIntegers(8))
  // eslint-disable-next-line no-unused-vars
  const [clickedShapes, setClickedShapes] = useState([])

  /**
   * Handles shape click events,
   *
   * This function is responsible for trigerring state and score updates based on clicked shape
   * @param {Number} shapeID the ID of the clicked shape
   * @modifies shapes (state), clickedShapes (state)
   */
  const handleShapeClick = (shapeID) => {
    if (!clickedShapes.includes(shapeID)) {
      // Add shape to clicked shapes
      setClickedShapes([...clickedShapes, shapeID])

      // Rearrange shapes
      setShapes(generateRandomIntegers(8))

      // TODO: Update score (and best score)
    } else {
      // Reset clicked shapes
      setClickedShapes([])

      // Rearrange shapes
      setShapes(generateRandomIntegers(8))

      // TODO: Reset score
    }
  }

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
