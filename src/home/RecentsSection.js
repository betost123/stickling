import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import AdCard from "./components/AdCard";
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
    marginLeft: theme.spacing(5),
    marginBottom: theme.spacing(4),
  },
}));

const RecentsSection = () => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title} variant='h1'>
        Nyligen tillagda
      </Typography>
      <div className={classes.adSection}>
        <Grid container spacing={2}>
          {AdData.map((ad) => (
            <Grid key={ad.id} item md={4} xs={12}>
              <AdCard
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
