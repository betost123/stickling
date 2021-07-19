import { makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import hero from "../../assets/images/hero.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderRadius: 26,
    background: theme.palette.info.dark,
    maxWidth: "40vh",
    textAlign: "center",
  },
  imageSize: {
    width: 280,
    height: 280,
    marginBottom: theme.spacing(2),
    borderRadius: "50%",
    objectFit: "cover",
  },
}));

//TODO: image or avatar? Style img
const AdCard = ({ img, title, price, location }) => {
  const classes = useStyles();

  return (
    <Paper elevation={4} className={classes.root}>
      <img className={classes.imageSize} src={hero} alt='ad' />
      <Typography variant='subtitle1'>{title}</Typography>
      <Typography variant='body2'>
        {price} kr - {location}
      </Typography>
    </Paper>
  );
};

export default AdCard;
