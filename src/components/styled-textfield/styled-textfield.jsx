import { InputAdornment, TextField } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styled.textfield.style";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import { getIn } from "formik";

export const StyledTextField = (props) => {
  const classes = useStyles();
  return (
    <TextField
      InputLabelProps={{
        className: classes.input,
      }}
      InputProps={{
        classes,
        disableUnderline: true,
      }}
      {...props}
    />
  );
};

export const TextFormField = ({ field, form, ...props }) => {
  const classes = useStyles();
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <TextField
      InputLabelProps={{
        className: classes.input,
      }}
      InputProps={{
        classes,
        disableUnderline: true,
      }}
      helperText={errorText}
      error={!!errorText}
      {...field}
      {...props}
    />
  );
};

export const PasswordField = (props) => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <TextField
      InputLabelProps={{
        className: classes.input,
      }}
      type={values.showPassword ? "text" : "password"}
      InputProps={{
        classes,
        disableUnderline: true,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? (
                <Visibility color="primary" />
              ) : (
                <VisibilityOff />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};
