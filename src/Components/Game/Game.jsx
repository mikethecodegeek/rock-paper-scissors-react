import React,{useState, useEffect} from 'react'
import Scoreboard from '../Scoreboard/Scoreboard'
import Gamepiece from './Gamepiece'
import Modal from '../Modal/Modal'
import Rulesbtn from '../Rules/Rulesbtn'

export default function Game() {
    const [playing,setPlaying] = useState(false);
    const [result, setResult] = useState(null);
    const [compMove, setCompMove] = useState("");
    const [player, setPlayer] = useState("");
    const [currentScore,setCurrentScore] = useState(0);
    const [modalActive, setModalActive] = useState(false);

    const reset = () => {
        setPlaying(false);
        setResult(null);
        setCompMove("");
        setPlayer("")
    }

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
   

    const toggleModal = () => {
        modalActive == true ? setModalActive(false) : setModalActive(true);
    }

    const playGame = choice => {
        setPlaying(true)
        const compChoices = [];
        for (let a in score[choice]) {
            compChoices.push(a)
        };
        const compMove1 = compChoices[Math.floor(Math.random() * 2)];
        setPlayer(choice);
        setCompMove(compMove1);
        let p = player;
        let c = compMove;
        setResult(score[choice][compMove1]);
        let s = result;
        if (score[choice][compMove1] == "win") {
            setCurrentScore(currentScore+1);
        }
        // debugger;
        
        
    }

    return (
        <>
        {modalActive &&
        <Modal toggleModal={()=>toggleModal()} />
        }
        <Scoreboard currentScore={currentScore} />
        <div className="game-board">
            {player == "" &&
            <div className="pre-game">
                <Gamepiece clickMe={()=>playGame("paper")} id={pieces["paper"].id} image={pieces["paper"].image} color={pieces["paper"].color}/>
                <Gamepiece clickMe={()=>playGame("scissors")} id={pieces["scissors"].id} image={pieces["scissors"].image} color={pieces["scissors"].color}/>
                <Gamepiece clickMe={()=>playGame("rock")} id={pieces["rock"].id} image={pieces["rock"].image} color={pieces["rock"].color}/>
               
            </div>
            }
            
            {player !== ""  &&
            <div className="game">
                <div className="player">
                    {/* <p>{pieces[player].id}</p> */}
                    <p>YOU PICKED</p>
                    <Gamepiece clickMe={()=> null} id={pieces[player].id} image={pieces[player].image} color={pieces[player].color}/>
                </div>
                <div>
                    <p style={{color:"white",fontSize:"40px"}}>{result}</p>
                    <button onClick={()=>reset()}>PLAY AGAIN</button>
                </div>
                    
                <div className="computer">
                    <p>THE HOUSE PICKED</p>
                    <Gamepiece clickMe={()=>null} id={pieces[compMove].id} image={pieces[compMove].image} color={pieces[compMove].color}/>
                </div>
            </div>
            }

            <Rulesbtn toggleModal={()=>toggleModal()} />
            {/* } */}
        </div>
        </>
    )
}
