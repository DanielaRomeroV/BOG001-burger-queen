import React from 'react';
import styled from 'styled-components';

import logo from '../img/logo2.png';
import Order from '../components/Order';
import MenuItems from '../components/Items'

const StyledButton = styled.button`  //constante para style component 
                                     // se accede a los estilos a traves de la etiqueta descrita en el template.
font-family: system-ui;
        color: orange;
        font-size: 30px;
        text-shadow: 3px 2px 0 black;
        line-height: 10vh;
        
&:hover{
  background-color: #eeeae5;
}
`

const Waiter = () => {

  return (
    <div className="waiter-view">

      <header className="nav-bar">
        <img src={logo} alt="logo" /></header>
      <Order></Order>

      <button className='OptionMenu'>
        <StyledButton> Desayuno </StyledButton>

        <StyledButton> Almuerzo </StyledButton>
      </button>
      <MenuItems />

    </div>


  )
}

export default Waiter;
