import React from "react";
import "./Items.css";
import otrMenu from "./products.json";
import Button from "@material-ui/core/Button";

function MenuItems() {
  const [products, setProducts] = React.useState(otrMenu[0].menuOptions);

  const obtenerDesayuno = async () => {
    const datos = await fetch("products.json");
    const menu = await datos.json();
    const obtenerMenu = menu.find(({ menuId }) => "breakfast" === menuId);
    console.log(obtenerMenu);
    console.log(obtenerMenu.menuOptions);
    setProducts(obtenerMenu.menuOptions);
  };

  const obtenerAlmuerzo = async () => {
    const datos = await fetch("products.json");
    const menu = await datos.json();
    const obtenerMenu = menu.find(({ menuId }) => "lunch" === menuId);
    console.log(obtenerMenu);
    console.log(obtenerMenu.menuOptions);
    setProducts(obtenerMenu.menuOptions);
  };

  return (
    <div className="menuPage">
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
          <div className="au-card">
            <div className="au-card-inner">
              <h3 className="title-1">{name}</h3>
              <img src={icon} alt="icon" />
              <h3 className="title-2"> ${price}</h3>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default MenuItems;
