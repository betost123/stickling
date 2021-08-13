import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.dark,
    padding: theme.spacing(2),
  },
  title: {
    margin: theme.spacing(4),
    color: theme.palette.secondary.main,
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant='h1'>
        Kontakt
      </Typography>
    </div>
  );
};

export default Contact;
