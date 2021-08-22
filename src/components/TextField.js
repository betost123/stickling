import {
  IconButton,
  InputAdornment,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  textfield: {
    borderRadius: 8,
    background: theme.palette.common.white,
    border: `1px solid ${theme.palette.warning.light}`,
    padding: theme.spacing(1),
    color: theme.palette.info.text,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 20,
  },
}));

const TextField = ({
  placeholder,
  defaultValue,
  endIcon,
  onClickEndIcon,
  disabled,
  onChange,
  isValid,
  errorMessage,
  ...props
}) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <InputBase
        className={classes.textfield}
        placeholder={placeholder}
        defaultValue={defaultValue}
        style={{
          borderColor: isValid ? theme.palette.primary.dark : undefined,
        }}
        inputProps={{ "aria-label": "naked" }}
        endAdornment={
          endIcon && (
            <InputAdornment position='end'>
              <IconButton
                style={{ display: "flex", justifyContent: "center" }}
                onClick={onClickEndIcon}
              >
                {endIcon}
              </IconButton>
            </InputAdornment>
          )
        }
        onChange={onChange}
        disabled={disabled}
        fullWidth
        {...props}
      />
      <Typography style={{ color: "#B00020" }} variant='subtitle1'>
        {errorMessage}
      </Typography>
    </>
  );
};

TextField.propTypes = {
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  endIcon: PropTypes.any,
  onClickEndIcon: PropTypes.func,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
};

export default TextField;
