// import React, { useState } from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// // import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import "./Header.css";
// import { Link, useNavigate } from "react-router-dom";

// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";

// // dropdwon
// import { Typography } from "@mui/material";

// // IMAGES
// import janusLogo from "../../assets/images/janusLogo.png";

// import "./Header.css";

// const buttonHoverStyle = {
//   "&:hover": {
//     cursor: "pointer",
//     color: "red",
//   },
// };

// const drawerWidth = 240;
// const navItems = [
//   {
//     to: "/breaking-news",
//     name: "ब्रेकिंग न्यूज",
//   },
//   {
//     to: "/elections",
//     name: "चुनाव 2023",
//   },
//   {
//     to: "/sports",
//     name: "स्पोर्ट्स",
//   },
//   {
//     to: "/education",
//     name: "एजुकेशन",
//   },
//   ,
//   {
//     to: "/technology",
//     name: "टेक्नोलॉजी",
//   },
//   {
//     to: "/entertainment",
//     name: "मनोरंजन",
//   },
//   {
//     to: "/health",
//     name: "हेल्थ",
//   },
// ];

// function Header(props) {
//   // dropdwon
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const navigate = useNavigate();

//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box
//       onClick={handleDrawerToggle}
//       sx={{ textAlign: "center", backgroundColor: "#011e29", height: "100%" }}
//     >
//       <Typography
//         variant="h6"
//         sx={{
//           my: 2,
//           fontFamily: " 'Mukta', sans-serif",
//           fontWeight: "700",
//           fontSize: "25px",
//           color: "#fff",
//         }}
//       >
//         JANUS
//       </Typography>
//       <Divider sx={{ backgroundColor: "#fff" }} />
//       <List>
//         {navItems.map((item, index) => {
//           return (
//             <ListItem key={index} disablePadding>
//               <ListItemButton
//                 sx={{ textAlign: "center" }}
//                 onClick={() => {
//                   navigate(item?.to);
//                 }}
//               >
//                 <Box sx={{}}>
//                   <Typography
//                     sx={{
//                       fontFamily: " 'Mukta', sans-serif",
//                       fontWeight: "700",
//                       fontSize: "20px",
//                       color: "#fff",
//                     }}
//                   >
//                     {item?.name}
//                   </Typography>
//                 </Box>
//               </ListItemButton>
//             </ListItem>
//           );
//         })}
//       </List>
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar
//         component="nav"
//         style={{ backgroundColor: "#011e29" }}
//         // style={{ backgroundColor: "#05445c" }}
//         elevation={0}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Link
//             to={"/"}
//             style={{
//               flexGrow: 1,
//               display: { xs: "none", sm: "block" },
//               textDecoration: "none",
//               color: "#fff",
//               ...buttonHoverStyle,
//             }}
//           >
//             <Box
//               component="img"
//               sx={{
//                 width: {
//                   xs: "60px",
//                   sm: "60px",
//                   md: "70px",
//                   lg: "70px",
//                 },
//                 height: {
//                   xs: "40px",
//                   sm: "40px",
//                   md: "50px",
//                   lg: "50px",
//                 },
//                 marginLeft: { xs: "65px", sm: "65px", md: "43px", lg: "43px" },
//                 marginTop: { xs: "5px", sm: "5px", md: "7px", lg: "7px" },
//               }}
//               alt="redTriangleArrow"
//               src={janusLogo}
//             />
//           </Link>
//           <Box sx={{ display: { xs: "none", sm: "block" } }}>
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "row",
//                 // marginRight: "50px",
//               }}
//             >
//               <Button component={Link} to="/">
//                 <Typography
//                   sx={{ color: "#fff", fontSize: "16px", fontWeight: "500" }}
//                 >
//                   HOME
//                 </Typography>
//               </Button>

//               <Button component={Link} to="/aboutus">
//                 <Typography
//                   sx={{ color: "#fff", fontSize: "16px", fontWeight: "500" }}
//                 >
//                   ABOUT US
//                 </Typography>
//               </Button>

//               {/* Dropdown */}
//               <Box>
//                 <Button onClick={handleMenuClick}>
//                   <Typography
//                     sx={{ color: "#fff", fontSize: "16px", fontWeight: "500" }}
//                   >
//                     OUR SERVICES
//                   </Typography>
//                 </Button>
//               </Box>

//               <Menu
//                 sx={{ marginTop: "14px", width: "400px" }}
//                 anchorEl={anchorEl}
//                 open={Boolean(anchorEl)}
//                 onClose={handleMenuClose}
//               >

//                 <MenuItem
//                   component={Link}
//                   to="/services/service1"
//                   onClick={handleMenuClose}
//                 >
//                   BillBoard
//                 </MenuItem>

//                 <Divider />
//                 <MenuItem
//                   component={Link}
//                   to="/services/service2"
//                   onClick={handleMenuClose}
//                 >
//                   Transit Media
//                 </MenuItem>

//                 <MenuItem
//                   component={Link}
//                   to="/services/service2"
//                   onClick={handleMenuClose}
//                 >
//                   Digital BillBoard
//                 </MenuItem>

//                 <MenuItem
//                   component={Link}
//                   to="/services/service2"
//                   onClick={handleMenuClose}
//                 >
//                   Mall Media
//                 </MenuItem>

//                 <MenuItem
//                   component={Link}
//                   to="/services/service2"
//                   onClick={handleMenuClose}
//                 >
//                   InFight Branding
//                 </MenuItem>

