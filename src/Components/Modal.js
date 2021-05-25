

function Modal({modalurl,setModalUrl}) {
    const modalClickHandler = (e) =>{
        if(e.target.classList.contains('modal')){
            setModalUrl(null)
        }
  
    }
    return (
        <div className="modal" onClick={modalClickHandler}>
        
            <img src={modalurl} alt='enlarged-img' />
      
        </div>
    )
}

export default Modal
