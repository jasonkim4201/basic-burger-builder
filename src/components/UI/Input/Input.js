import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  // make className more dymanic depending on whether form input is valid or not
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    // if invalid property turns out to be true push the invalid css custom class
    // add should validate props to prevent dropdown from being red
    if (props.invalid && props.shouldValidate && props.touched) {
      inputClasses.push(classes.Invalid)
    }

  switch (props.elementType) {

    case ("input"):
      inputElement = <input className={inputClasses.join(" ")}
                            {...props.elementConfig}
                            value={props.value} 
                            onChange={props.changed}/>;
      break;

    case ("textarea"):
      inputElement = <textarea className={inputClasses.join(" ")}
                              {...props.elementConfig}
                              value={props.value} 
                              onChange={props.changed} />;
      break;
    
    case ("select"):
    inputElement = (
        <select 
            className={inputClasses.join(" ")}
            value={props.value} 
            onChange={props.changed}>
            {props.elementConfig.options.map(option => {
              return (
                <option key={option.value} value={option.value}>
                  {option.displayValue}
                </option>
              )
            })}
        </select>
        );
      break;

    default:
      inputElement = <input className={inputClasses.join(" ")}
                            {...props.elementConfig}
                            value={props.value} 
                            onChange={props.changed} />;
      break;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
}

export default Input;