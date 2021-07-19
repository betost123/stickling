import { IconButton, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import NewsCard from "./components/NewsCard";
import plantStyling from "../assets/images/plantStyling.jpg";
import monstera from "../assets/images/monstera.jpg";
import balcony from "../assets/images/balcony.jpg";
import LeftArrowButtonIcon from "../icons/LeftArrowButtonIcon";
import RightArrowButtonIcon from "../icons/RightArrowButtonIcon";

const useStyles = makeStyles((theme) => ({
  newsTitle: {
    margin: theme.spacing(4),
    color: theme.palette.primary.main,
  },
  sliderContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  dots: {
    width: 21,
    height: 21,
    borderRadius: "50%",
    border: "2px solid #BEB5A2",
    background: theme.palette.info.dark,
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
    cursor: "pointer",
  },
  dotsPlacement: {
    display: "flex",
    justifyContent: "center",
  },
}));

const ButtonSlider = ({ onClick, icon }) => {
  return (
    <div>
      <IconButton onClick={onClick}>{icon}</IconButton>
    </div>
  );
};

//TODO: add some animations and stuff
const NewsSection = () => {
  const classes = useStyles();

  const dataLength = 2;
  const [slideIndex, setSlideIndex] = React.useState(0);

  const nextSlide = () => {
    if (slideIndex !== dataLength) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === 0) {
      setSlideIndex(dataLength);
    }
  };

  const previousSlide = () => {
    if (slideIndex !== dataLength) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === dataLength) {
      setSlideIndex(0);
    }
  };

  const onClickDot = (i) => {
    setSlideIndex(i);
  };

  return (
    <div>
      <Typography className={classes.newsTitle} variant='h1'>
        Nyheter
      </Typography>
      <div className={classes.sliderContainer}>
        <ButtonSlider onClick={previousSlide} icon={<LeftArrowButtonIcon />} />
        <NewsCard
          active={slideIndex === 0 ? true : false}
          image={monstera}
          title='Care guide - Monstera'
          description='In this section you will learn how to care for your Monsteras. They are generally very easy to care for, and the biggest pitfall is actually that you over-care for them!'
        />
        <NewsCard
          active={slideIndex === 1 ? true : false}
          image={plantStyling}
          title='Plant Styling'
          description='Vi listar våra bästa tips för att hitta rätt plantor till rätt hem! Hur mycket sol får din lägenhet, hur mycket takhöjd har du, hur mycket plats har du? Och vilken färg har väggarna, vilken nivå på skötsel eftersträvar du? Och självklart berättar vi vilka krukor som funkar. Läs mer för att få alla tips för en stylad lägenhet.'
        />
        <NewsCard
          active={slideIndex === 2 ? true : false}
          image={balcony}
          title='Balkongens blommor'
          description='Dags att piffa upp balkongen? Här är årets guide för att ta just din balkong till nya höjder.'
        />
        <ButtonSlider onClick={nextSlide} icon={<RightArrowButtonIcon />} />
      </div>
      <div className={classes.dotsPlacement}>
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            onClick={() => onClickDot(index)}
            className={classes.dots}
            style={{
              background: slideIndex === index ? "#FFDFBA" : undefined,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
