import React, { useState, useEffect } from "react";
// MATERIAL-UI
import { Typography, Grid, Box, Button } from "@mui/material";

// REACT-ROUTER-DOM
import { useParams } from "react-router-dom";
import { getProductsByState } from "../../redux/actions/Home";

// TOASTI-FY
import { ToastContainer, toast } from "react-toastify";

import Cards from "../Card/Cards";

import Popupcomponent from "../PopUp/Popupcomponent";

// IMAGES
import comingsoon from "../../assets/images/comingsoon.png";

import { useNavigate } from "react-router-dom";
const HoardingIn = () => {
  const { param } = useParams();
  const params = param.split("in-");

  const [DATA, setDATA] = useState(null);
  const [ProductId, setProductId] = useState("");

  useEffect(() => {
    console.log(params);
    getProductsByState(params[params.length - 1]).then((res) => {
      console.log(res);
      setDATA(res);
      setProductId(res._id);
    });
  }, []);

  const navigate = useNavigate();

  // POP-UP
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // Toastify
  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return DATA === null || DATA?.length === 0 ? (
    <>
      {isOpen && (
        <Popupcomponent
          ProductId={DATA === null || DATA?.length === 0 ? "n/a" : ProductId}
          handleClose={togglePopup}
        />
      )}
      <Grid container sx={{ marginTop: "65px" }}>
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
          // sx={{ backgroundColor: "green" }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              // sx={{ backgroundColor: "orange" }}
            >
              <Box sx={{}}>
                <Box
                  component="img"
                  sx={{
                    width: {
                      // xs: "400px",
                      xs: "100%",
                      // sm: "400px",
                      sm: "100%",
                      md: "530px",
                      lg: "530px",
                    },
                    height: {
                      // xs: "300px",
                      xs: "100%",
                      // sm: "300px",
                      md: "400px",
                      lg: "400px",
                    },
                    paddingLeft: {
                      xs: "10px",
                      sm: "10px",
                      md: "0px",
                      lg: "0px",
                    },
                    paddingRight: {
                      xs: "10px",
                      sm: "10px",
                      md: "0px",
                      lg: "0px",
                    },
                    marginTop: {
                      xs: "5px",
                      sm: "5px",
                      md: "20px",
                      lg: "20px",
                    },
                    marginBottom: {
                      xs: "10px",
                      sm: "10px",
                      md: "20px",
                      lg: "20px",
                    },
                    display: "flex",
                    borderRadius: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                    border: "2px solid red",
                  }}
                  alt="add_img1"
                  src={comingsoon}
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              // sx={{ backgroundColor: "grey" }}
            >
              <Box
                sx={{
                  marginTop: { xs: "5px", sm: "5px", md: "20px", lg: "20px" },
                  marginBottom: {
                    xs: "5px",
                    sm: "5px",
                    md: "20px",
                    lg: "20px",
                  },
                }}
              >
                <Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "17px",
                          sm: "17px",
                          md: "20px",
                          lg: "20px",
                        },
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: {
                          xs: "500",
                          sm: "500",
                          md: "400",
                          lg: "400",
                        },
                        display: "flex",
                        alignContent: {
                          xs: "center",
                          sm: "center",
                          md: "flex-end",
                          lg: "flex-end",
                        },
                        alignItems: {
                          xs: "center",
                          sm: "center",
                          md: "flex-start",
                          lg: "flex-start",
                        },
                        justifyContent: {
                          xs: "flex-start",
                          sm: "flex-start",
                          md: "flex-start",
                          lg: "flex-start",
                        },
                        lineHeight: {
                          xs: "20px",
                          sm: "12px",
                          md: "12px",
                          lg: "12px",
                        },
                        marginTop: {
                          xs: "5px",
                          sm: "5px",
                          md: "30px",
                          lg: "30px",
                        },
                        color: "rgb(79, 74, 76)",
                        marginLeft: {
                          xs: "10px",
                          sm: "10px",
                          md: "0px",
                          lg: "0px",
                        },
                      }}
                    >
                      {/* {DATA?.category.toUpperCase()} */}
                      {/* {DATA?.subcat} */}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: {
                        xs: "25px",
                        sm: "25px",
                        md: "30px",
                        lg: "30px",
                      },
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: {
                        xs: "500",
                        sm: "500",
                        md: "500",
                        lg: "500",
                      },
                      display: "flex",
                      alignContent: {
                        xs: "center",
                        sm: "center",
                        md: "flex-end",
                        lg: "flex-end",
                      },
                      alignItems: {
                        xs: "center",
                        sm: "center",
                        md: "flex-start",
                        lg: "flex-start",
                      },
                      justifyContent: {
                        xs: "flex-start",
                        sm: "flex-start",
                        md: "flex-start",
                        lg: "flex-start",
                      },
                      lineHeight: {
                        xs: "30px",
                        sm: "30px",
                        md: "34px",
                        lg: "34px",
                      },
                      marginTop: {
                        xs: "5px",
                        sm: "5px",
                        md: "15px",
                        lg: "15px",
                      },
                      marginLeft: {
                        xs: "10px",
                        sm: "10px",
                        md: "0px",
                        lg: "0px",
                      },
                    }}
                  >
                    {/* {DATA?.address} */}
                  </Typography>
                </Box>

                {/* UNIQUE CODE */}
                <Box
                  sx={{
                    marginTop: "15px",
                    paddingLeft: {
                      xs: "10px",
                      sm: "10px",
                      md: "0px",
                      lg: "0px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "13px",
                          sm: "13px",
                          md: "14px",
                          lg: "14px",
                        },
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "600",
                        display: "flex",
                        color: "rgb(79, 74, 76)",
                      }}
                    >
                      {/* Unique code : */}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "14px",
                          sm: "14px",
                          md: "16px",
                          lg: "16px",
                        },
                        marginTop: {
                          xs: "0px",
                          sm: "0px",
                          md: "-1px",
                          lg: "-1px",
                        },
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "700",
                        display: "flex",
                      }}
                    >
                      {/* &nbsp;{DATA?.code} */}
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: "15px",
                    paddingLeft: {
                      xs: "10px",
                      sm: "10px",
                      md: "0px",
                      lg: "0px",
                    },
                    paddingRight: {
                      xs: "10px",
                      sm: "10px",
                      md: "0px",
                      lg: "0px",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "13px",
                            sm: "13px",
                            md: "14px",
                            lg: "14px",
                          },
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "600",
                          display: "flex",
                          color: "rgb(79, 74, 76)",
                        }}
                      >
                        {/* Category */}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "14px",
                            sm: "14px",
                            md: "16px",
                            lg: "16px",
                          },
                          marginTop: {
                            xs: "5px",
                            sm: "5px",
                            md: "5px",
                            lg: "5px",
                          },
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "700",
                          display: "flex",
                        }}
                      >
                        {/* {DATA?.category} */}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "13px",
                            sm: "13px",
                            md: "14px",
                            lg: "14px",
                          },
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "600",
                          display: "flex",
                          color: "rgb(79, 74, 76)",
                        }}
                      >
                        {/* Size */}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "14px",
                            sm: "14px",
                            md: "16px",
                            lg: "16px",
                          },
                          marginTop: {
                            xs: "5px",
                            sm: "5px",
                            md: "5px",
                            lg: "5px",
                          },
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "700",
                          display: "flex",
                        }}
                      >
                        {/* {DATA?.heightwidth} */}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "13px",
                            sm: "13px",
                            md: "14px",
                            lg: "14px",
                          },
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "600",
                          display: "flex",
                          color: "rgb(79, 74, 76)",
                        }}
                      >
                        {/* Illumination */}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "14px",
                            sm: "14px",
                            md: "16px",
                            lg: "16px",
                          },
                          marginTop: {
                            xs: "5px",
                            sm: "5px",
                            md: "5px",
                            lg: "5px",
                          },
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "700",
                          display: "flex",
                        }}
                      >
                        {/* {DATA?.illumination} */}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "13px",
                            sm: "13px",
                            md: "14px",
                            lg: "14px",
                          },
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "600",
                          display: "flex",
                          color: "rgb(79, 74, 76)",
                        }}
                      >
                        {/* Total Area */}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "14px",
                            sm: "14px",
                            md: "16px",
                            lg: "16px",
                          },
                          marginTop: {
                            xs: "5px",
                            sm: "5px",
                            md: "5px",
                            lg: "5px",
                          },
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "700",
                          display: "flex",
                        }}
                      >
                        {/* {DATA?.totalsqft} sq. ft. */}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    marginTop: {
                      xs: "14px",
                      sm: "14px",
                      md: "20px",
                      lg: "20px",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "15px",
                        sm: "15px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "400",
                      display: "flex",
                      // textAlign: "justify",
                      alignContent: {
                        xs: "center",
                        sm: "center",
                        md: "flex-end",
                        lg: "flex-end",
                      },
                      alignItems: {
                        xs: "center",
                        sm: "center",
                        md: "flex-start",
                        lg: "flex-start",
                      },
                      justifyContent: {
                        xs: "center",
                        sm: "center",
                        md: "flex-start",
                        lg: "flex-start",
                      },
                      color: "rgb(55, 52, 53)",
                      paddingLeft: {
                        xs: "10px",
                        sm: "10px",
                        md: "0px",
                        lg: "0px",
                      },
                      color: "rgb(55, 52, 53)",
                      paddingRight: {
                        xs: "10px",
                        sm: "10px",
                        md: "0px",
                        lg: "0px",
                      },
                    }}
                  >
                    {/* {DATA?.desc} */}
                    Elevate your brand recall and broaden your reach with
                    strategically placed hoardings in {params[params.length - 1]}. Positioned in
                    high-traffic zones with substantial footfall, these
                    promotional materials guarantee significant visibility among
                    bystanders, pedestrians, and travelers.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xs: "center",
                      sm: "center",
                      md: "flex-start",
                      lg: "flex-start",
                    },
                    paddingLeft: {
                      xs: "10px",
                      sm: "10px",
                      md: "0px",
                      lg: "0px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      marginTop: {
                        xs: "15px",
                        sm: "15px",
                        md: "20px",
                        lg: "20px",
                      },
                      marginBottom: {
                        xs: "10px",
                        sm: "10px",
                        md: "20px",
                        lg: "20px",
                      },
                      display: "flex",
                      justifyContent: {
                        xs: "center",
                        sm: "center",
                        md: "center",
                        lg: "center",
                      },
                      alignItems: "center",
                      width: {
                        xs: "100px",
                        sm: "100px",
                        md: "115px",
                        lg: "115px",
                      },
                      height: {
                        xs: "40px",
                        sm: "40px",
                        md: "40px",
                        lg: "40px",
                      },
                      backgroundColor: "#C02222",
                      borderRadius: "20px",
                    }}
                    onClick={togglePopup}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "13px",
                          sm: "13px",
                          md: "15px",
                          lg: "15px",
                        },
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "600",
                        color: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignitems: "center",
                      }}
                    >
                      ENQUIRY
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          // sx={{ backgroundColor: "yellow" }}
        ></Grid>
      </Grid>
    </>
  ) : (
    // <p>{JSON.stringify(DATA)}</p>
    <Box sx={{marginTop:"90px"}}>
      <Grid container>
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
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: { xs: "-20px", sm: "-20px", md: "-50px", lg: "-50px" },
              marginBottom: { xs: "30px", sm: "30px", md: "40px", lg: "40px" },
            }}
          >
            {DATA &&
              DATA.map((item) => (
                <Cards
                  key={item.id} // Add a unique key for each mapped element
                  data={item}
                  onClick={() => {
                    navigate(
                      `/${
                        item?.urlcat?.toLowerCase()
                          ? item?.urlcat?.toLowerCase()
                          : item?.urlcat
                      }/${item?.url ? item?.url : item?.address}/`,
                      { state: { id: item._id } }
                    );
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
    </Box>
  );
};

export default HoardingIn;
