import { makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 685,
    maxHeight: 355,
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
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
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
  readMore: {
    textAlign: "right",
    marginRight: theme.spacing(2),
    textDecoration: "underline",
    cursor: "pointer",
  },
}));

const NewsCard = ({ image, title, description, active }) => {
  const classes = useStyles();

  const onClickReadMore = () => {
    console.log("Read more about", title);
  };

  return (
    <div>
      <Paper
        className={classes.root}
        elevation={4}
        style={{ display: active ? undefined : "none" }}
      >
        <img className={classes.image} src={image} alt='news' />
        <div className={classes.textSection}>
          <div>
            <div className={classes.titleSection}>
              <Typography variant='h2'>{title}</Typography>
            </div>
            <div className={classes.descriptionSection}>
              <Typography variant='body1'>{description}</Typography>
            </div>
          </div>
          <div className={classes.readMore} onClick={onClickReadMore}>
            <Typography variant='caption'>Läs mer</Typography>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default NewsCard;
