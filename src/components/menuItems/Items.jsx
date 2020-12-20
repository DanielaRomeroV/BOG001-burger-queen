import React from "react";
import "./Items.css";
import menuProducts from "./products.json";
import Button from "@material-ui/core/Button";

const paraOrden = (nombreProd, precioProd) => {
  const miniOrden = { nombreProd, precioProd };
  console.log(miniOrden);
  return miniOrden;
};

function MenuItems(props) {
  const [products, setProducts] = React.useState(menuProducts[0].menuOptions);

  const obtenerDesayuno = async () => {
    const datos = await fetch("products.json");
    const menu = await datos.json();
    const obtenerMenu = menu.find(({ menuId }) => "breakfast" === menuId);
    setProducts(obtenerMenu.menuOptions);
  };

  const obtenerAlmuerzo = async () => {
    const datos = await fetch("products.json");
    const menu = await datos.json();
    const obtenerMenu = menu.find(({ menuId }) => "lunch" === menuId);
    setProducts(obtenerMenu.menuOptions);
  };

  return (
    <div className="menuPage">
      <p>{props.prueba}</p>
      <Button color="primary" variant="contained" onClick={() => props.actualizarEstado("valor")}>
        cambiar 
        </Button>
        
      <div className="button">
        <Button color="primary" variant="contained" onClick={obtenerDesayuno}>
          Desayuno
        </Button>

        <Button
          style={{ marginLeft: "10px" }}
          color="primary"
          variant="contained"
          onClick={obtenerAlmuerzo}
        >
          Almuerzo
        </Button>
      </div>

      <section className="cards">
        {products.map(({ id, name, price, icon }) => (
          <div className="au-card" id={id}>
            <div className="au-card-inner">
              <h3 className="title-1">{name}</h3>
              <img src={icon} alt="icon" />
              <h3 className="title-2"> ${price}</h3>
              <Button
                style={{ marginLeft: "10px" }}
                color="primary"
                variant="contained"
                onClick={paraOrden(name, price)}
              >
                Agregar
              </Button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default MenuItems;
