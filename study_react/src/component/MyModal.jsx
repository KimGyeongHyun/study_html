
import { useState } from 'react'
import '../style/MyModal.css'

function ModalWindow(props) {
    return <div className="my-modal">
        <div className="inner-box">
            <i className="xi-close" onClick={()=>{props.onChangeMode();}}></i>
            <h2>Modal</h2>
            <p>hello</p>
        </div>
    </div>
}

function MyModal() {

    const [modal, setModal] = useState(false);
    let modal_comp = modal ? <ModalWindow onChangeMode={()=>{setModal(!modal);}}/> : null;

    return <>
        <button onClick={()=>{setModal(!modal)}} style={{margin: "20px", padding: "10px"}}>Modal button</button>
        {modal_comp}
    </>
    
}

export default MyModal;