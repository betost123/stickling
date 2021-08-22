import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import calethea from "../assets/images/calethea.jpg";

const useStyles = makeStyles((theme) => ({
  heroImage: {
    width: "100%",
  },
  imageStyle: {
    objectFit: "cover",
    width: "100%",
    height: 550,
    //opacity: 0.4,
    filter: "brightness(60%)",

    [theme.breakpoints.down("sm")]: {
      height: 400,
    },
  },
  heroTitle: {
    fontSize: 96,
    fontWeight: 700,
    color: theme.palette.secondary.main,

    [theme.breakpoints.down("sm")]: {
      fontSize: 36,
    },
  },
  subtitleDescription: {
    color: theme.palette.secondary.main,

    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  textSection: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    left: "30%",
    transform: "translate(-50%, -50%)",

    [theme.breakpoints.down("sm")]: {
      top: "30%",
      left: "50%",
    },
  },
}));

//TODO: add overlay to hero image
const Hero = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.heroImage}>
        <div style={{ background: "rgba(0, 0, 0, .6)" }}>
          <img className={classes.imageStyle} src={calethea} alt='hero' />
        </div>
        <div className={classes.textSection}>
          <Typography className={classes.heroTitle}>STICKLING</Typography>
          <Typography variant='h2' className={classes.subtitleDescription}>
            omg this is a description of the page.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Hero;
