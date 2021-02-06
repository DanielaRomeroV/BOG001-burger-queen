import React ,  {useContext, useState} from  'react';
import {AppContext } from '../AppContext'
import Item from './item'
import { firebase, addBill } from '../firebase';
import BttnAgregar from './BttnAgregar';


const Order = () => {
    const { bill, setBill} = useContext(AppContext);
    const total = bill.reduce((valorI, producto) => valorI + producto.price, 0)
    const products = bill.map((prod, i) => (
        <Item
         grid="box-grid"
          key={prod.name + i}
          name={prod.name}
          price={prod.price}
          quantity={prod.quantity}
          id={prod.id}
        />
      ));
      const handleSend = () => {
        if ( bill.length !== 0) {
          const addOrder = () => {
            const order = {
              products: bill,
              total: total,
              isDone: false,
              isDeliver: false,
              date: firebase.firestore.Timestamp.now(),
         
            };
            addBill(order);
            setBill([]);
          }
          addOrder()
        } else if ( bill.length === 0) {
          alert(<p2 error>Añade productos</p2>);
        }
      }
    

    return (
        <section className="client-table">
           


            <table className="table">
                <thead>
                    <tr>
                        <th><h3>Productos</h3></th>
                        <th><h3>Cant</h3></th>
                        <th><h3>Precio</h3></th>
                    </tr>
                </thead>
                <tbody>
                {products}
                </tbody>
            </table>
<h3> Total : ${total} </h3>
<BttnAgregar className= 'btnSend'
text = 'enviar' 
onClick = {handleSend}/>

        </section>
    )
}

export default Order;