import React from 'react';

//Components
import Order from '../components/Order/Order';
import MenuItems from '../components/menuItems/Items.jsx';
import NavBar from "../components/Menu/Menu";
import Buttons from "../components/Button/Buttons.jsx"

  



const Waiter = () => {

  return (
    <div className="waiter-view">

      <header className="nav-bar">
         <NavBar></NavBar>
        </header>

      <Order></Order>
      
      <div className='OptionMenu'>
      <Buttons> Desayuno </Buttons>  
      <MenuItems 
      //  key={id}
      //  name={name}
      //  price={price}
      //  icon={icon}
      // orderId={id}
      />
      </div>

     


      
     
   

    </div>


  )
}

export default Waiter;
