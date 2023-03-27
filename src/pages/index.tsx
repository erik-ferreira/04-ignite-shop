import { styled } from "../styles";

const Button = styled("button", {
  backgroundColor: "$rocket",
  borderRadius: 6,
  border: 0,
  padding: "4px 8px",

  span: {
    fontWeight: "bold",
  },

  "&:hover": {
    filter: "brightness(0.8)",
  },
});

export default function Home() {
  return (
    <>
      <h1>Hello world</h1>
      <Button>
        <span>dale</span>
        teste
      </Button>
    </>
  );
}
