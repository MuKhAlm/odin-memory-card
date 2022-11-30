/* eslint-disable react/prop-types */
import React from 'react'
import './Scores.css'

export default function Scores (props) {
  return (
    <div id='scores'>
      <text>Score: { props.score }</text>
      <text>Best Score: { props.bestScore }</text>
    </div>
  )
}
