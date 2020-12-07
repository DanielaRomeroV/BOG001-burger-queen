import React from "react";
import "./Items.css";

const menus = "breakfast";

function MenuItems() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    obtenerDatos(menus);
  }, []);

  

  const obtenerDatos = async (menus) => {
    const datos = await fetch("products.json");
    const menu = await datos.json();
    const obtenerMenu = menu.find(({ menuId }) => menus === menuId);
    const menuDia = obtenerMenu.find(({ menuOptions }) => 'menuOptions' === menuOptions);
    console.log(obtenerMenu);
    console.log(menuDia);
    setProducts(obtenerMenu);
  };

  
  return (
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
  );
}

export default MenuItems;
