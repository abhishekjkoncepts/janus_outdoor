import React from 'react'

const Contactus = () => {
  return (
    <div style={{marginTop:"90px"}}>
    hello contact us
  </div>
  )
}

export default Contactus


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
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleOpenMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleCloseMenu = () => {
//     setAnchorEl(null);
//   };
//   // dropdwon

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
//                 marginRight: "44px",
//               }}
//             >
//               <Button component={Link} to="/">
//                 <Typography
//                   sx={{ color: "#fff", fontSize: "16px", fontWeight: "500" }}
//                 >
//                   HOME
//                 </Typography>
//               </Button>

//               <Box sx={{ paddingLeft: "10px" }}>
//                 <Button component={Link} to="/aboutus">
//                   <Typography
//                     sx={{ color: "#fff", fontSize: "16px", fontWeight: "500" }}
//                   >
//                     ABOUT US
//                   </Typography>
//                 </Button>
//               </Box>

//               {/* Dropdown */}
//               <Box sx={{ paddingLeft: "10px" , marginTop:"6px" }}>
//                 <Typography
//                   aria-controls="simple-menu"
//                   aria-haspopup="true"
//                   onMouseOver={handleOpenMenu}
//                   sx={{ color: "#fff", fontSize: "16px", fontWeight: "500" }}
//                 >
//                   OUR SERVICES
//                 </Typography>

//                 <Menu
//                   sx={{ marginTop: "14px", width: "400px" }}
//                   id="simple-menu"
//                   anchorEl={anchorEl}
//                   keepMounted
//                   open={Boolean(anchorEl)}
//                   onClose={handleCloseMenu}
//                 >
//                   <Box>
//                     <Typography>Hello</Typography>
//                   </Box>
// {/* 
//                   <MenuItem
//                     component={Link}
//                     to="/services/service1"
//                     onClick={handleCloseMenu}
//                   >
//                     BillBoard
//                   </MenuItem>

//                   <MenuItem
//                     component={Link}
//                     to="/services/service2"
//                     onClick={handleCloseMenu}
//                   >
//                     Transit Media
//                   </MenuItem>

//                   <MenuItem
//                     component={Link}
//                     to="/services/service2"
//                     onClick={handleCloseMenu}
//                   >
//                     Digital BillBoard
//                   </MenuItem>

//                   <MenuItem
//                     component={Link}
//                     to="/services/service2"
//                     onClick={handleCloseMenu}
//                   >
//                     Mall Media
//                   </MenuItem>

//                   <MenuItem
//                     component={Link}
//                     to="/services/service2"
//                     onClick={handleCloseMenu}
//                   >
//                     InFight Branding
//                   </MenuItem>

//                   <MenuItem
//                     component={Link}
//                     to="/services/service2"
//                     onClick={handleCloseMenu}
//                   >
//                     Lift Branding
//                   </MenuItem>

//                   <MenuItem
//                     component={Link}
//                     to="/services/service2"
//                     onClick={handleCloseMenu}
//                   >
//                     DOOH
//                   </MenuItem> */}
//                 </Menu>
//               </Box>

//               {/* Dropdown  ends*/}
//               <Box sx={{ paddingLeft: "10px" }}>
//                 <Button component={Link} to="/contactus">
//                   <Typography
//                     sx={{ color: "#fff", fontSize: "16px", fontWeight: "500" }}
//                   >
//                     CONTACT US
//                   </Typography>
//                 </Button>
//               </Box>
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
