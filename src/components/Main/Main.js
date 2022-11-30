import React, { useState, useEffect } from 'react'

import './Main.css'

import Scores from '../Scores/Scores'
import GameBoard from '../GameBoard/GameBoard'

export default function Main () {
  // eslint-disable-next-line no-unused-vars
  const [score, setScore] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const [bestScore, setBestScore] = useState(0)

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score)
    }
  }, [score, bestScore])

  /**
   * The funciton responsible for handling score changes given by GameBoard,
   * @param {Number} change code for change, 1 for correct click, 0 for incorrect click
   * @modifies Score (state)
   */
  const handleScoreChange = (change) => {
    if (change === 1) {
      setScore(score + 1)
    } else if (change === 0) {
      setScore(0)
    }
  }

  return (
    <main>
      <Scores score={ score } bestScore={ bestScore }></Scores>
      <GameBoard handleScoreChange={handleScoreChange}></GameBoard>
    </main>
  )
}
