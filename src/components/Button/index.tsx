import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function Button({ label, ...rest }: ButtonProps) {
  return <ButtonContainer {...rest}>{label}</ButtonContainer>;
}
