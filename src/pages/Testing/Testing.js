import React from "react";
import { Box, Typography, Grid } from "@mui/material";

// Dropdown;
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./Testing.css";
import { Dropdown } from "bootstrap";

const Testing = () => {
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");
  const [type, setType] = React.useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleChange2 = (event) => {
    setCity(event.target.value);
  };
  const handleChange3 = (event) => {
    setType(event.target.value);
  };
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box className="App">
          <video autoPlay muted width="100%" controls={false} loop={true}>
            <source src={require("../../assets/video/VideoWithoutText.mp4")} />
          </video>
          <Box sx={{display:"flex" , flexDirection:"row" ,justifyContent:"center" , alignItems:"center" , marginTop:"300px"}}>
            <Box>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 200,
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                }}
              >
                <InputLabel sx={{ color: "#000", borderColor: "#fff" }}>
                  State
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={state}
                  label="state"
                  onChange={handleChange}
                >
                  <MenuItem value={10} sx={{ color: "#000" }}>Delhi</MenuItem>
                  <MenuItem value={20} sx={{ color: "#000" }}>Uttar Pradesh</MenuItem>
                  <MenuItem value={30} sx={{ color: "#000" }}>Goa</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 120,
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                }}
              >
                <InputLabel sx={{ color: "#000", borderColor: "#fff" }}>
                  City
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={city}
                  label=""
                  onChange={handleChange2}
                >
                  <MenuItem value="" sx={{ color: "#000" }}>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Muzaffarnagar</MenuItem>
                  <MenuItem value={20}>Meeruth</MenuItem>
                  <MenuItem value={30}>Shamli</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 120,
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                }}
              >
                <InputLabel sx={{ color: "#000", borderColor: "#fff" }}>
                  type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={type}
                  label="Age"
                  onChange={handleChange3}
                >
                  <MenuItem value="" sx={{ color: "#000" }}>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>type 1</MenuItem>
                  <MenuItem value={20}>type 2</MenuItem>
                  <MenuItem value={30}>type 3</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Testing;
