import React, { useEffect } from "react";
// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

// CARD
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

// json
import { blogsdata } from "../../assets/json/Blogsdata";

// IMAGES
import janusAdver from "../../assets/images/JanusAdvertisement.jpeg";

// REACT_ROUTER-DOM
import { useNavigate } from "react-router-dom";

// REDUX
import { getBlogs, getBlogsById } from "../../redux/actions/Blog";
import { useSelector } from "react-redux";
import Fullpageadvertisement from "../FullPageAdvertisement/Fullpageadvertisement";

const Blogs = () => {
  const navigate = useNavigate();

  const { Blogs } = useSelector((state) => state.BlogReducer);

  useEffect(() => {
    getBlogs();
  }, []);

  function createMarkup(htmlContent) {
    return { __html: htmlContent };
  }

  return (
    <Box sx={{ marginTop: { xs: "55px", sm: "55px", md: "90px", lg: "90px" } }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
        <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
          <Grid container>
            {/* Blogs */}
            <Grid
              item
              xs={12}
              sm={12}
              md={9.5}
              lg={9.5}
              // sx={{ backgroundColor: "yellow" }}
            >
              <Grid container spacing={2}>
                {Blogs &&
                  Blogs?.data?.map((item) => (
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <Box
                        sx={{
                          marginTop: {
                            xs: "20px",
                            sm: "20px",
                            md: "0px",
                            lg: "0px",
                          },
                          marginBottom: {
                            xs: "0px",
                            sm: "0px",
                            md: "10px",
                            lg: "10px",
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
                        }}
                      >
                        <Card
                          variant="outlined"
                          sx={{
                            borderTopLeftRadius: "150px",
                            borderTopRightRadius: "150px",
                            borderRadius: "170px 170px 0 0",
                            border: "2px solid #C02222",
                            background:
                              "linear-gradient(to bottom, #C02222 85%, #000)",
                          }}
                        >
                          <CardActionArea
                            onClick={() => {
                              // getBlogsById(item?._id);
                              navigate(`/blog/${item.engtitle}`, {state: {id: item?._id}});
                            }}
                          >
                            <Box>
                              <CardMedia
                                component="img"
                                height="340"
                                width="80"
                                image={item.photo}
                                alt="Main Image"
                                sx={{
                                  borderTopLeftRadius: "150px",
                                  borderTopRightRadius: "150px",
                                }}
                              />
                            </Box>
                            <CardContent>
                              <Box sx={{}}>
                                <Typography
                                  gutterBottom
                                  sx={{
                                    display: "-webkit-box",
                                    overflow: "hidden",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 2,
                                    color: "#fff",
                                    fontSize: "16px",
                                    fontSize: {
                                      xs: "16px",
                                      sm: "16px",
                                      md: "19px",
                                      lg: "19px",
                                    },
                                    fontFamily: " 'Mukta', sans-serif",
                                    fontWeight: "600",
                                    // textAlign: "justify",
                                    wordSpacing: "1px",
                                  }}
                                >
                                  {item.title}
                                </Typography>
                                <Typography
                                  color="text.secondary"
                                  sx={{
                                    display: "-webkit-box",
                                    overflow: "hidden",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 3,
                                    color: "#fff",
                                    fontSize: {
                                      xs: "16px",
                                      sm: "16px",
                                      md: "16px",
                                      lg: "16px",
                                    },
                                    fontWeight: "500",
                                    fontFamily: " 'Mukta', sans-serif",
                                    // textAlign: "justify"
                                  }}
                                  dangerouslySetInnerHTML={createMarkup(
                                    item.description
                                  )}
                                />
                              </Box>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Box>
                    </Grid>
                  ))}
              </Grid>
            </Grid>

            {/* Add */}
            <Grid
              item
              xs={12}
              sm={12}
              md={2.5}
              lg={2.5}
              sx={
                {
                  // backgroundColor: "green",
                }
              }
            >
              {/* <Box
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-end",
                    lg: "flex-end",
                  },
                  paddingLeft: {
                    xs: "10px",
                    sm: "10px",
                    md: "20px",
                    lg: "20px",
                  },
                  paddingRight: {
                    xs: "10px",
                    sm: "10px",
                    md: "0px",
                    lg: "0px",
                  },
                }}
              >
                <a
                  href="https://www.januskoncepts.com"
                  // href="https://www.youtube.com/uttaranchalwasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#F0F0F0",

                      marginTop: {
                        xs: "10px",
                        sm: "10px",
                        md: "0px",
                        lg: "0px",
                      },
                      marginBottom: {
                        xs: "40px",
                        sm: "40px",
                        md: "0px",
                        lg: "0px",
                      },
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "10px",
                            sm: "10px",
                            md: "9px",
                            lg: "9px",
                          },
                          fontWeight: "600",
                          textAlign: "center",
                          color: "black",
                        }}
                      >
                        ADVERTISEMENT
                      </Typography>
                    </Box>
                    <Box
                      component="img"
                      sx={{
                        width: {
                          xs: "200px",
                          sm: "200px",
                          md: "100%",
                          lg: "100%",
                        },
                        height: {
                          xs: "200px",
                          sm: "200px",
                          md: "100%",
                          lg: "100%",
                        },
                      }}
                      alt="redTriangleArrow"
                      src={janusAdver}
                    />
                  </Box>
                </a>
              </Box> */}
              <Fullpageadvertisement/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
      </Grid>
    </Box>
  );
};

export default Blogs;
