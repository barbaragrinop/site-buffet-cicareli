import React, { HTMLInputTypeAttribute } from "react";
import styles from "./Input.module.scss";

type InputProps = {
  type: "date" | "text" | "number" | "email";
  name: string;
  label: string;
  required?: boolean;
};

export default function Input(props: InputProps) {
  return (
    <div className={styles.main}>
      <label htmlFor={props.name}>
        {props.label}
        {props.required && "*"}
      </label>
      <input type={props.type} id={props.name} name={props.name} />
    </div>
  );
}
