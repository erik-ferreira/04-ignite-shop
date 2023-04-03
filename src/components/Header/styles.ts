import { styled } from "../../styles";

export const HeaderContainer = styled("header", {
  maxWidth: 1180,
  width: "96%",
  padding: "2rem 0",
  margin: "0 auto",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const ButtonCart = styled("button", {
  backgroundColor: "$gray800",
  border: 0,
  borderRadius: 6,
  lineHeight: 0,
  padding: "0.75rem",
  color: "$gray500",
  position: "relative",

  span: {
    position: "absolute",
    top: -10,
    right: -10,

    width: "1.5rem",
    height: "1.5rem",
    background: "$green500",
    borderRadius: "50%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    color: "$white",
    fontSize: "$sm",
    fontWeight: "bold",
    border: "3px solid $gray900",
  },

  variants: {
    hasProductInCart: {
      true: {
        color: "$gray300",
      },
    },
  },
});
