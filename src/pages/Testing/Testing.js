// import React from 'react'
// import vide from "../../assets/video/VideoWithText.mp4";
// import sampleVid from "../../assets/video/sampleVid.mp4";
// import "./Testing.css";
// import { Box, Grid } from "@mui/material";

// const Testing = () => {
//   return (
//    <Grid container>
//       <Grid item xs={12} sm={12} md={12} lg={12}>
//         <video
//           autoPlay
//           muted
//           width="100%"
//           controls={false}
//           loop={true}
//           className="bclip"
//         >
//           <source src={sampleVid} />
//         </video>
//       </Grid>
//     </Grid>
//   )
// }

// export default Testing

// BOOTSTRAP DROPDOWN-----------------------------------------------------------------------------------------

// import React from "react";
// import "./Testing.css";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import { Box, Grid } from "@mui/material";

// import "bootstrap/dist/css/bootstrap.min.css";

// const Testing = () => {
//   return (
//     <>
//     <Box sx={{display:"flex" ,flexDirection:"row" , marginTop:"30px" , marginLeft:"30px" , justifyContent:"space-around"}}>

//       <Dropdown>
//         <Dropdown.Toggle  id="dropdown-basic" style={{backgroundColor:"grey" , border:"1px solid grey" , borderRadius:"20px"}} >
//         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         </Dropdown.Toggle>

//         <Dropdown.Menu>
//           <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//           <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//           <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>

//       </Box>
//     </>
//   );
// };

// export default Testing;

import React from "react";
import "./Testing.css";
import { Box, Grid } from "@mui/material";

import { FormControl, Select, InputLabel, MenuItem, ThemeProvider ,} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "300px",
    backgroundColor:"red",
    borderRadius:"30px",
    
  },
}));

const Testing = () => {
  const classes = useStyles();

  return (
    <div style={{ marginTop: "30px", marginLeft: "50px" }}>
      <FormControl className={classes.formControl}>
        <Select>
          <MenuItem value={12}>a</MenuItem>
          <MenuItem value={12}>b</MenuItem>
          <MenuItem value={12}>c</MenuItem>
          <MenuItem value={12}>d</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

