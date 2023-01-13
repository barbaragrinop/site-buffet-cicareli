import React, { HTMLInputTypeAttribute, useEffect } from "react";
import { FieldError } from "react-hook-form";
import { ErrorMessage } from "../ErrorMessage";
import styles from "./Input.module.scss";
import InputMask from 'react-input-mask';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type TextProps = InputProps & {
  label: string
  as?: "textarea"
  register?: any | undefined
  error?: FieldError | undefined 
  mask?: string 
}

export default function Input({ name, label, ...props }: TextProps) {

  
  useEffect(() => {

  }, [props.error])


  return (
    <div className={styles.main}>
      <label htmlFor={name}>
        {label}
        {name !== "mensagem" && "*"}
      </label>
      {props.as === "textarea" ? (
        <>
          <textarea {...props.register(name)} id={name} name={name}></textarea>
          {props.error?.message ? 
            <ErrorMessage error={props.error?.message} /> : <></>}
        </>
      ) : props.mask ? (
        <>
          <InputMask {...props.register(name)} type={props.type} id={name} name={name} {...props} />
          {props.error?.message ? 
            <ErrorMessage error={props.error?.message} /> : <></>}
        </>
      ) : (
        <>
          <InputMask {...props.register(name)} type={props.type} id={name} name={name} {...props} />
          {props.error?.message ? 
            <ErrorMessage error={props.error?.message} /> : <></>}
        </>
      )}
    </div>
  );
}
