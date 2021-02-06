import React, {useState , useEffect , useContext} from 'react';
import { Link } from "react-router-dom";

import logo from '../img/logo2.png';
import Order from '../components/Order';
import {db} from '../firebase';
import BttnAgregar from '../components/BttnAgregar'
import { AppContext } from '../AppContext';

//useEffect detecta los eventos esa es la magia de react by: bolo

const Waiter = ({ }) => {
  const {addProduct} = useContext(AppContext)
  const [tipoMenu , setTipoMenu] = useState('breakfast');
  const [show, setShow] = useState([]);  
 

  const handleClick = (name,price) => {          //actualiza los valores de la billetera
    addProduct({  
      name:name,
      quantity: 1,
      price:price,
      id: Math.floor(Math.random() * 100),
    });
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
   
        setShow(coleccionItems)  //pinta los datos dependiedo de que haya dentro
      })
    } 
  traermenu() //activa la funcion, la ejecuta
  
  }, [tipoMenu] )
  
    return (
    <div className="card">
      <header className="nav-bar" >
        <img src={logo} alt="logo" />
        
        <button  style={{  border : '18px' , color : 'black',
  padding : '10px' ,size : '10px' }} >
          <Link to={'/Done'}><h2>Pedidos listos</h2></Link>
</button>
        </header>


      
        
      
      <div className='nn'>
        <button style={{  border : '18px' , color : 'orange',
  padding : '10px' ,size : '10px' }}
         onClick= { ()=> setTipoMenu ('breakfast')}> Desayuno </button>
        <button style={{  border : '18px' , color : 'orange',
  padding : '10px' ,size : '10px' }}
         onClick= {()=> setTipoMenu ('Lunch') }> Almuerzo </button>
      

      <div className='menu '>
      
       
              {show.map((item)  => {
                return <div> {item.name} {item.price}
              <BttnAgregar 
              text = "agregar"
              onClick = {()=> handleClick(item.name, item.price)}>
             </BttnAgregar>

              </div> } 
              )  }
           
            
        </div>
        <Order> </Order>
        </div>
    </div>


  )
}

export default Waiter;
