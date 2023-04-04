import { styled } from "..";

export const SuccessContainer = styled("main", {
  height: 656,
  margin: "0 auto",
  padding: "1rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
    margin: "3rem 0 1.5rem",
  },

  p: {
    maxWidth: 560,
    fontSize: "$xl",
    color: "$gray300",
    textAlign: "center",
    lineHeight: 1.4,
  },

  a: {
    display: "block",
    marginTop: "4rem",
    fontSize: "$lg",
    fontWeight: "bold",
    color: "$green500",
    textDecoration: "none",

    "&:hover": {
      color: "$green300",
    },
  },

  "@media screen and (max-width: 700px)": {
    h1: {
      fontSize: "$xl",
    },

    p: {
      fontSize: "$lg",
    },

    a: {
      fontSize: "$md",
    },
  },
});

export const ImageContainer = styled("div", {
  display: "flex",
});

export const ImageContent = styled("div", {
  maxWidth: 140,
  width: "100%",
  height: 140,
  background: "$gradient-images",
  borderRadius: "50%",

  padding: "0.25rem",
  margin: "0 -25px",
  boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.8)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});
