import React,{useState} from 'react'

import Gamepiece from './Gamepiece'

export default function Game() {
    const [playing,setPlaying] = useState(false);
    const [result, setResult] = useState(null);
    const [compMove, setCompMove] = useState(null);

    const score = {
        rock: {
            paper: "lose",
            scissors: "win"
        },
        paper: {
            rock: "win",
            scissors: "lose"
        },
        scissors: {
            rock: "lose",
            paper: "win"
        }
    }

    const pieces = {
        rock: {
            id: "rock",
            image: "./icon-rock.svg",
            color: "linear-gradient(hsl(349, 71%, 52%),hsl(349, 70%, 56%))"
        },
        scissors: {
            id: "scissors",
            image: "./icon-scissors.svg",
            color: "linear-gradient(hsl(39, 89%, 49%),hsl(40, 84%, 53%))"
        },
        paper: {
            id: "paper",
            image: "./icon-paper.svg",
            color: "linear-gradient(hsl(230, 89%, 62%),hsl(230, 89%, 65%))"
        }
    }
    const rock=pieces["rock"]


    const playGame = choice => {
        // setPlaying(true)
        const compChoices = [];
        for (let a in score[choice]) {
            compChoices.push(a)
        };
        const compMove = Math.floor(Math.random() * 2);
        setCompMove(compMove);
        
    }

    return (
        <div className="game-board">
            {!playing &&
            <div className="pre-game">
                <Gamepiece clickMe={()=>playGame("paper")} id="paper" image='./icon-paper.svg' color="linear-gradient(hsl(230, 89%, 62%),hsl(230, 89%, 65%))"/>
                <Gamepiece clickMe={()=>playGame("scissors")} id="scissors" image='./icon-scissors.svg' color="linear-gradient(hsl(39, 89%, 49%),hsl(40, 84%, 53%)"/>
                <Gamepiece clickMe={()=>playGame("rock")} id={rock.id} image={rock.image} color={rock.color}/>
            </div>
            }
            {playing &&
            <div className="game">
                <div className="player">
                    <Gamepiece id="paper" image='./icon-paper.svg' color="linear-gradient(hsl(230, 89%, 62%),hsl(230, 89%, 65%))"/>
                </div>
                    
                <div className="computer">
                    <Gamepiece id="scissors" image='./icon-scissors.svg' color="linear-gradient(hsl(39, 89%, 49%),hsl(40, 84%, 53%)"/>
                </div>
            </div>
            }
        </div>
    )
}
