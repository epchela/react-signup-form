import { Checkbox, FormControlLabel } from "@material-ui/core";
import { ChangeEvent, useEffect, useState } from "react";
import { Props } from "../../Field/types";

function Agreement({ setFormValue }: Props<boolean>) {
  const [value, setValue] = useState(false);
  useEffect(() => {
    setFormValue(value);
  }, [setFormValue, value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.checked);
  };
  return (
    <FormControlLabel
      control={
        <Checkbox
          id="agreement"
          color="primary"
          checked={value}
          onChange={handleChange}
          name="agreement"
        />
      }
      label="Принимаю условия использования"
    />
  );
}

export default Agreement;
