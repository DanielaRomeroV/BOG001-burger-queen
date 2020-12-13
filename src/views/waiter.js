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
  const [click, setClick] = useState( false );  //
  const [show, setShow] = useState([]);  

  const listenclick= (e) => { 
    if ( e.target.id == "true" ) {
       
        getMenu('breakfast')
        setClick(false);
        }
    else {
      setClick(true)
      getMenu('Lunch')
    }
   
  };

  const getMenu = async (coleccion) => {
    if(coleccion == undefined ){
      coleccion = 'breakfast'
    }
    await db.collection(coleccion)
    .onSnapshot((querySnapshot) => {
      const elementos = []
      querySnapshot.forEach(element => {
      //console.log(element.data())
      elementos.push({id:element.id , ...element.data()})
      });
      console.log(elementos)
      setShow(elementos)
    })
  }

  

  useEffect(() => {
    console.log("useEffect")
    getMenu("breakfast")
  }, [])
  
    return (
    <div className="waiter-view">

      <header className="nav-bar" >
        <img src={logo} alt="logo" /></header>
      <Order></Order>

      <button className='OptionMenu'>
        <StyledButton 
        id={'true'}  
        //active={true}
        onClick= {listenclick}> Desayuno </StyledButton>
      <StyledButton
        id={'false'}
        onClick= {listenclick} >
           Almuerzo </StyledButton>
      </button>
      <div>
      <span>
          {click ? (
            <div /* Este es el div 1 */ className="red2" >
      
             {show.map((item)  => {
               // console.log(item , 'jjj')
               return <div> {item.name }  {item.price}
              <BttnAgregar item = {item} ></BttnAgregar>
              </div>}

              )  }
            </div>
          ) : (
            console.log(show),
          <div /* Este es el div 2 */ className="redd" >
      
            {show.map((item)  => {
              return <div>{item.name} {item.price}
            <BttnAgregar item = {item} />
             </div>   } 
           )  }
          </div>
          )}
        </span>  
        </div>
    </div>


  )
}

export default Waiter;