//                 <MenuItem
//                   component={Link}
//                   to="/services/service2"
//                   onClick={handleMenuClose}
//                 >
//                   Lift Branding
//                 </MenuItem>

//                 <MenuItem
//                   component={Link}
//                   to="/services/service2"
//                   onClick={handleMenuClose}
//                 >
//                   DOOH
//                 </MenuItem>
//               </Menu>

//               {/* Dropdown  ends*/}
//               <Button component={Link} to="/contactus">
//                 <Typography
//                   sx={{ color: "#fff", fontSize: "16px", fontWeight: "500" }}
//                 >
//                   CONTACT US
//                 </Typography>
//               </Button>
//             </Box>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </Box>
//   );
// }

// export default Header;

// import React, { useState } from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// // import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import "./Header.css";
// import { Link, useNavigate } from "react-router-dom";

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

// CSS
import "./Header.css";

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
  const [anchorEl, setAnchorEl] = useState(null);

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
            marginLeft: { xs: "10px", sm: "10px", md: "43px", lg: "43px" },
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
                sx={{ textAlign: "center" ,borderBottom:"1px solid #C02222" }}
                onClick={() => {
                  navigate(item?.to);
                }}
              >
                <Box sx={{ }}>
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
        sx={{backgroundColor: {xs:"rgb(8,8,8, 0.4)" , sm:"rgb(8,8,8, 0.4)" , md:"rgb(8,8,8, 0.4)" , lg:"rgb(8,8,8, 0.4)"}  }}
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
                marginLeft: { xs: "65px", sm: "65px", md: "43px", lg: "43px" },
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
                justifyContent:"space-between",
                marginTop:"30px"
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
                <Typography
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onMouseOver={handleOpenMenu}
                  sx={{
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "500",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  OUR SERVICES
                </Typography>

                <Menu
                  sx={{ marginTop: "20px" }}
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleCloseMenu}
                >
                  <Box sx={{ width: "250px" }}>
                    <Box sx={{ marginTop: "15px" }}>
                      <Link
                        to={"/billboard"}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            marginLeft: "20px",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            color: "#000",
                            "&:hover": {
                              color: "red",
                              cursor: "pointer",
                            },
                            fontSize: "18px",
                            fontWeight: "600",
                            fontFamily: "Lato, sans-serif",
                          }}
                        >
                          Billboard
                        </Typography>
                      </Link>
                    </Box>

                    <Box>
                      <Link
                        to={"/transitmedia"}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            marginLeft: "20px",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            color: "#000",
                            "&:hover": {
                              color: "red",
                              cursor: "pointer",
                            },
                            fontSize: "18px",
                            fontWeight: "600",
                            fontFamily: "Lato, sans-serif",
                          }}
                        >
                          Transit Media
                        </Typography>
                      </Link>
                    </Box>

                    <Box>
                      <Link
                        to={"/digital-billboard"}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            marginLeft: "20px",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            color: "#000",
                            "&:hover": {
                              color: "red",
                              cursor: "pointer",
                            },
                            fontSize: "18px",
                            fontWeight: "600",
                            fontFamily: "Lato, sans-serif",
                          }}
                        >
                          Digital Billboard
                        </Typography>
                      </Link>
                    </Box>

                    <Box>
                      <Link
                        to={"/mallmedia"}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            marginLeft: "20px",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            color: "#000",
                            "&:hover": {
                              color: "red",
                              cursor: "pointer",
                            },
                            fontSize: "18px",
                            fontWeight: "600",
                            fontFamily: "Lato, sans-serif",
                          }}
                        >
                          Mall Media
                        </Typography>
                      </Link>
                    </Box>

                    <Box>
                      <Link
                        to={"/inflight-branding"}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            marginLeft: "20px",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            color: "#000",
                            "&:hover": {
                              color: "red",
                              cursor: "pointer",
                            },
                            fontSize: "18px",
                            fontWeight: "600",
                            fontFamily: "Lato, sans-serif",
                          }}
                        >
                          Inflight Branding
                        </Typography>
                      </Link>
                    </Box>

                    <Box>
                      <Link
                        to={"/lift-branding"}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            marginLeft: "20px",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            color: "#000",
                            "&:hover": {
                              color: "red",
                              cursor: "pointer",
                            },
                            fontSize: "18px",
                            fontWeight: "600",
                            fontFamily: "Lato, sans-serif",
                          }}
                        >
                          Lift Branding
                        </Typography>
                      </Link>
                    </Box>

                    <Box>
                      <Link
                        to={"/airport-branding"}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            marginLeft: "20px",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            color: "#000",
                            "&:hover": {
                              color: "red",
                              cursor: "pointer",
                            },
                            fontSize: "18px",
                            fontWeight: "600",
                            fontFamily: "Lato, sans-serif",
                          }}
                        >
                          Airport Branding
                        </Typography>
                      </Link>
                    </Box>

                    <Box>
                      <Link to={"/dooh"} style={{ textDecoration: "none" }}>
                        <Typography
                          sx={{
                            marginLeft: "20px",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            color: "#000",
                            "&:hover": {
                              color: "red",
                              cursor: "pointer",
                            },
                            fontSize: "18px",
                            fontWeight: "600",
                            fontFamily: "Lato, sans-serif",
                          }}
                        >
                          DOOH
                        </Typography>
                      </Link>
                    </Box>
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
              {/* BLOGS */}
              <Box sx={{ paddingLeft: "30px" }}>
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
