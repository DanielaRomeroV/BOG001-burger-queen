import React from 'react';
import { Link } from "react-router-dom";
import logo from '../img/logo.png';
//import background from '../img/background.jpg'

const Home = () => {
  return (

    <section className="body-background full-screen">

    <div className="Home">   
      <div className="Logo">
          <img src={logo} alt="logo"/></div>
          <div className="Soy"><h1>Soy</h1></div>

     <div className='Buttons'>
            <button className="Button">
              
            <Link to={'/orden-mesero'}><h2>Mesero</h2></Link>
            </button>
            <button className="Button">
            <Link to={'/chef-pedidos'}><h2>Cocinero</h2></Link>
            </button>
           
            </div>
      </div>  
      </section>


  );
}


export default Home;
