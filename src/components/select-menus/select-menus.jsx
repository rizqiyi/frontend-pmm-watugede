import { getIn } from "formik";
import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

export const SelectFormField = ({
  field,
  id,
  form,
  label,
  options,
  ...props
}) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <FormControl fullWidth error={!!errorText}>
      <InputLabel>{label}</InputLabel>
      <Select {...field} {...props}>
        {options.map((opt, idx) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
};
