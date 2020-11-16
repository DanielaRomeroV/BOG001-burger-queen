import React from 'react';

import logo from '../img/logo2.png';
import Order from '../components/Order'

const Waiter = () => { 

    return (
      <div className="waiter-view">      
         
         <header className="nav-bar">
          <img src={logo} alt="logo"/></header>
          <Order></Order>
          </div>
        
          
    )
}

export default Waiter;
