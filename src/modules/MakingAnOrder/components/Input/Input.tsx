import React from "react";
import { MyInput } from "../../UI/MyInput/MyInput";

interface IInputProps {
  placeholder: string;
  error: string;
}

export const Input = ({ placeholder, error }: IInputProps) => {
  return (
    <>
      <MyInput placeholder={placeholder} />
      {error ? <div>{error}</div> : null}
    </>
  );
};
