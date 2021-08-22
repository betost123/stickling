import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.dark,
    color: theme.palette.info.dark,
    "letter-spacing": "0.195em",
    fontWeight: 500,
    fontSize: 12,
    padding: theme.spacing(1.5),
    borderRadius: 12,
  },
}));

const PrimaryButton = ({ onClick, buttonText, fullWidth }) => {
  const classes = useStyles();

  return (
    <Button
      onClick={onClick}
      fullWidth={fullWidth}
      variant='contained'
      color='primary'
      className={classes.root}
    >
      {buttonText}
    </Button>
  );
};

export default PrimaryButton;
