import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import AdCardMobile from "./components/AdCardMobile";
import { AdData } from "./data";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(4),
    color: theme.palette.primary.main,
  },
  adSection: {
    padding: theme.spacing(2),
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(4),
  },
  sticklingFiestaIcon: {
    position: "absolute",
    right: 70,
    top: 650,
    animation: "rotation 2s infinite linear",

    "@global": {
      "@keyframes rotation": {
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(359deg)",
        },
      },
    },
  },
}));

const RecentsSection = () => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title} variant='h1'>
        Nyligen tillagda
      </Typography>
      <div className={classes.sticklingFiestaIcon}>
        {/*<SticklingsFiesta />*/}
      </div>
      <div className={classes.adSection}>
        <Grid container spacing={2}>
          {AdData.map((ad) => (
            <Grid key={ad.id} item md={4} xs={12}>
              <AdCardMobile
                img={ad.img}
                title={ad.title}
                price={ad.price}
                location={ad.location}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default RecentsSection;
