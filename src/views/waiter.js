import React, {useState , useEffect} from 'react';
import styled from 'styled-components';
import logo from '../img/logo2.png';
import Order from '../components/Order';
import {db} from '../firebase';
import BttnAgregar from '../components/BttnAgregar'


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
//useEffect detecta los eventos esa es la magia de react by: bolo

const Waiter = ({ }) => {
 // const [click, setClick] = useState( false );  
  const [show, setShow] = useState([]);  
  const [tipoMenu , setTipoMenu] = useState('breakfast');


   useEffect(() => {
    const traermenu = async () => { 
      await db.collection(tipoMenu)
      .onSnapshot((querySnapshot) => {
        const elementos = []
        querySnapshot.forEach(element => {
        elementos.push({id:element.id , ...element.data()})
        });
        console.log(elementos)
        setShow(elementos)
      })
    }
traermenu()
  
  }, [tipoMenu] )
  
    return (
    <div className="waiter-view">

      <header className="nav-bar" >
        <img src={logo} alt="logo" /></header>
      <Order></Order>

      <button className='OptionMenu'>
        <StyledButton 
        onClick= { ()=> setTipoMenu('breakfast')}> Desayuno </StyledButton>

      <StyledButton
     onClick= {()=> setTipoMenu ('Lunch') }>
           Almuerzo </StyledButton>
      </button>
      <div>
      <span>
          
          <div className="redd" >
      
            {show.map((item)  => {
              return <div>{item.name} {item.price}
            <BttnAgregar item = {item} />
             </div>   } 
            )  }
          </div>
  
        </span>  
        </div>
    </div>


  )
}

export default Waiter;
