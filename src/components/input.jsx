import React from "react";
import styles from "./Input.module.scss";

const input = props => {
  let inputElement = null;
  //   in case there is an error
  const inputClasses = [styles.InputElement];
  let validationError = null;
  //   in case there is an error we a certain style of it
  //   if not rules then leave it, and if wasnt touched leave it
  if (props.invalid && props.shouldValidate && props.touched) {
    validationError = <p className={styles.ValidationError}>{props.error}</p>;
    inputClasses.push(styles.Invalid);
  }

  switch (props.elementType) {
    case "input" || "password":
      inputElement = (
        <input
          className={`${styles.input} ${inputClasses.join(" ")}`}
          // here we can assign html attibutes to it
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className={styles.Input}>
      {validationError}
      <label className={styles.Label}>{props.label}</label>

      {inputElement}
    </div>
  );
};

export default input;
