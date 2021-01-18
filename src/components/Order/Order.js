import React from 'react';
import './Order.css'



export default function Order({ order, setOrder, setClientName, total }) {

    
    const replaceQuantity = (index, actualOrder, quantityChange) => {
        const newOrder = [...actualOrder];
        newOrder[index].quantity += quantityChange; 
        newOrder[index].total = newOrder[index].price * newOrder[index].quantity;

        if (newOrder[index].quantity <= 0) { 
            newOrder.splice(index, 1);
        }
        return newOrder;
    };

    return (
        <div className="client-table">
            <div className="content">
                <label htmlFor="userName">
                    Cliente:
              </label>
                <input type="text" name="user-name" className="name-input" onBlur={(e) => setClientName(e.target.value)} />
            </div>
            <table className="table">
                <thead className="title-table">
                    <td><h3>Productos</h3></td>
                    <td><h3>Cantidad</h3></td>
                    <td><h3>Precio</h3></td>
                </thead>

                {order.map(({ name, quantity, total }, index) => (   
                    <tr>
                        <td>{name}</td>
                        <td>
                            <button className='minusButton'
                                onClick={() => setOrder(replaceQuantity(index, order, -1))}>
                                -
                                </button>
                            {quantity}
                            <button className='sumButton'
                                onClick={() => setOrder(replaceQuantity(index, order, 1))}>
                                +
                                </button>
                        </td>
                        <td className='price-in-table'>${total}</td>
                        <td>
                            <button className='erraseButton' onClick={() => setOrder(order.filter((_, ind) => ind !== index))} >  
                                <i class="fas fa-trash" aria-hidden="true"></i>
                            </button>
                        </td>
                    </tr>
                ))}
            </table>
            <div className="total-price">
                <h3 >
                    Total = ${total}
                </h3>
            </div>
        </div>
    )
};