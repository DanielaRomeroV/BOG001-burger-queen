import React , {useContext} from 'react';
import {AppContext} from '../AppContext'
import {updateOrder} from '../firebase'
import BttnAgregar from '../components/BttnAgregar'

const Chef = () => { 
  const newarray =[]
 const {order} = useContext(AppContext)
 console.log(order , 'hhhhhhh')
 const array =[]
 const productos = order.map((item, i) => (
      console.log(item.products),
      item.products.map((item, i) => (
        console.log(item.name),
        array.push (item.name)
  ))
  
));

const handleDeliver = (idItem) => {
  updateOrder(idItem, {  
    isDone: true,
  })
}
    return (

      <div className="Home">   
       {order.filter((pedido)=> pedido.isDone === false).map((item, i) => {
         return <div key ={i}> Total:{item.total} productos :
          {item.products.map((subItem, i) => (
            <div> {subItem.name}</div>
          ))}
           <BttnAgregar 
              text = "Listo"
              onClick = {()=> handleDeliver(item.id)}>
             </BttnAgregar>
             <br></br>
          </div>
       })}
      <div className="Soy"><h1> Chef</h1></div></div>
    )
}

export default Chef;
