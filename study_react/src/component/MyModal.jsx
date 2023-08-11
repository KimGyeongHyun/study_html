
import { useState } from 'react'
import styles from "./MyModal.module.css"
import {GrClose} from 'react-icons/gr';

function ModalWindow(props) {
    return <div className={styles.modalWindow}>
        <div className={styles.innerBox}>
            <GrClose className={styles.iDeco} size={25} onClick={()=>{props.onChangeMode();}}></GrClose>
            <h2 className={styles.h2Deco}>Modal</h2>
            <p className={styles.pDeco}>hello</p>
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