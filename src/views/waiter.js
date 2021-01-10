import React, { useState } from 'react';
//import Button from "@material-ui/core/Button";

//Components
import Order from '../components/Order/Order';
import MenuItems from '../components/menuItems/Items.js';
import NavBar from "../components/Menu/Menu";

export default function Waiter() {

  const [order, setOrder] = useState([]);
  const [clientName, setClientName] = useState('');
  const [total, setTotal] = useState(0);
  console.log('orden: '+order);
  console.log('name: '+clientName);

  let clientOrder = {
    nameClient: clientName,
    products: order,
    totalValue: total,
    done: false,
    delivered: false
  }

  return (
    <div className="waiter-view">

      <header className="nav-bar">
        <NavBar />
      </header>

      <div className='OptionMenu'>
        <MenuItems
          order={order}
          setOrder={setOrder}
        />
      </div>

      <div className="order">
        <Order
          order={order}
          setOrder={setOrder}
          setClientName={setClientName}
          total={total}
          setTotal={setTotal}
        ></Order> </div>
      <button  className="crear-orden"
        value="dani"
        onClick={(e) => alert(e.target.value)}>
        CREAR ORDEN
      </button>
    </div>

  )
};

