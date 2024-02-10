import { TextField, FormHelperText } from "@mui/material";
import { Controller } from "react-hook-form";


const styleInput = {
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px'
};

const HFTextField = ({
  control,
  name = "",
  disabledHelperText = false,
  required = false,
  rules = {},
  inputStyle,
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      rules={{
        required: required ? "This is a required field" : false,
        ...rules,
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div>
          <TextField
            size="mediom"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            name={name}
            error={error}
            InputProps={{
              style: {...styleInput, ...inputStyle},
            }}
            
            // helperText={!disabledHelperText && (error?.message ?? ' ')}
            {...props}
          />
          {!disabledHelperText && (
              <FormHelperText error>
                {error?.message ? error?.message : ""}
              </FormHelperText>
            )}
        </div>
      )}
    ></Controller>
  );
};

export default HFTextField;
