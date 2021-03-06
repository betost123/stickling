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
          description='Vi listar v??ra b??sta tips f??r att hitta r??tt plantor till r??tt hem! Hur mycket sol f??r din l??genhet, hur mycket takh??jd har du, hur mycket plats har du? Och vilken f??rg har v??ggarna, vilken niv?? p?? sk??tsel efterstr??var du? Och sj??lvklart ber??ttar vi vilka krukor som funkar. L??s mer f??r att f?? alla tips f??r en stylad l??genhet.'
        />
        <NewsCard
          active={slideIndex === 2 ? true : false}
          image={balcony}
          title='Balkongens blommor'
          description='Dags att piffa upp balkongen? H??r ??r ??rets guide f??r att ta just din balkong till nya h??jder.'
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
