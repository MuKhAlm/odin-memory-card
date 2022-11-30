/* eslint-disable react/prop-types */
import React from 'react'

import './Card.css'
import ellipse from '../../assets/ellipse.svg'
import square from '../../assets/square.svg'
import triangle from '../../assets/triangle.svg'
import rectangle from '../../assets/rectangle.svg'
import star from '../../assets/star.svg'
import rhombus from '../../assets/rhombus.svg'
import octagon from '../../assets/octagon.svg'
import heptagon from '../../assets/heptagon.svg'

export default function Card (props) {
  const shapes = [ellipse, square, triangle, rectangle, star, rhombus, octagon, heptagon]
  return (
    <div id='card' onClick={e => { props.onClick(props.shapeID) }}>
      <img src={shapes[props.shapeID]} alt='shape'/>
    </div>
  )
}
