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
    <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
    {controls.map(control => (
      <BuildContol 
        key={control.label} 
        label={control.label}
        added={() => props.ingredientAdded(control.type)} 
        removed={() => props.ingredientRemoved(control.type)}
        disabled={props.disabled[control.type]} /* access the disabled info for a given control type */
      />
    ))}
  </div>
);

export default BuildControls; 