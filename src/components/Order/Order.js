import React, {useState} from 'react';
import './Order.css'
import Button from "@material-ui/core/Button";

//Components
//import menuItems from '../menuItems/Items.jsx';

const preOrden = [null,null];


const Order = (props) => {

    const [orden, setOrden] = useState(preOrden);
   
    const imprimirOrden = ()=>{
        //console.log(ReactDOM.render(menuItems, document.getElementById('meal_1')));
        const ordenaMostrar = ['queso', 4.3];
        setOrden(ordenaMostrar);
    }

    return (
        <div className="client-table">
            <p>{props.prueba2}</p>

            <div className="content">           
                <label htmlFor="userName">
                    Cliente:
              </label>
                <input type="name" name="user-name" className="name-input" />

                <label htmlFor="table-number"  className="table-number">
                    Mesa:
            </label>
                <select name="mesa">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="10">4</option>
                    <option value="11">5</option>
                </select>
            </div>



            <table className="table">
                <thead>
                    <tr>
                        <th><h3>Productos</h3></th>
                        <th><h3>Cant</h3></th>
                        <th><h3>Precio</h3></th>
                    </tr>
                </thead>
                <tr>
                    <td>{orden[0]}</td><td>1</td><td>$ {orden[1]}</td>
                </tr>
                <tbody>
                </tbody>
            </table>

            <div className="buttonOrder">
        <Button color="primary" variant="contained" a href="/chef-pedidos">
        Crear orden
        </Button> </div>
        <div className="bottonEstado">
        <Button color="primary" variant="contained" onClick={imprimirOrden}>
        cambiar estado
        </Button> </div>


        </div>
    )
}

export default Order;