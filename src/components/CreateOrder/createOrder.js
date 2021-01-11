import React from 'react';
import './CreateOrder.css' 
export default function createOrder({ clientOrder, setOrder, setClientName }) {
    const closeOrder = () => {
        setOrder([]);
        setClientName('');
    }

    return (
        <div className="buttons">
            <button className="limpiar-orden" onClick={() => closeOrder()}>
                LIMPIAR ORDEN
            </button>
            <button className="crear-orden" onClick={() => alert(clientOrder.nameClient +' tu orden cuesta $'+ clientOrder.totalValue)}>
                CREAR ORDEN
      </button>
        </div>
    )
}