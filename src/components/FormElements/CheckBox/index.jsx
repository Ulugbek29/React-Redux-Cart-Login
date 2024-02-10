// Checkbox.js
import React from "react";
import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";
const Checkbox = ({
  control,
  name,
  label,
  disableHelperText = false,
  required = false,
  rules = {},
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={false}
      rules={{
        required: required ? "This is a required field" : false,
        ...rules,
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div>
          <FormControlLabel
            control={
              <MuiCheckbox
                checked={value ?? false}
                onChange={(e) => {
                  onChange(e.target.checked);
                }}
              />
            }
            label={label}
          />
          {!disableHelperText && (
            <p className="text-red-500">{error?.message ?? ""}</p>
          )}
        </div>
      )}
    />
  );
};

export default Checkbox;
