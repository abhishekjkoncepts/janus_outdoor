// import React from "react";

// // MUI
// import { Grid, Typography, Button, Box } from "@mui/material";

// const Outdoor = () => {
//   return (
//     <Box sx={{ marginTop: { xs: "51px", sm: "51px", md: "0px", lg: "0px" } }}>
//       {/* VIDEO */}
//       <Grid container>
//         <Grid item xs={12} sm={12} md={12} lg={12}>
//           {
//             <Box>
//               <video autoPlay muted width="100%" controls={false} loop={true}>
//                 <source
//                   src={require("../../../assets/video/VideoWithoutText.mp4")}
//                   //   style={{ width: "600px" }}
//                 />
//               </video>
//             </Box>
//           }
//         </Grid>
//       </Grid>

//       {/* Dropdown */}
//       <Grid container>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.7}
//           lg={0.7}
//           sx={{ backgroundColor: "red" }}
//         ></Grid>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={10.6}
//           lg={10.6}
//           sx={{ backgroundColor: "green" }}
//         >
//           <Grid container>
//             <Grid
//               item
//               xs={12}
//               sm={12}
//               md={3}
//               lg={3}
//               sx={{ backgroundColor: "#8A2BE2" }}
//             > 

//             </Grid>
//             <Grid
//               item
//               xs={12}
//               sm={12}
//               md={3}
//               lg={3}
//               sx={{ backgroundColor: "#5F9EA0" }}
//             >
//               {" "}
//               hello
//             </Grid>
//             <Grid
//               item
//               xs={12}
//               sm={12}
//               md={3}
//               lg={3}
//               sx={{ backgroundColor: "#6495ED" }}
//             ></Grid>
//             <Grid
//               item
//               xs={12}
//               sm={12}
//               md={3}
//               lg={3}
//               sx={{ backgroundColor: "#FF8C00" }}
//             ></Grid>
//           </Grid>
//         </Grid>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.7}
//           lg={0.7}
//           sx={{ backgroundColor: "red" }}
//         ></Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Outdoor;

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { Grid, Typography, Button,} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Outdoor() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>

       {/* VIDEO */}
      <Grid container>
         <Grid item xs={12} sm={12} md={12} lg={12}>
           {
             <Box>
               <video autoPlay muted width="100%" controls={false} loop={true}>
                 <source
                  src={require("../../../assets/video/VideoWithoutText.mp4")}
                   //   style={{ width: "600px" }}
                 />
               </video>
             </Box>
           }
         </Grid>
       </Grid>

      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">State</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

