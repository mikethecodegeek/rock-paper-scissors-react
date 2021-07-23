import React from 'react'

export default function Rulesbtn({toggleModal}) {
    return (
        <div onClick={()=>toggleModal()} id="rules" className="rules-btn">
            <p>RULES</p>
        </div>
    )
}
