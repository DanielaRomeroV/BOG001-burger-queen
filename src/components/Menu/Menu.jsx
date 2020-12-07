import React, { Fragment } from 'react';
import '../Menu/Menu.css';
import  Camarero from '../../../src/img/icons/camarero.svg';
import  Cocinero from '../../../src/img/icons/cocinero.svg';
import  Home from '../../../src/img/icons/home.svg';

const NavBar = () => {
  return (
    <Fragment>
      <div className="menu">
  
        <nav className="burger-menu">
            <input className="menu-check" type="checkbox" name="menu-check" value="" id="menu-check"/> 
            <label className="menu-open" for="menu-check">
                <span className="burger1"></span>
                <span className="burger2"></span>
                <span className="burger3"></span>
            </label>

            <ul className="menu-options">
                <li><a href="/"><img src={Home} alt={"Home"}/></a><p>Inicio</p></li>
                <li><a href="/orden-mesero"><img src={Camarero} alt={"Camarero"}/></a><p>Mesero</p></li>
                <li><a href="/chef-pedidos"><img src={Cocinero} alt={"Cocinero"}/></a><p>Chef</p></li>
            </ul>
        </nav>
    </div>
    </Fragment>
  );
}
export default NavBar;