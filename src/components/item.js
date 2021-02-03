import React, { useContext } from 'react';
//import { P2 } from './Styling';
//import './Item.scss';
import { AppContext } from '../AppContext';
import eliminar from '../img/eliminar.png';

export default function Item({ name, price, quantity, grid, id }) {
  const { deleteProduct } = useContext(AppContext);

  const handleDelete = () => {
    deleteProduct(id);
  };

  return (
    <div className={`bill-box ${grid}`}>
      <p className="bill-box-quantities">{quantity}</p>
      <p>{name}</p>
      <p className="bill-box-price">
        {`$${price}`}
        {' '}
      </p>
      <img
        src={eliminar}
        alt="eliminar"
        className="iconDelete"
        onClick={handleDelete}
      />
    </div>
  );
}