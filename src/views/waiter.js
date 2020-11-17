import React from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";

//import {waiterMenu} from '../components/waiterMenu';

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
     <button className='OptionMenu'> 
    <StyledButton> Desayuno </StyledButton> 

    <StyledButton> Almuerzo </StyledButton>
    </button> 
  )
}

export default Waiter;


