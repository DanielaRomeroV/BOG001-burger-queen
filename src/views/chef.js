import React from 'react';
import Button from "@material-ui/core/Button";

//Components
import NavBar from "../components/Menu/Menu";
//import orderDelivered from "../components/orderDelivered/orderDelivered.jsx"

const Chef = () => { 

    return (
      <div className="Chef-view"> 
       <header className="nav-bar">
         <NavBar></NavBar>
        </header> 

        <div className='OptionMenuChef'>
        <Button color="primary" variant="contained">
          Orden pendiente
        </Button>

        <Button
          style={{ marginLeft: "10px" }} color="primary" variant="contained">
          Orden entregada
        </Button>   
    </div>

    <div className="orderDelivered">
      <section className="cardsOrder">
        {/* {products.map(({ id, name, price, icon }) => ( */}
        <div className="au-cardOrder">
          <div className="au-card-inner">
          <h1 className="title">Name</h1>
            <h1 className="title">Table</h1>
            <h1 className="title">Products</h1>
          </div>
          <div className="buttonSend">
          <Button color="primary" variant="outlined">
          Enviar
        </Button>
        </div>
        </div>
        {/* ))} */}
        
      </section>
    </div>


      </div>
    )
}

export default Chef;
