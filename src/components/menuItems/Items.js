import React, { useState } from "react";
import "./Items.css";
import menuProducts from "./products.json";

export default function MenuItems({ order, setOrder }) {
  const [menuType, setMenuType] = useState("breakfast");
  console.log(menuType);
  const menus = menuProducts.find(({ menuId }) => menuType === menuId);
  console.log(menus);
  const menu = menus.menuOptions;
  console.log(menu);
  return (
    <div className="menuPage">
      <div className="page-buttons">
        <button
          className="menu-Breakfast"
          value='breakfast'
          onClick={(e) => setMenuType(e.target.value)}
        >
          Desayuno
        </button>

        <button
          className="menu-Lunch"
          value="lunch"
          onClick={(e) => setMenuType(e.target.value)}
        >
          Almuerzo
        </button>
      </div>

      <div className="cards">
        {menu.map(({ id, name, price, icon }) => (
          <div className="au-card" id={id} key={id + 'card'}>
            <div className="au-card-inner" key={id + 'cards'}>
              <h3 className="title-1">{name}</h3>
              <img src={icon} alt={id + "icon"} />
              <h3 className="title-2"> ${price}</h3>
              <button
                className='button-add'
                value={id + 'boton'}
                onClick={(e) => setOrder([...order,{name, quantity : 1, price: price, total: price}])}
              >
                Agregar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};
