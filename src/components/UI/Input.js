import React from 'react';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className='text-xs sm:text-base mb-2'>
        <label className='font-bold' htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input}/>
    </div>
  )
});

export default Input