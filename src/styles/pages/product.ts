import { styled } from "..";

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch",
  gap: "4rem",
  maxWidth: 1180,
  margin: "0 auto",
});

export const ImageContainer = styled("div", {
  maxWidth: 576,
  width: "100%",
  height: "calc(656px - 0.5rem)",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

  h1: {
    fontSize: "$2xl",
    color: "$gray300",
  },

  span: {
    display: "block",
    marginTop: "1rem",
    fontSize: "$2xl",
    color: "$green300",
  },

  p: {
    marginTop: "2.5rem",
    fontSize: "$md",
    lineHeight: 1.6,
    color: "$gray300",
  },

  button: {
    marginTop: "auto",
    backgroundColor: "$green500",
    border: 0,
    borderRadius: 8,
    color: "$white",
    padding: "1.25rem",
    cursor: "pointer",
    fontSize: "$md",
    fontWeight: "bold",
    transition: "backgroundColor 0.2s",

    "&:not(:disabled):hover": {
      backgroundColor: "$green300",
    },

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },
  },
});

export const ProductSkeletonContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch",
  gap: "4rem",
  maxWidth: 1180,
  margin: "0 auto",

  "> div:first-child": {
    minWidth: 576,
    width: "100%",
    height: "calc(656px - 0.5rem)",
    backgroundColor: "$gray800",
    borderRadius: 8,
  },
});

export const ProductSkeletonDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

  "> div": {
    width: "100%",
    backgroundColor: "$gray800",
    borderRadius: 8,

    "&:first-child": {
      height: "4.75rem",
    },

    "&:nth-child(2)": {
      marginTop: "2.5rem",
      height: "8rem",
    },

    "&:last-child": {
      marginTop: "auto",
      height: "3.875rem",
    },
  },
});
