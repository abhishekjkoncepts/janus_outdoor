import React from "react";
import { Box, Typography, TextField, MenuItem } from "@mui/material";


import { FormControl, InputLabel, Input , FormHelperText } from "@mui/material";
const Testing = () => {
  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
    </div>
  );
};

export default Testing;
