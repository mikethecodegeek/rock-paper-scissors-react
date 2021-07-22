import React from 'react'
import Score from './Score'

export default function Scoreboard({currentScore}) {
    return (
        <div className="scoreboard">
            <h1>ROCK PAPER SCISSORS</h1>
            <Score current = {currentScore} />
        </div>
    )
}
