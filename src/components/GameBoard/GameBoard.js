import React from 'react'

import './GameBoard.css'
import Card from '../Card/Card'

export default function GameBoard () {
  return (
    <div id='gameBoard' >
      <Card shapeID={0}></Card>
      <Card shapeID={1}></Card>
      <Card shapeID={2}></Card>
      <Card shapeID={3}></Card>
      <Card shapeID={4}></Card>
      <Card shapeID={5}></Card>
      <Card shapeID={6}></Card>
      <Card shapeID={7}></Card>
    </div>
  )
}
