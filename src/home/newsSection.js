import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import NewsCard from "./components/NewsCard";
import plantStyling from "../assets/images/plantStyling.jpg";
import monstera from "../assets/images/monstera.jpg";
import balcony from "../assets/images/balcony.jpg";

const useStyles = makeStyles((theme) => ({
  newsTitle: {
    margin: theme.spacing(4),
    color: theme.palette.primary.main,
  },
}));

const NewsSection = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.newsTitle} variant='h1'>
        Nyheter
      </Typography>
      <div>
        <NewsCard
          image={monstera}
          title='Care guide - Monstera'
          description='In this section you will learn how to care for your Monsteras. They are generally very easy to care for, and the biggest pitfall is actually that you over-care for them!'
        />
        <NewsCard
          image={plantStyling}
          title='Plant Styling'
          description='Vi listar våra bästa tips för att hitta rätt plantor till rätt hem! Hur mycket sol får din lägenhet, hur mycket takhöjd har du, hur mycket plats har du? Och vilken färg har väggarna, vilken nivå på skötsel eftersträvar du? Och självklart berättar vi vilka krukor som funkar. Läs mer för att få alla tips för en stylad lägenhet.'
        />
        <NewsCard
          image={balcony}
          title='Balkongens blommor'
          description='Dags att piffa upp balkongen? Här är årets guide för att ta just din balkong till nya höjder.'
        />
      </div>
    </div>
  );
};

export default NewsSection;
