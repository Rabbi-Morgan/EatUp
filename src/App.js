import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CarrProvider from './store/CarrProvider';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = ()=> {
    setIsOpen(true);
  }
  const closeModal = ()=> {
    setIsOpen(false);
  }
  return (
    <CarrProvider>
    { isOpen && <Cart onCloseModal={closeModal}/>}
      <Header onOpenModal={openModal}/>
      <main>
        <Meals/>
      </main>
    </CarrProvider>
  );
}

export default App;
