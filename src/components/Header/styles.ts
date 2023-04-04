import { styled } from "../../styles";
import * as Dialog from "@radix-ui/react-dialog";

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

export const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: "#000",
  opacity: 0.25,
  position: "fixed",
  inset: 0,
});

export const DialogContent = styled(Dialog.Content, {
  backgroundColor: "$gray800",
  minWidth: 480,
  padding: "3rem",
  display: "flex",
  flexDirection: "column",

  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
});

export const DialogClose = styled(Dialog.Close, {
  backgroundColor: "transparent",
  border: 0,
  lineHeight: 0,
  position: "absolute",
  top: 24,
  right: 24,
  color: "$gray500",
});

export const DialogTitle = styled(Dialog.Title, {
  fontSize: "$lg",
  color: "$gray100",
});

export const ListProductsContainer = styled("ul", {
  listStyle: "none",
  margin: "2rem 0",

  li: {
    display: "flex",
    gap: "1.5rem",

    "&:not(:last-child)": {
      marginBottom: "1.5rem",
    },
  },

  variants: {
    haveScroll: {
      true: {
        overflowY: "scroll",
        height: "100%",
      },
    },
  },
});

export const ImageContainer = styled("div", {
  maxWidth: 100,
  width: "100%",
  height: 100,
  background: "$gradient-images",
  borderRadius: 8,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const ProductDetails = styled("div", {
  flex: 1,

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",

  span: {
    color: "$gray300",
    fontSize: "$md",
  },

  strong: {
    color: "$gray100",
    fontSize: "$md",
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "transparent",
    border: 0,
    color: "$green500",
    fontSize: "1rem",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ContentQuantity = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "auto",

  span: {
    fontSize: "1rem",
    color: "$gray300",
  },
});

export const ContentValueTotal = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "0.5rem 0 3.625rem",

  span: {
    fontSize: "$md",
    color: "$gray100",

    "&:last-child": {
      fontSize: "$xl",
    },
  },
});
