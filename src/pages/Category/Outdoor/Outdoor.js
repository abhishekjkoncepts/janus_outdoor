import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, Button, Typography } from "@mui/material";

import "./Outdoor.css";

// CARD
import Cards from "../../Card/Cards";

// REDUX
import { useSelector } from "react-redux";
import { getProducts } from "../../../redux/actions/Outdoor";
import { useNavigate } from "react-router-dom";

export default function Outdoor() {
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");
  const [type, setType] = React.useState("");

  const { products } = useSelector((state) => state.OutdoorReducer);

  const navigate=useNavigate();

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleChange2 = (event) => {
    setCity(event.target.value);
  };
  const handleChange3 = (event) => {
    setType(event.target.value);
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {/* VIDEO */}
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box 
          sx={{position:"absolute" , }}
          >
            <video autoPlay muted width="100%" controls={false} loop={true}>
              <source
                src={require("../../../assets/video/VideoWithoutText.mp4")}
              />
            </video>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "300px",
        }}
      >
        <Box>
          <FormControl
            sx={{
              m: 1,
              minWidth: 400,
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
              <MenuItem value={10} sx={{ color: "#000" }}>
                Delhi
              </MenuItem>
              <MenuItem value={20} sx={{ color: "#000" }}>
                Uttar Pradesh
              </MenuItem>
              <MenuItem value={30} sx={{ color: "#000" }}>
                Goa
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box>
          <FormControl
            sx={{
              m: 1,
              minWidth: 300,
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
              minWidth: 300,
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
          <Button
            variant="contained"
            sx={{
              height: "55px",
              marginTop: "8px",
              marginLeft: "10px",
              backgroundColor: "#fafafa",
              color: "#000",
            }}
          >
            SUBMIT
          </Button>
        </Box>
      </Box>

      <Grid container sx={{marginTop:"370px" , marginBottom:"50px"}}>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          // sx={{ backgroundColor: "red" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10.6}
          lg={10.6}
          // sx={{ backgroundColor: "yellow" }}
        >
          <Grid container spacing={2}>
            {products &&
              products.map((item) => {
                return (
                  <Cards
                    data={item}
                    onClick={() => {
                      navigate("/full-card");
                      console.log("hello world");
                    }}
                  />
                );
              })}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          // sx={{ backgroundColor: "green" }}
        ></Grid>
      </Grid>
    </>
  );
}
