import { Dialog, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import PrimaryButton from "../../components/PrimaryButton";
import TextField from "../../components/TextField";
import { isValidEmail } from "../../utils/isValidEmail";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    background: theme.palette.secondary.main,
    "box-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
    width: 400,

    [theme.breakpoints.down("sm")]: {
      width: 250,
    },
  },
  title: {
    color: theme.palette.primary.main,
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
  textFieldIndicatorText: {
    color: theme.palette.primary.dark,
    margin: theme.spacing(1),
  },
  noAccountText: {
    color: theme.palette.info.text,
    textAlign: "center",
  },
}));

const LogInModal = ({ isOpen, handleClose }) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [validEmail, setValidEmail] = React.useState(false);
  const [password, setPassword] = React.useState("");

  const onChangeEmail = (e) => {
    setValidEmail(isValidEmail(e));
    setEmail(e);
  };

  const onChangePassword = (p) => {
    setPassword(p);
  };

  const onClickLogIn = () => {
    console.log("email: ", email, "passwird: ", password);
  };

  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose}>
        <div className={classes.root}>
          <div>
            <Typography className={classes.title} variant='h1'>
              Stickling
            </Typography>
          </div>
          <Typography
            className={classes.textFieldIndicatorText}
            variant='body1'
          >
            Epostadress
          </Typography>
          <TextField
            placeholder='Ange e-post'
            isValid={validEmail}
            onChange={(e) => onChangeEmail(e.target.value)}
          />
          <br />
          <Typography
            className={classes.textFieldIndicatorText}
            variant='body1'
          >
            Lösenord
          </Typography>
          <TextField
            placeholder='Ange lösenord'
            isValid={password.length > 0 ? true : false}
            onChange={(e) => onChangePassword(e.target.value)}
          />
          <br />
          <PrimaryButton
            buttonText='Logga in'
            onClick={onClickLogIn}
            fullWidth
          />
          <br />
          <br />
          <Typography className={classes.noAccountText} variant='overline'>
            Saknar du konto?
          </Typography>
        </div>
      </Dialog>
    </div>
  );
};

export default LogInModal;
