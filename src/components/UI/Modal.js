import React from 'react';
import ReactDOM from 'react-dom'



const Backdrop = props => {
    return <div onClick={props.onClick} className='w-full h-full z-40 bg-black/80 fixed top-0 left-0'/>
}

const ModalOverlay = props => {
    return <div className='rounded-md z-50 fixed top-1/4  left-1/2 -translate-x-1/2 w-11/12 md:w-3/5 lg:w-2/5 bg-white  p-4 '>
        <div>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlay');
const Modal = props => {
  return (
    <>
    {ReactDOM.createPortal(<Backdrop onClick={props.onClose}/>, portalElement)}
    {ReactDOM.createPortal(
        <ModalOverlay>
            {props.children}
        </ModalOverlay>, portalElement
    )}
    </>
  )
}

export default Modal