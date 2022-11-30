import React, { useState } from 'react'

import './Main.css'

import Scores from '../Scores/Scores'

export default function Main () {
  // eslint-disable-next-line no-unused-vars
  const [score, setScore] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const [bestScore, setBestScore] = useState(0)

  return (
    <main>
      <Scores score={ score } bestScore={ bestScore }></Scores>
    </main>
  )
}
