import React from 'react'

export default function Gamepiece({image,color,id}) {
    return (
        <div id={id} style={{background:color, width:"150px", height:"150px", borderRadius:"150px", display:"grid",placeContent:"center"}}>
            <div className="game-piece">
                <img src={image} alt="" />
            </div>
        </div>
    )
}
