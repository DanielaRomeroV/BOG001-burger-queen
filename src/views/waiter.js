import React, {useState , useEffect , useContext} from 'react';
import styled from 'styled-components';
import logo from '../img/logo2.png';
import Order from '../components/Order';
import {db} from '../firebase';
import BttnAgregar from '../components/BttnAgregar'
import { AppContext } from '../AppContext';

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
  const {addProduct} = useContext(AppContext)
  const [show, setShow] = useState([]);  
  const [tipoMenu , setTipoMenu] = useState('breakfast');

  const handleClick = (name,price) => {
    addProduct({  //array q se comparte
      //name: `${burger.name}  ${meat}  ${extras.join(' ')}`,
      name:name,
      quantity: 1,
      price:price,
      //price: extras.length > 0 ? burger.price + extras.length : burger.price,
      id: Math.floor(Math.random() * 100),
    });
    console.log(addProduct)
  };

   useEffect  ( 
      () => {
      const traermenu = async () => { 
        await db.collection(tipoMenu)
       .onSnapshot((querySnapshot) => {
        const coleccionItems = []
        querySnapshot.forEach(element => {   //iteramos sobre querySnap para representar los coleccionItems del array, cada array es resultado de collection
        coleccionItems.push( {id:element.id , ...element.data()} )
        });
       // console.log(coleccionItems)
        setShow(coleccionItems)  //pinta los datos dependiedo de que haya dentro
      })
    } 
  traermenu() //activa la funcion, la ejecuta
  
  }, [tipoMenu] )
  
    return (
    <div className="waiter-view">
      <header className="nav-bar" >
        <img src={logo} alt="logo" /></header>
      <Order> </Order>

      <button className='OptionMenu'>
        <StyledButton 
         onClick= { ()=> setTipoMenu ('breakfast')}> Desayuno </StyledButton>
        <StyledButton
         onClick= {()=> setTipoMenu ('Lunch') }> Almuerzo </StyledButton>
      </button>

      <div>
        <span>
            <div className="redd" >
              {show.map((item)  => {
                return <div>{item.name} {item.price}
                <input></input>
              <BttnAgregar 
              text = "agregar"
              onClick = {()=> handleClick(item.name, item.price)}>
             </BttnAgregar>

              </div>   } 
              )  }
            </div>
          </span>  
        </div>
    </div>


  )
}

export default Waiter;
