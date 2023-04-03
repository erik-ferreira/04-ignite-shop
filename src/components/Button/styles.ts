import { styled } from "../../styles";

export const ButtonContainer = styled("button", {
  // width: "100%",
  marginTop: "auto",
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
});
