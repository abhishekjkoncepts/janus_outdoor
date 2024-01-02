import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, Button, Typography } from "@mui/material";

// TYPE-ANIMATION
import { TypeAnimation } from "react-type-animation";

import "./Outdoor.css";

// CARD
import Cards from "../../Card/Cards";

// REDUX
import { useSelector } from "react-redux";
import { getProducts, getProductsByState } from "../../../redux/actions/Outdoor";
import { useNavigate } from "react-router-dom";

export default function Outdoor() {
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");
  const [type, setType] = React.useState("");

  const { products } = useSelector((state) => state.OutdoorReducer);

  const navigate = useNavigate();

  const handleChange = (event) => {
    console.log(event.target.value);
    setState(event.target.value);
  };

  const handleChange2 = (event) => {
    console.log(event.target.value);
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box>
                <Typography
                  sx={{
                    display: "flex",
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
                    color: "#fff",
                    // position: "sticky",
                  }}
                >
                  Hoardings In Delhi
                </Typography>
                </Box>
                
                {/* <Box sx={{marginLeft:"550px"}}>
                <TypeAnimation
                  sequence={[
                    "Delhi",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Mumbai",
                    1000,
                    "Banglore",
                    1000,
                    "Pune",
                    1000,
                    "Hyderabad",
                    1000,
                    "Chennai",
                    1000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  speed={50}
                  deletionSpeed={70}
                  style={{
                    // fontSize: "2em",
                    display: "inline-block",
                    color: "#fff",
                    // marginTop: "20px",
                    fontSize: "80px",
                    fontWeight: "600",
                    color: "#fff",
                    fontFamily: "Poppins, sans-serif",
                  }}
                  repeat={Infinity}
                />
                </Box> */}
              </Box>
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
                    md: "20px",
                    lg: "20px",
                  },
                  fontWeight: {
                    xs: "400",
                    sm: "400",
                    md: "500",
                    lg: "500",
                  },
                  fontFamily: "Poppins, sans-serif",
                  color: "#fff",
                  marginTop: "-5px",
                }}
              >
               Outdoor Advertising Company
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
                     color='success'
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
                        backgroundColor: "#F0F0F0",
                        borderRadius: "30px",
                      }}
                    >
                      <InputLabel
                        sx={{
                          color: "#000",
                          // borderColor: "#fff",
                          borderWidth: "2px solid #",
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
                        <MenuItem value={'Andra Pradesh'} sx={{ color: "#000" }}>
                          Andhra Pradesh
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
                        backgroundColor: "#F0F0F0",
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
                        <MenuItem value={'Anantapur'} sx={{ color: "#000" }}>
                          Anantapur
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
                        backgroundColor: "#F0F0F0",
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
          // sx={{ backgroundColor: "orange" }}
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
              onClick={()=>{
                getProductsByState(state, city)}}
            >
              SUBMIT
            </Button>
          </Box>
        </Grid>
      </Box>

      <Grid
        container
        sx={{
          marginTop: { xs: "70px", sm: "70px", md: "300px", lg: "300px" },
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
          <Grid container spacing={2}>
            {products &&
              products
                .filter((item) => item.category === "Outdoor") // Assuming there's a 'category' property indicating the product category
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
