import React, { useState } from 'react';
import './Order.css'
import Button from "@material-ui/core/Button";


export default function Order({ order, setOrder, setClientName, total, setTotal }) {



    return (
        <div className="client-table">
            <div className="content">
                <label htmlFor="userName">
                    Cliente:
              </label>
                <input type="text" name="user-name" className="name-input" onBlur={(e) => setClientName(e.target.value)} required />
            </div>
            <table className="table">
                <thead className="title-table">
                    <tr>
                        <th><h3>Productos</h3></th>
                        <th><h3>Cantidad</h3></th>
                        <th><h3>Precio</h3></th>
                    </tr>
                </thead>
                <tr>
                    {order.map(({ name, quantity, price, total}, index) => (
                        <tr className="tr-content">
                            <td className='name-in-table'>{name}</td>
                            <td className='idx-in-table'>{index}</td>
                            <td className='quantity-in-table'>
                                <button className='sumButton'>
                                    +
                                </button>
                                {quantity}
                                <button className='minusButton'>
                                    -
                                </button></td>
                            <td className='price-in-table'>${price}
                                <button className='erraseButton' onClick={() => setOrder(order.filter((_,ind) => ind !==index))}>
                                <i class="fas fa-trash" aria-hidden="true"></i>
                                   
                                </button>
                            </td>
                        </tr>
                    ))}
                </tr>
                <tbody>
                </tbody>
                <tfoot className="total">
                    <h3>
                        Total
                    </h3>
                </tfoot>
            </table>
                        
         


        </div>
    )
};