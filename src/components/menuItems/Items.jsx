import React from "react";
import "./Items.css";

import Button from "@material-ui/core/Button";

const menus = "lunch";

function MenuItems() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    obtenerDatos(menus);
  }, []);

  const obtenerDatos = async (menus) => {
    const datos = await fetch("products.json");
    const menu = await datos.json();
    const obtenerMenu = menu.find(({ menuId }) => menus === menuId);
    console.log(obtenerMenu);
    console.log(obtenerMenu.menuOptions);
    setProducts(obtenerMenu.menuOptions);
  };

  return (
    <div className="menuPage">
      <div className="button">
        <Button color="primary" variant="contained">
          Desayuno
        </Button>

        <Button
          style={{ marginLeft: "10px" }}
          color="primary"
          variant="contained">
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
