import React ,  {useContext, useState} from  'react';
import {AppContext } from '../AppContext'
import Item from './item'


const Order = () => {
    const { bill, setBill} = useContext(AppContext);
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
    

    return (
        <section className="client-table">
            <form className="content">           
                <label htmlFor="userName">
                    Cliente:
              </label>
                <input type="name" name="user-name" className="name-input" />

                <label htmlFor="table-number"  className="table-number">
                    Mesa:
            </label>
                <select name="mesa">
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="10"> 4 </option>
                    <option value="11"> 5  </option>
                </select>
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
                <tr>
                    <td> item </td><td>2</td><td>$ 4.5</td>
                </tr>

                <tr>
                    <td>item</td><td>2</td><td>$ 4.5</td>
                </tr>

                <tr>
                    <td>item</td><td>2</td><td>$ 4.5</td>
                </tr>

                {products}
                </tbody>
            </table>

        </section>
    )
}

export default Order;