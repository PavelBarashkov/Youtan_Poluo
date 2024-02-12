import { InputHTMLAttributes } from "react";
import classes from "./myInput.module.css";

export const MyInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} className={classes.myInput}  />;
};
