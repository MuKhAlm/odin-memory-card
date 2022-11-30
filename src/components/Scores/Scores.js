/* eslint-disable react/prop-types */
import React from 'react'
import './Scores.css'

export default function Scores (props) {
  return (
    <div id='scores'>
      <p id='score'>Score: { props.score }</p>
      <p id='bestScore'>Best Score: { props.bestScore }</p>
    </div>
  )
}
