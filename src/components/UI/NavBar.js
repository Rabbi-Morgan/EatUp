import React from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <>
    <header className='w-full bg-red-500 p-6'>
        <div className='w-3/4 md:w-11/12 mx-auto flex justify-between text-white'>
        <div className='logo'><a href='#' rel>EatUp</a></div>
        <div className='cart_counter_cont'>
            <button className=''>🛒 Your Cart <span className='counter'>1</span></button>
        </div>
        </div>
    </header>
    </>
  )
}

export default NavBar