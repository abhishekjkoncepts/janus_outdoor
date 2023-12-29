// import * as React from "react";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import { Grid, Button, Typography } from "@mui/material";

// import "./Outdoor.css";

// // CARD
// import Cards from "../../Card/Cards";

// // REDUX
// import { useSelector } from "react-redux";
// import { getProducts } from "../../../redux/actions/Outdoor";
// import { useNavigate } from "react-router-dom";

// export default function Outdoor() {
//   const [state, setState] = React.useState("");
//   const [city, setCity] = React.useState("");
//   const [type, setType] = React.useState("");

//   const { products } = useSelector((state) => state.OutdoorReducer);

//   const navigate=useNavigate();

//   const handleChange = (event) => {
//     setState(event.target.value);
//   };

//   const handleChange2 = (event) => {
//     setCity(event.target.value);
//   };
//   const handleChange3 = (event) => {
//     setType(event.target.value);
//   };

//   React.useEffect(() => {
//     getProducts();
//   }, []);

//   return (
//     <>
//       {/* VIDEO */}
//       <Grid container>
//         <Grid item xs={12} sm={12} md={12} lg={12}>
//           <Box
//           // sx={{position:"absolute" , }}
//           >
//             <video autoPlay muted width="100%" controls={false} loop={true}>
//               <source
//                 src={require("../../../assets/video/VideoWithoutText.mp4")}
//               />
//             </video>
//           </Box>
//         </Grid>
//       </Grid>

//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "center",
//           alignItems: "center",
//           marginTop: "350px",
//         }}
//       >

//         <Box>
//           <FormControl
//             sx={{
//               m: 1,
//               minWidth: 200,
//               backgroundColor: "#fff",
//               borderRadius: "30px",
//             }}
//           >
//             <InputLabel sx={{ color: "#000", borderColor: "#fff" }}>
//               State
//             </InputLabel>
//             <Select
//               labelId="demo-simple-select-helper-label"
//               id="demo-simple-select-helper"
//               value={state}
//               label="state"
//               onChange={handleChange}
//             >
//               <MenuItem value={10} sx={{ color: "#000" }}>
//                 Delhi
//               </MenuItem>
//               <MenuItem value={20} sx={{ color: "#000" }}>
//                 Uttar Pradesh
//               </MenuItem>
//               <MenuItem value={30} sx={{ color: "#000" }}>
//                 Goa
//               </MenuItem>
//             </Select>
//           </FormControl>
//         </Box>

//         <Box>
//           <FormControl
//             sx={{
//               m: 1,
//               minWidth: 200,
//               backgroundColor: "#fff",
//               borderRadius: "30px",
//             }}
//           >
//             <InputLabel sx={{ color: "#000", borderColor: "#fff" }}>
//               City
//             </InputLabel>
//             <Select
//               labelId="demo-simple-select-helper-label"
//               id="demo-simple-select-helper"
//               value={city}
//               label=""
//               onChange={handleChange2}
//             >
//               <MenuItem value="" sx={{ color: "#000" }}>
//                 <em>None</em>
//               </MenuItem>
//               <MenuItem value={10}>Muzaffarnagar</MenuItem>
//               <MenuItem value={20}>Meeruth</MenuItem>
//               <MenuItem value={30}>Shamli</MenuItem>
//             </Select>
//           </FormControl>
//         </Box>

//         <Box>
//           <FormControl
//             sx={{
//               m: 1,
//               minWidth: 200,
//               backgroundColor: "#fff",
//               borderRadius: "30px",
//             }}
//           >
//             <InputLabel sx={{ color: "#000", borderColor: "#fff" , borderRadius:"20px" }}>
//               Type
//             </InputLabel>
//             <Select
//               labelId="demo-simple-select-helper-label"
//               id="demo-simple-select-helper"
//               value={type}
//               label="Age"
//               onChange={handleChange3}
//             >
//               <MenuItem value="" sx={{ color: "#000" }}>
//                 <em>None</em>
//               </MenuItem>
//               <MenuItem value={10}>type 1</MenuItem>
//               <MenuItem value={20}>type 2</MenuItem>
//               <MenuItem value={30}>type 3</MenuItem>
//             </Select>
//           </FormControl>

//         </Box>

//       </Box>
//       <Box sx={{display:"flex" , justifyContent:"center", alignItems:"center", marginTop:"10px"}}>
//         <Button
//             variant="contained"
//             sx={{
//               height: "55px",
//               marginTop: "0px",
//               marginLeft: "10px",
//               backgroundColor: "#fafafa",
//               color: "#000",
//               borderRadius:"30px",
//               width:"100px"
//             }}
//           >
//             SUBMIT
//           </Button>
//         </Box>

//       <Grid container sx={{marginTop:"280px" , marginBottom:"50px"}}>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.7}
//           lg={0.7}
//           // sx={{ backgroundColor: "red" }}
//         ></Grid>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={10.6}
//           lg={10.6}
//           // sx={{ backgroundColor: "yellow" }}
//         >
//           <Grid container spacing={2}>
//             {products &&
//               products.map((item) => {
//                 return (
//                   <Cards
//                     data={item}
//                     onClick={() => {
//                       navigate("/full-card");
//                       console.log("hello world");
//                     }}
//                   />
//                 );
//               })}
//           </Grid>
//         </Grid>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.7}
//           lg={0.7}
//           // sx={{ backgroundColor: "green" }}
//         ></Grid>
//       </Grid>
//     </>
//   );
// }

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

import video from "../../../assets/video/VideoWithoutText.mp4";

export default function Outdoor() {
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
      <section className="home">
        <video
          src={video}
          muted
          autoPlay
          controls={false}
          loop={true}
          type="video/mp4"
        ></video>
         <div className="homeContent container">
          <Typography
            sx={{
              fontSize: { xs: "30px", sm: "30px", md: "70px", lg: "70px" },
              fontWeight: { xs: "500", sm: "500", md: "700", lg: "700" },
            }}
          >
            Best Hoardings in Delhi
          </Typography>

        </div>
      
      

      
      </section>
      {/* <Box 
      sx={{zIndex:"100"}}
      >
          <Grid container sx={{}}>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{ backgroundColor: "red" }}
            ></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{ backgroundColor: "blue" , zIndex:"100"}}
            >
              <Box>hello</Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{ backgroundColor: "green" }}
            ></Grid>
          </Grid>
        </Box> */}
     
      

      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "350px",
        }}
      >
        
        <Box>
          <FormControl
            sx={{
              m: 1,
              minWidth: 200,
              backgroundColor: "#fff",
              borderRadius: "30px",
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
              minWidth: 200,
              backgroundColor: "#fff",
              borderRadius: "30px",
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
              minWidth: 200,
              backgroundColor: "#fff",
              borderRadius: "30px",
            }}
          >
            <InputLabel sx={{ color: "#000", borderColor: "#fff" , borderRadius:"20px" }}>
              Type
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
      <Box sx={{display:"flex" , justifyContent:"center", alignItems:"center", marginTop:"10px"}}>
        <Button
            variant="contained"
            sx={{
              height: "55px",
              marginTop: "0px",
              marginLeft: "10px",
              backgroundColor: "#fafafa",
              color: "#000",
              borderRadius:"30px",
              width:"100px"
            }}
          >
            SUBMIT
          </Button>
        </Box> */}

      <Grid container sx={{ marginTop: "280px", marginBottom: "50px" }}>
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
