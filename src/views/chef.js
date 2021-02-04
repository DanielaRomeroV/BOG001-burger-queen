import React , {useContext} from 'react';
import {AppContext} from '../AppContext'

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
    return (

      <div className="Home">   
       {order.map((item, i) => {
         return <div key ={i}> Total:{item.total} productos : {array[i]}</div>
       })}
      <div className="Soy"><h1>Holi soy Chef</h1></div></div>
    )
}

export default Chef;
