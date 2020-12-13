import React from 'react';

//Components
import Order from '../components/Order/Order';
import MenuItems from '../components/menuItems/Items.jsx';
import NavBar from "../components/Menu/Menu";

const Waiter = () => {

  return (
    <div className="waiter-view">

      <header className="nav-bar">
         <NavBar></NavBar>
        </header>

   
      
      <div className='OptionMenu'>
      <MenuItems/>
      </div>

      <div className="order">
      <Order></Order> </div>

    </div>




  )
}

export default Waiter;
