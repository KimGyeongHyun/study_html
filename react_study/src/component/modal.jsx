
import '../style/modal.css'

const Modal = (props)=>{

    return (
        <div className="modal">
            <div className="inner-box">
                <i className="xi-close" onClick={()=>{props.onChangeMode()}}></i>
                <h2>Modal</h2>
                <p>hello</p>
            </div>
        </div>
    )
    
}

export {Modal}