import { makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import hero from "../../assets/images/hero.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderRadius: 26,
    background: "#F6EDD9",
    border: "2px solid #FFFFFF",
    maxWidth: 333,
    display: "flex",
  },
  imageSize: {
    width: 90,
    height: 90,
    borderRadius: "50%",
    objectFit: "cover",
  },
  textSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: theme.spacing(2),
    textAlign: "center",
  },
}));

//TODO: image or avatar? Style img
const AdCardMobile = ({ img, title, price, location }) => {
  const classes = useStyles();

  return (
    <Paper elevation={4} className={classes.root}>
      <img className={classes.imageSize} src={hero} alt='ad' />
      <div className={classes.textSection}>
        <Typography className={classes.adTitle} variant='subtitle1'>
          {title}
        </Typography>
        <Typography variant='overline'>
          {price} kr - {location}
        </Typography>
      </div>
    </Paper>
  );
};

export default AdCardMobile;
