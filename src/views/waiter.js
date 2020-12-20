import React, {useState} from 'react';
//import Button from "@material-ui/core/Button";

//Components
import Order from '../components/Order/Order';
import MenuItems from '../components/menuItems/Items.jsx';
import NavBar from "../components/Menu/Menu";

const Waiter = () => {

  const [ prueba, setPrueba] = useState("ejemplo");

  

  return (
    <div className="waiter-view">

<p>{prueba}</p>


      <header className="nav-bar">
         <NavBar></NavBar>
        </header>
      
      <div className='OptionMenu'>
      <MenuItems prueba = {prueba}  actualizarEstado = {setPrueba}/>
      </div>

      <div className="order">
      <Order prueba2 = {prueba} ></Order> </div>

    </div>

  )
}

export default Waiter;
