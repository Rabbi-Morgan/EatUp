import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react';
import { CartContext } from '../../store/cart-context';
// import buttonStyle from './HeaderCardButton.module.css'


const HeaderCardButton = props => {
  const cartCtx = useContext(CartContext);
  const numberOfItemsUpdate = cartCtx.items.reduce((accumulator, item) => accumulator+item.amount, 0)
  return (
    <button onClick={props.onOpen} className='py-4 text-sm sm:text-lg px-6 font-bold'>
        <span className='p-1 sm:p-2'><FontAwesomeIcon icon={faCartShopping}/></span>
        <span className='p-1 sm:p-2'>Your Cart</span>
        <span className='p-1 sm:p-2 px-2 sm:px-4 bg-red-800 text-white '>{numberOfItemsUpdate}</span>
    </button>
  )
}

export default HeaderCardButton
