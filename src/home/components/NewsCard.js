import { makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 685,
    borderRadius: 34,
    background: theme.palette.secondary.dark,
    display: "flex",
  },
  image: {
    height: 355,
    width: 355,
    objectFit: "cover",
    borderRadius: 34,
  },
  textSection: {
    padding: theme.spacing(3),
    width: "100%",
  },
  titleSection: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    color: theme.palette.primary.main,
  },
  descriptionSection: {
    marginTop: theme.spacing(3),
  },
}));

const NewsCard = ({ image, title, description }) => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <img className={classes.image} src={image} alt='news' />
        <div className={classes.textSection}>
          <div className={classes.titleSection}>
            <Typography variant='h2'>{title}</Typography>
          </div>
          <div className={classes.descriptionSection}>
            <Typography variant='body1'>{description}</Typography>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default NewsCard;
