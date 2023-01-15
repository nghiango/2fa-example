import React from "react";
import { useFormContext } from "react-hook-form";
import './Input.scss';

interface InputProps {
  name: string;
  label: string;
  placeholder?: string;
}

export const Input = ({ name, label, placeholder }: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const getErrorMessage = (): string => {
    const error = errors[name];
    if (error) {
      return error.message as string;
    }
    return "Generic error";
  };

  return (
    <>
    <div className="input">
      <label className="input__label">{label}</label>
      <input className="input__input" {...register(name)} placeholder={placeholder}/>
      {errors[name] && <span className="input__error">{getErrorMessage()}</span>}
    </div>

    </>
  );
};
