import React from 'react'
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import { CartContext } from '../../../store/cart-context';

const MealItem = props => {
  const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price
      })
    }
  return (
    <li className='flex justify-between sm:text-xl p-2 border-b border-b-gray-300'>
        <div>
        <h1 className='font-bold'>{props.name}</h1>
        <div className='text-xs sm:text-base italic'>{props.description}</div>
        <div className='text-orange-700 text-lg sm:text-2xl font-bold '>{price}</div>
        </div>
        <div>
            <MealItemForm onAddToCart={addToCartHandler}/>
        </div>
    </li>
  )
}

export default MealItem