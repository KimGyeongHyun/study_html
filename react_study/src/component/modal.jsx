import { useState } from "react";
import '../style/modal.css'

const Modal = (props)=>{

    let [flag, flagState] = useState(false);

    return (
        <div className="modal">
            <div className="inner-box">
                <i className="xi-close" onClick={()=>{flagState(true)}}></i>
                <h2>Modal</h2>
                <p>hello</p>
            </div>
        </div>
    )
    
}

export {Modal}