import React from "react";
import classes from "./BuildControls.module.css";
import BuildContol from "./BuildControl/BuildControl";

const controls = [
    { label: "Bacon", type: "bacon" },
    { label: "Lettuce", type: "lettuce" },
    { label: "Cheese", type: "cheese"},
    { label: "Meat", type: "meat"}
];

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map(control => (
      <BuildContol 
        key={control.label} 
        label={control.label}
        added={() => props.ingredientAdded(control.type)}  
      />
    ))}
  </div>
);

export default BuildControls; 