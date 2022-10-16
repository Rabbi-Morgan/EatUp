import React, { useState } from 'react'
import Input from '../../UI/Input'
import { useRef } from 'react'

const MealItemForm = props => {
  const inputValue = useRef();
  const [isValidInput, setIsValidInput] = useState(true)

  const submitHandler = e => {
    e.preventDefault();

    const enteredAmn = inputValue.current.value;
    const enteredAmnNo = +enteredAmn;

    if(enteredAmn.trim().length === 0 || enteredAmnNo < 1 || enteredAmn > 10){
      setIsValidInput(false)
      return;
    }else {
      setIsValidInput(true)
    }

      props.onAddToCart(enteredAmnNo)
  }
  return (
    <form onSubmit={submitHandler}>
        <Input ref={inputValue} label="Amount" input={{
            id: "amount",
            type: "number", 
            min: "1",
            max: '10',
            step: '1',
            defaultValue: '1',
            className: 'ml-2 border w-14 py-1 px-2 text-center'
        }}/>
        <div>
            <button type="submit" className='w-full px-4 py-2 text-white bg-orange-700'> + Add </button>
        </div>
        {!isValidInput&&<p>not valid boss</p>}
    </form>
  )
}

export default MealItemForm