import { styled } from "..";
import Link from "next/link";

export const HomeContainer = styled("main", {
  display: "flex",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  width: "100%",
  minHeight: 656,
  marginLeft: "auto",

  "@media screen and (max-width: 1400px)": {
    minHeight: 524.4,
  },

  "@media screen and (max-width: 900px)": {
    minHeight: 392.8,
  },

  "@media screen and (max-width: 425px)": {
    minHeight: 261.2,
  },
});

export const Product = styled(Link, {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  cursor: "pointer",
  position: "relative",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",

  img: {
    objectFit: "cover",

    "@media screen and (max-width: 1400px)": {
      width: 416,
      height: 384,
    },

    "@media screen and (max-width: 900px)": {
      width: 312,
      height: 288,
    },

    "@media screen and (max-width: 425px)": {
      width: 208,
      height: 192,
    },
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",

    borderRadius: 4,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "rgba(0, 0, 0, 0.6)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    strong: {
      fontSize: "$lg",
      color: "$gray100",
    },

    span: {
      fontSize: "$lg",
      fontWeight: "bold",
      color: "$green300",
    },

    "@media screen and (max-width: 950px)": {
      flexDirection: "column",
      gap: "1rem",
      padding: "1rem",

      strong: {
        textAlign: "center",
      },
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});
