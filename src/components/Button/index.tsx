import { ButtonHTMLAttributes } from "react";

import { ButtonContainer, ButtonContainerVariants } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonContainerVariants & {
    label: string;
  };

export function Button({ label, ...rest }: ButtonProps) {
  return <ButtonContainer {...rest}>{label}</ButtonContainer>;
}
