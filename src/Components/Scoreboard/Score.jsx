import React from 'react'

export default function Score({current}) {
    return (
        <div className="score">
            <p>SCORE</p>
            <p className="score-count">{current}</p>
        </div>
    )
}
