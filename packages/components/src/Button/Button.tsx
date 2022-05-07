import React, { PropsWithChildren } from "react";
import { ButtonContainer } from "./styles";

export interface PropTypes {
  size?: "s" | "m" | "l";
  type?: "primary";
  variant?: "transparent";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button(props: PropsWithChildren<PropTypes>) {
  let { children, size, type, variant, onClick } = props;

  return (
    <ButtonContainer
      variant={variant}
      // html `button` has type, it has conflict if we pass type.
      type_name={type}
      size={size}
      onClick={onClick}
      px="xm"
      br="s"
    >
      {children}
    </ButtonContainer>
  );
}

export default Button;
