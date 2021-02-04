import React ,  {useContext, useState} from  'react';
import {AppContext } from '../AppContext'
import Item from './item'
import { firebase, addBill } from '../firebase';
import BttnAgregar from './BttnAgregar';


const Order = () => {
    const { bill, setBill} = useContext(AppContext);
    const {client ,setClient} = useState ('');
    const total = bill.reduce((valorI, producto) => valorI + producto.price, 0)
    const products = bill.map((prod, i) => (
        <Item
         // grid="box-grid"
          //cName="bill-box"
          key={prod.name + i}
          name={prod.name}
          price={prod.price}
          quantity={prod.quantity}
          id={prod.id}
        />
      ));
     // const handleClient = (e) => setClient(e.currentTarget.value);

      const handleSend = () => {
        if (client !== '' && bill.length !== 0) {
          const addOrder = () => {
            const order = {
              //client,
              products: bill,
              total: total,
              isDone: false,
              isDeliver: false,
              date: firebase.firestore.Timestamp.now(),
              //idOrder,
            };
            addBill(order);
            setBill([]);
           // setClient('');
            //setError('');
          }
          alert('Seguro que quieres enviar la orden', 'warning', false, 'La orden ha sido enviada', addOrder())
        } else if (client !== '' && bill.length === 0) {
          alert(<p2 error>Añade productos</p2>);
        } else {
          alert(<p2 error> Escribe nombre del cliente </p2>);
        }
      }
    

    return (
        <section className="client-table">
            <form className="content">           
                <label htmlFor="userName">
                    Cliente:
               </label>
                
                <input 
                name="user-name" 
                type="text"
                id="client"
                className="name-input"
                placeholder= "Nombre"
                value={client}
               // onChange={handleClient}
              />
            </form>



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
<BttnAgregar 
text = 'enviar' 
onClick = {handleSend}/>

        </section>
    )
}

export default Order;