import React from 'react'

const CartItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;

  return (
    <li className='my-2 flex justify-between'>
       
        <div className='my-4 '>
            <h2 className='text-2xl font-semibold'>{props.name}</h2>
            <div className='mt-4'>
                <span className='font-bold text-orange-700 text'>{price}</span>
                <span className='py-1 px-2 border rounded-sm ml-4'>x{props.amount}</span>
            </div>
        </div>
        <div className='self-end'>
            <button onClick={props.onRemove} className='py-1 px-4 text-2xl mr-2 border border-orange-700 bg-transparent rounded-md'>-</button>
            <button onClick={props.onAdd} className='py-1 px-4 text-2xl border border-orange-700 bg-transparent rounded-md'>+</button>
        </div>
    </li>
  )
}

export default CartItem