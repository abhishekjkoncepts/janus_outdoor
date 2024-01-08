import React, { useState } from "react";

// MUI
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Button,
  Menu,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

// REACT_ROUTER_DOM
import { Link, useNavigate } from "react-router-dom";

// IMAGES
import janusLogo from "../../assets/images/janusLogo.png";
import dropdownicon from "../../assets/images/dropDownIcon.png";

// CSS
import "./Header.css";
import { Directions } from "@mui/icons-material";

const buttonHoverStyle = {
  "&:hover": {
    cursor: "pointer",
    color: "red",
  },
};

const drawerWidth = 240;
const navItems = [
  {
    to: "/",
    name: "HOME",
  },
  {
    to: "/aboutus",
    name: "ABOUT US",
  },
  {
    // to: "/sports",
    name: "OUR SERVICES",
  },
  {
    to: "/contactus",
    name: "CONTACT US",
  },
  {
    to: "/blogs",
    name: "BLOGS",
  },
];

function Header(props) {
  // dropdwon
  const [anchorEl, setAnchorEl] = useState(false);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  // dropdwon

  const navigate = useNavigate();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        //  backgroundColor: "#011e29",
        backgroundColor: "#080808",
        height: "100%",
      }}
    >
      <Link
        to={"/"}
        style={{
          flexGrow: 1,
          display: { xs: "none", sm: "block" },
          textDecoration: "none",
          color: "#fff",
          ...buttonHoverStyle,
        }}
      >
        <Box
          component="img"
          sx={{
            width: {
              xs: "60px",
              sm: "60px",
              md: "70px",
              lg: "70px",
            },
            height: {
              xs: "40px",
              sm: "40px",
              md: "50px",
              lg: "50px",
            },
            marginLeft: { xs: "15px", sm: "15px", md: "43px", lg: "43px" },
            marginTop: { xs: "5px", sm: "5px", md: "7px", lg: "7px" },
          }}
          alt="janusLogo"
          src={janusLogo}
        />
      </Link>
      {/* <Divider sx={{ backgroundColor: "#fff" }} /> */}
      <Divider sx={{ backgroundColor: "#C02222", height: "2px" }} />
      <List>
        {navItems.map((item, index) => {
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton
                sx={{ textAlign: "center", borderBottom: "1px solid #C02222" }}
                onClick={() => {
                  navigate(item?.to);
                }}
              >
                <Box sx={{}}>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: "500",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {item?.name}
                  </Typography>
                </Box>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        // style={{ backgroundColor: "#011e29" }}
        sx={{
          backgroundColor: {
            xs: "black",
            sm: "black",
            md: "rgb(8,8,8, 0.4)",
            lg: "rgb(8,8,8, 0.4)",
          },
        }}
        // sx={{ backgroundColor: "#05445c" }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link
            to={"/"}
            style={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              textDecoration: "none",
              color: "#fff",
              ...buttonHoverStyle,
            }}
          >
            <Box
              component="img"
              sx={{
                width: {
                  xs: "60px",
                  sm: "60px",
                  md: "70px",
                  lg: "70px",
                },
                height: {
                  xs: "40px",
                  sm: "40px",
                  md: "50px",
                  lg: "50px",
                },
                marginLeft: {
                  xs: "100px",
                  sm: "100px",
                  md: "43px",
                  lg: "43px",
                },
                marginTop: { xs: "5px", sm: "5px", md: "7px", lg: "7px" },
              }}
              alt="redTriangleArrow"
              src={janusLogo}
            />
          </Link>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                // marginRight: "50px",
                marginRight: "44px",
                justifyContent: "space-between",
                marginTop: "30px",
              }}
            >
              <Button component={Link} to="">
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "500",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  HOME
                </Typography>
              </Button>

              <Box sx={{ paddingLeft: "30px" }}>
                <Button component={Link} to="/aboutus">
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: "500",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    ABOUT US
                  </Typography>
                </Button>
              </Box>

              {/* Dropdown */}
              <Box sx={{ paddingLeft: "30px", marginTop: "6px" }}>
                <Box
                  sx={{ display: "flex", flexDirection: "row" }}
                  onClick={() => navigate("/our-service")}
                >
                  <Box>
                    <Typography
                      aria-controls="simple-menu"
                      aria-haspopup="true"
                      sx={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: "500",
                        fontFamily: "Poppins, sans-serif",
                      }}
                      onMouseOver={handleOpenMenu}
                    >
                      OUR SERVICES
                    </Typography>
                  </Box>
                  <Box>
                    <img
                      src={dropdownicon}
                      style={{
                        width: "10px",
                        height: "5px",
                        marginLeft: "5px",
                        marginBottom: "2px",
                      }}
                    />
                  </Box>
                </Box>

                <Menu
                  sx={{ marginTop: "9px" }}
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleCloseMenu}
                  MenuListProps={{ onMouseLeave: handleCloseMenu }}
                >
                  <Box sx={{ width: "200px" }}>
                    {/* outdoor */}
                    <Box sx={{ marginTop: "5px" }}>
                      <Link to={"/outdoor"} style={{ textDecoration: "none" }}>
                        <Typography
                          sx={{
                            marginLeft: "20px",
                            paddingTop: "1px",
                            paddingBottom: "1px",
                            color: "#000",
                            "&:hover": {
                              color: "red",
                              cursor: "pointer",
                            },
                            fontSize: "15px",
                            fontWeight: "600",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          OUTDOOR
                        </Typography>
                      </Link>
                    </Box>

                    {/* cinema*/}
                    <Box sx={{}}>
                      <Link to={"/cinema"} style={{ textDecoration: "none" }}>
                        <Typography
                          sx={{
                            marginLeft: "20px",
                            paddingTop: "1px",
                            paddingBottom: "1px",
                            color: "#000",
                            "&:hover": {
                              color: "red",
                              cursor: "pointer",
                            },
                            fontSize: "15px",
                            fontWeight: "600",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          CINEMA
                        </Typography>
                      </Link>
                    </Box>

                    {/* Airport branding */}
                    <Box sx={{}}>
                      <Link
                        to={"/airport-branding"}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            marginLeft: "20px",
                            paddingTop: "1px",
                            paddingBottom: "1px",
                            color: "#000",
                            "&:hover": {
                              color: "red",
                              cursor: "pointer",
                            },
                            fontSize: "15px",
                            fontWeight: "600",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          AIRPORT BRANDING
                        </Typography>
                      </Link>
                    </Box>

                    {/* SIgnage */}
                    <Box sx={{}}>
                      <Link to={"/signage"} style={{ textDecoration: "none" }}>
                        <Typography
                          sx={{
                            marginLeft: "20px",
                            paddingTop: "1px",
                            paddingBottom: "1px",
                            color: "#000",
                            "&:hover": {
                              color: "red",
                              cursor: "pointer",
                            },
                            fontSize: "15px",
                            fontWeight: "600",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          SIGNAGE
                        </Typography>
                      </Link>
                    </Box>

                    {/* Billboard */}
                    {/* <Box>
                        <Link
                          to={"/billboard"}
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{
                              marginLeft: "20px",
                              paddingTop: "1px",
                              paddingBottom: "1px",
                              color: "#000",
                              "&:hover": {
                                color: "red",
                                cursor: "pointer",
                              },
                              fontSize: "15px",
                              fontWeight: "600",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            BILLBOARD
                          </Typography>
                        </Link>
                      </Box> */}

                    {/* Transit media */}
                    {/* <Box>
                        <Link
                          to={"/transitmedia"}
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{
                              marginLeft: "20px",
                              paddingTop: "1px",
                              paddingBottom: "1px",
                              color: "#000",
                              "&:hover": {
                                color: "red",
                                cursor: "pointer",
                              },
                              fontSize: "15px",
                              fontWeight: "600",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            TRANSIT MEDIA
                          </Typography>
                        </Link>
                      </Box> */}

                    {/* Digital -Billboard */}
                    {/* <Box>
                        <Link
                          to={"/digital-billboard"}
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{
                              marginLeft: "20px",
                              paddingTop: "1px",
                              paddingBottom: "1px",
                              color: "#000",
                              "&:hover": {
                                color: "red",
                                cursor: "pointer",
                              },
                              fontSize: "15px",
                              fontWeight: "600",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            DIGITAL BILLBOARD
                          </Typography>
                        </Link>
                      </Box> */}

                    {/* Mallmedia */}
                    {/* <Box>
                        <Link
                          to={"/mallmedia"}
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{
                              marginLeft: "20px",
                              paddingTop: "1px",
                              paddingBottom: "1px",
                              color: "#000",
                              "&:hover": {
                                color: "red",
                                cursor: "pointer",
                              },
                              fontSize: "15px",
                              fontWeight: "600",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            MALL MEDIA
                          </Typography>
                        </Link>
                      </Box> */}

                    {/* Inflight banding */}
                    {/* <Box>
                        <Link
                          to={"/inflight-branding"}
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{
                              marginLeft: "20px",
                              paddingTop: "1px",
                              paddingBottom: "1px",
                              color: "#000",
                              "&:hover": {
                                color: "red",
                                cursor: "pointer",
                              },
                              fontSize: "15px",
                              fontWeight: "600",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            INFLIGHT BRANDING
                          </Typography>
                        </Link>
                      </Box> */}

                    {/* Lift-branding */}
                    {/* <Box>
                        <Link
                          to={"/lift-branding"}
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{
                              marginLeft: "20px",
                              paddingTop: "1px",
                              paddingBottom: "1px",
                              color: "#000",
                              "&:hover": {
                                color: "red",
                                cursor: "pointer",
                              },
                              fontSize: "15px",
                              fontWeight: "600",
                              fontFamily: "Lato, sans-serif",
                            }}
                          >
                            LIFT BRANDING
                          </Typography>
                        </Link>
                      </Box> */}

                    {/* Airport branding */}
                    {/* <Box>
                        <Link
                          to={"/airport-branding"}
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{
                              marginLeft: "20px",
                              paddingTop: "1px",
                              paddingBottom: "1px",
                              color: "#000",
                              "&:hover": {
                                color: "red",
                                cursor: "pointer",
                              },
                              fontSize: "15px",
                              fontWeight: "600",
                              fontFamily: "Lato, sans-serif",
                            }}
                          >
                           AIRPORT BRANDING
                          </Typography>
                        </Link>
                      </Box> */}

                    {/* DOOH */}
                    {/* <Box>
                        <Link to={"/dooh"} style={{ textDecoration: "none" }}>
                          <Typography
                            sx={{
                              marginLeft: "20px",
                              paddingTop: "1px",
                              paddingBottom: "1px",
                              color: "#000",
                              "&:hover": {
                                color: "red",
                                cursor: "pointer",
                              },
                              fontSize: "15px",
                              fontWeight: "600",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            DOOH
                          </Typography>
                        </Link>
                      </Box> */}
                  </Box>
                  {/* 
                  <MenuItem
                    component={Link}
                    to="/services/service1"
                    onClick={handleCloseMenu}
                  >
                    BillBoard
                  </MenuItem>

                  <MenuItem
                    component={Link}
                    to="/services/service2"
                    onClick={handleCloseMenu}
                  >
                    Transit Media
                  </MenuItem>

                  <MenuItem
                    component={Link}
                    to="/services/service2"
                    onClick={handleCloseMenu}
                  >
                    Digital BillBoard
                  </MenuItem>

                  <MenuItem
                    component={Link}
                    to="/services/service2"
                    onClick={handleCloseMenu}
                  >
                    Mall Media
                  </MenuItem>

                  <MenuItem
                    component={Link}
                    to="/services/service2"
                    onClick={handleCloseMenu}
                  >
                    InFight Branding
                  </MenuItem>

                  <MenuItem
                    component={Link}
                    to="/services/service2"
                    onClick={handleCloseMenu}
                  >
                    Lift Branding
                  </MenuItem>

                  <MenuItem
                    component={Link}
                    to="/services/service2"
                    onClick={handleCloseMenu}
                  >
                    DOOH
                  </MenuItem> */}
                </Menu>
              </Box>

              {/* BLOGS */}
              {/* <Box sx={{ paddingLeft: "30px" }}>
                <Button component={Link} to="/blogs">
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: "500",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    BLOGS
                  </Typography>
                </Button>
              </Box>   */}

              {/* Dropdown  ends*/}
              <Box sx={{ paddingLeft: "30px" }}>
                <Button component={Link} to="/contactus">
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: "500",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    CONTACT US
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Header;
