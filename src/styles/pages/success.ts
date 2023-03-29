import { styled } from "..";

export const SuccessContainer = styled("main", {
  height: 656,
  margin: "0 auto",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    maxWidth: 560,
    fontSize: "$xl",
    color: "$gray300",
    textAlign: "center",
    lineHeight: 1.4,
    marginTop: "2rem",
  },

  a: {
    display: "block",
    marginTop: "5rem",
    fontSize: "$lg",
    fontWeight: "bold",
    color: "$green500",
    textDecoration: "none",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("div", {
  maxWidth: 130,
  width: "100%",
  height: 145,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  marginTop: "4rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});
