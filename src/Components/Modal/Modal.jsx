import React from 'react'

export default function Modal({toggleModal}) {

    const handleClick = e => {
        if (e.target.className == "overlay") {
            toggleModal();
        }
    }

    return (
        <div onClick={(e)=>handleClick(e)} className="overlay">
            <div className="card">
                <div className="upper">
                    <h2>RULES</h2>
                    <p onClick={()=>toggleModal()}>X</p>
                </div>
              <img src="./image-rules.svg" alt="" />
            </div>
        </div>
    )
}
