import React from 'react'

export default function Gamepiece({image,color,id,clickMe}) {
    return (
        <div onClick={()=>clickMe()} id={id} className="piece-container" style={{background:color, width:"150px", height:"150px", borderRadius:"150px", display:"grid",placeContent:"center"}}>
            <div className="game-piece">
                <img src={image} alt="" />
            </div>
        </div>
    )
}
