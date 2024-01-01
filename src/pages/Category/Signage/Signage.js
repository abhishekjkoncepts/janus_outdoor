import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, Button, Typography } from "@mui/material";

import "./Signage.css";

// CARD
import Cards from "../../Card/Cards";

// REDUX
import { useSelector } from "react-redux";
import { getProducts } from "../../../redux/actions/Outdoor";
import { useNavigate } from "react-router-dom";

export default function Signage() {
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");
  const [type, setType] = React.useState("");

  const { products } = useSelector((state) => state.OutdoorReducer);

  const navigate = useNavigate();

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
      <Box
        sx={{
          marginTop: { xs: "51px", sm: "51px", md: "0px", lg: "0px" },
        }}
      >
        <Grid container sx={{}}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box
              sx={{
                position: "absolute",
                width: { xs: "0%", sm: "0%", md: "100%", lg: "100%" },
              }}
            >
              <video autoPlay muted width="100%" controls={false} loop={true}>
                <source
                  src={require("../../../assets/video/VideoWithoutText.mp4")}
                />
              </video>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* BEST HOARDING GRID for full width */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid
          container
          sx={{
            zIndex: "100",
            marginTop: {
              xs: "30px",
              sm: "30px",
              md: "120px",
              lg: "120px",
            },
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={0.7}
            lg={0.7}
            // sx={{ backgroundColor: "blue" }}
          ></Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={10.6}
            lg={10.6}
            // sx={{ backgroundColor: "red" }}
          >
            <Box
            // sx={{width: { xs: "0%", sm: "0%", md: "100%", lg: "100%" },}}
            >
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "center",
                  },
                  alignItems: {
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "center",
                  },
                  fontSize: {
                    xs: "0px",
                    sm: "0px",
                    md: "80px",
                    lg: "80px",
                  },
                  fontWeight: {
                    xs: "400",
                    sm: "400",
                    md: "600",
                    lg: "600",
                  },
                  fontFamily: "Poppins, sans-serif",
                  color: "red",
                }}
              >
                Best Hoarding In
                <span style={{ color: "blue", fontSize: "120px" }}>
                  &nbsp; Delhi
                </span>
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "center",
                  },
                  alignItems: {
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "center",
                  },
                  fontSize: {
                    xs: "0px",
                    sm: "0px",
                    md: "30px",
                    lg: "30px",
                  },
                  fontWeight: {
                    xs: "400",
                    sm: "400",
                    md: "300",
                    lg: "300",
                  },
                  fontFamily: "Poppins, sans-serif",
                  color: "red",
                  marginTop: "-20px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </Typography>
            </Box>
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
      </Box>

      {/* BEST HOARDING GRID for mobile width */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid
          container
          sx={{
            marginTop: {
              xs: "-25px",
              sm: "-25px",
              md: "0px",
              lg: "0px",
            },

            backgroundColor: "#f5f5f5",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={0.7}
            lg={0.7}
            // sx={{ backgroundColor: "blue" }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={10.6}
            lg={10.6}
            // sx={{ backgroundColor: "red" }}
          >
            <Box>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "center",
                  },
                  alignItems: {
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "center",
                  },
                  fontSize: {
                    xs: "30px",
                    sm: "30px",
                    md: "0px",
                    lg: "0px",
                  },
                  fontWeight: {
                    xs: "500",
                    sm: "500",
                    md: "600",
                    lg: "600",
                  },
                  fontFamily: "Poppins, sans-serif",
                  color: "red",
                }}
              >
                India's Largest Outdoor Advertising Company
              </Typography>
            </Box>
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
      </Box>

      {/* DROP-DOWN GRID */}
      <Box
        sx={{
          marginTop: { xs: "0px", sm: "0px", md: "20px", lg: "20px" },
          // backgroundColor: { xs: "red", sm: "red",},
        }}
      >
        <Grid
          container
          sx={
            {
              // backgroundColor: { xs: "red",sm: "red",},
            }
          }
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            sx={
              {
                // backgroundColor: "orange",
              }
            }
          ></Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              backgroundColor: {
                xs: "#f5f5f5",
                sm: "#f5f5f5",
              },
              // marginTop: {
              //   xs: "20px",
              //   sm: "20px",
              // },
            }}
          >
            <Grid container sx={{ backgroundColor: "#f5f5f5" }}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "row",
                      sm: "row",
                      md: "row",
                      lg: "row",
                    },
                    justifyContent: {
                      xs: "space-around",
                      sm: "space-around",
                      md: "space-between",
                      lg: "space-between",
                    },
                    marginTop: "30px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "center", sm: "center" },
                      alignItems: { xs: "center", sm: "center" },
                    }}
                  >
                    <FormControl
                      sx={{
                        width: {
                          xs: "90px",
                          sm: "90px",
                          md: "200px",
                          lg: "200px",
                        },
                        height: {
                          xs: "0px",
                          sm: "0px",
                          md: "55px",
                          lg: "55px",
                        },
                        backgroundColor: "#fff",
                        borderRadius: "30px",
                      }}
                    >
                      <InputLabel
                        sx={{
                          color: "#000",
                          // borderColor: "#fff",
                          borderWidth: "2px solid #fff",
                          fontWeight: "300",
                        }}
                      >
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

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "center", sm: "center" },
                      alignItems: { xs: "center", sm: "center" },
                    }}
                  >
                    <FormControl
                      sx={{
                        width: {
                          xs: "90px",
                          sm: "90px",
                          md: "200px",
                          lg: "200px",
                        },
                        height: {
                          xs: "0px",
                          sm: "0px",
                          md: "55px",
                          lg: "55px",
                        },
                        backgroundColor: "#fff",
                        borderRadius: "30px",
                      }}
                    >
                      <InputLabel
                        sx={{
                          color: "#000",
                          // borderColor: "#fff",
                          borderWidth: "2px solid #fff",
                          fontWeight: "300",
                        }}
                      >
                        City
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={state}
                        label="state"
                        onChange={handleChange2}
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

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "center", sm: "center" },
                      alignItems: { xs: "center", sm: "center" },
                    }}
                  >
                    <FormControl
                      sx={{
                        width: {
                          xs: "90px",
                          sm: "90px",
                          md: "200px",
                          lg: "200px",
                        },
                        height: {
                          xs: "0px",
                          sm: "0px",
                          md: "55px",
                          lg: "55px",
                        },
                        backgroundColor: "#fff",
                        borderRadius: "30px",
                      }}
                    >
                      <InputLabel
                        sx={{
                          color: "#000",
                          // borderColor: "#fff",
                          borderWidth: "2px solid #fff",
                          fontWeight: "300",
                        }}
                      >
                        Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={state}
                        label="state"
                        onChange={handleChange3}
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
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
        //   sx={{ backgroundColor: "orange" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "40px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                height: "55px",
                marginTop: "0px",
                marginLeft: "10px",
                backgroundColor: "#fafafa",
                color: "#000",
                borderRadius: "30px",
                width: "100px",
              }}
            >
              SUBMIT
            </Button>
          </Box>
        </Grid>
      </Box>

      <Grid
        container
        sx={{
          marginTop: { xs: "70px", sm: "70px", md: "200px", lg: "200px" },
          marginBottom: "50px",
        }}
      >
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
          {/* <Grid container spacing={2}>
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
          </Grid> */}
          <Grid container spacing={2}>
            {products &&
              products
                .filter((item) => item.category === "Cinema") // Assuming there's a 'category' property indicating the product category
                .map((item) => (
                  <Cards
                    key={item.id} // Add a unique key for each mapped element
                    data={item}
                    onClick={() => {
                      navigate("/full-card");
                      console.log("hello world");
                    }}
                  />
                ))}
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
