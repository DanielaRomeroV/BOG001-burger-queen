import React from 'react';
import { Link } from "react-router-dom";
import logo from '../img/logo.png'


const Home = () => {
  return (
    <div className="Home">
      <div className="Logo">
     
      <img src={logo} alt="logo"  /> </div>
      </div>

      <div className='Buttons'>
            <button className="Buttons">
            <Link to={'/Mesero'}><h2>Mesero</h2></Link> </button>
           
            <button className="Buttons">
            <Link to={'/Cocinero'}><h2>Cocinero</h2></Link></button> 
      </div>
    
);
}

export default Home;