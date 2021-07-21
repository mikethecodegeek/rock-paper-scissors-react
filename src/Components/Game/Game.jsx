import React from 'react'
import Gamepiece from './Gamepiece'

export default function Game() {
    return (
        <div className="game-board">
            <Gamepiece id="paper" image='./icon-paper.svg' color="linear-gradient(hsl(230, 89%, 62%),hsl(230, 89%, 65%))"/>
            <Gamepiece id="scissors" image='./icon-scissors.svg' color="linear-gradient(hsl(39, 89%, 49%),hsl(40, 84%, 53%)"/>
            <Gamepiece id="rock" image='./icon-rock.svg' color="linear-gradient(hsl(349, 71%, 52%),hsl(349, 70%, 56%))"/>
        </div>
    )
}
