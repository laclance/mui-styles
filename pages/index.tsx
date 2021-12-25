import { styled } from "@mui/material/styles";
import type { NextPage } from "next";

interface StyleProps {
  isGrey: boolean;
}

const StyledDiv = styled("div")<StyleProps>(
  { shouldForwardProp: (prop: any) => prop !== "isGrey" },
  (props: any) => ({
    backgroundColor: props.isGrey,
  })
);

const Home: NextPage = () => {
  return <StyledDiv isGrey={true}>hello world</StyledDiv>;
};

export default Home;