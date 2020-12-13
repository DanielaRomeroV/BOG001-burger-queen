import React from "react";
import Button from "@material-ui/core/Button";

//Components
import MenuItems from "../menuItems/Items";

const Buttons = () => {
  return (
    <div className="button">
      <Button color="primary" variant="contained">
        Desayuno
      </Button>

      <Button
        style={{ marginLeft: "10px" }}
        color="primary"
        variant="contained"
        disableElevation
      >
        Almuerzo
      </Button>

      <div className="menu">
        <MenuItems></MenuItems>
      </div>
    </div>
  );
};

export default Buttons;
