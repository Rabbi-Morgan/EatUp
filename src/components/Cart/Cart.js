import React, { useContext } from 'react'
import { CartContext } from '../../store/cart-context'
import Modal from '../UI/Modal'
import CartItem from './CartItem';

const Cart = props => {
  const cartctx = useContext(CartContext);

  const totalAmt = `$${cartctx.totalAmount.toFixed(2)}`;

  const isItem = cartctx.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartctx.removeItem(id)
  }
  const cartItemAddHandler = item => {
    cartctx.addItem(item); 
  }
  const cartItems = <ul className='max-h-80 overflow-y-auto scroll-smooth'>{
    cartctx.items.map(item => <CartItem onAdd={cartItemAddHandler.bind(null, item)} onRemove={cartItemRemoveHandler.bind(null, item.id)} amount={item.amount} name={item.name} price={item.price} key={item.id}/>)} 
  </ul>

  return (
    <Modal onClose={props.onCloseModal}>
      {cartItems}
      <div className='flex justify-between text-xl font-bold md:text-2xl '>
        <span>Total Amount</span>
        <span>{totalAmt}</span>
      </div>
      <div className='text-right my-2'>
        <button onClick={props.onCloseModal} className='mr-3 py-2 px-6 hover:bg-orange-700 hover:text-white transition-all duration-100 border-orange-700 border bg-transparent rounded-3xl'>Close</button>
        {isItem && <button className='py-2 px-6 hover:bg-transparent hover:text-black hover:border-orange-700 hover:border transition-all duration-100 bg-orange-700 rounded-3xl text-white border'>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart