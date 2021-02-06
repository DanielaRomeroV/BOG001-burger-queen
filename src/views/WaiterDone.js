import React , {useContext} from 'react';
import {AppContext} from '../AppContext'
import {updateOrder} from '../firebase'
import BttnAgregar from '../components/BttnAgregar'

const Done = () => {

    const {order} = useContext(AppContext)
   
   const handleDeliver = (idItem) => {
     updateOrder(idItem, {  
       isDeliver: true,
     })
   }
       return (
   
         <div className="Home">   
          {order.filter((pedido)=> pedido.isDeliver === false ).filter((pedido)=>  pedido.isDone == true).map((item, i) => {
            return <div key ={i}> Total:{item.total} productos :
             {item.products.map((subItem, i) => (
               <div> {subItem.name}</div>
             ))}
              <BttnAgregar 
                 text = "Entregar"
                 onClick = {()=> handleDeliver(item.id)}>
                </BttnAgregar>
                <br></br>
             </div>
          })}
        </div>
       )
   }
   
export default Done;