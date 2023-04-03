import type * as Stitches from "@stitches/react";
import { styled } from "../../styles";

export const ButtonContainer = styled("button", {
  width: "100%",
  backgroundColor: "$green500",
  border: 0,
  borderRadius: 8,
  color: "$white",
  padding: "1.25rem",
  fontSize: "$md",
  fontWeight: "bold",
  transition: "backgroundColor 0.2s",

  "&:not(:disabled):hover": {
    backgroundColor: "$green300",
  },

  "&:disabled": {
    opacity: 0.6,
  },

  variants: {
    hasMarginAuto: {
      true: {
        marginTop: "auto",
      },
    },
  },
});

export type ButtonContainerVariants = Stitches.VariantProps<
  typeof ButtonContainer
>;
