import React from 'react';
import foodTable from '../../assets/spencer-davis-vJsj-hgOEG0-unsplash.jpg'
import headDesign from './Header.module.css'
import HeaderCardButton from './HeaderCardButton';
const Header = (props) => {
  return (
    <>
    <header className='z-10 w-full flex justify-between h-20 items-center px-4 sm:p-8 text-white fixed top-0     left-0'>
        <h1 className='text-2xl font-bold'>EatUp</h1>
        <HeaderCardButton onOpen={props.onOpenModal}/>
    </header>
    <div className={`w-full ${headDesign.imgCont}`}><img className='h-full object-cover' src={foodTable} alt='A table full of delicious meals!'/></div>
    </>
  )
}

export default Header