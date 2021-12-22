import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import type { NextPage } from "next";

interface StyleProps {
  isGrey: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>(() => ({
  root: ({ isGrey }) => ({
    color: isGrey ? "grey" : "white",
  }),
}));

const Home: NextPage = () => {
  const classes = useStyles({ isGrey: true });
  return <div className={classes.root}>hello world</div>;
};

export default Home;
