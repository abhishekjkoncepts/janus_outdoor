 {/* BOOSTRAP DROPDOWN */}
 <Grid item xs={12} sm={12} md={6} lg={6}>
 <Grid container>
   <Grid item xs={12} sm={12} md={12} lg={12}>
     <Box
       sx={{
         display: "flex",
         flexDirection: {
           xs: "column",
           sm: "column",
           md: "row",
           lg: "row",
         },
         justifyContent: {
           md: "space-between",
           lg: "space-between",
         },
       }}
     >
       <Box
         sx={{
           display: "flex",
           flexDirection: "row",
           marginTop: "30px",
           marginLeft: "30px",
           justifyContent: "space-around",
         }}
       >
         <Dropdown>
           <Dropdown.Toggle
             id="dropdown-basic"
             style={{
               backgroundColor: "grey",
               border: "1px solid grey",
               borderRadius: "20px",
             }}
           >
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           </Dropdown.Toggle>

           <Dropdown.Menu>
             <div
               style={{
                 maxHeight: "150px", // Set the maximum height as per your requirement
                 overflowY: "auto",
               }}
             >
               {states.map((item, index) => (
                 <Dropdown.Item
                   key={index}
                   value={item}
                   sx={{ color: "#000" }}
                 >
                   {item}
                 </Dropdown.Item>
               ))}
             </div>
           </Dropdown.Menu>
         </Dropdown>
       </Box>

       <Box
         sx={{
           display: "flex",
           justifyContent: { xs: "center", sm: "center" },
           alignItems: { xs: "center", sm: "center" },
           marginTop: {
             xs: "50px",
             sm: "50px",
             md: "0px",
             lg: "0px",
           },
         }}
       >
         {/* <FormControl
           sx={{
             width: {
               xs: "300px",
               sm: "300px",
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
             color: "secondary",
           }}
         >
           <InputLabel
             sx={{
               color: "#000",
               // borderColor: "#fff",
               borderWidth: "1px solid #000",
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
             variant="standard"
           >
             {states.map((item, index) => (
               <MenuItem value={item} sx={{ color: "#000" }}>
                 {item}
               </MenuItem>
             ))}
           </Select>
         </FormControl> */}
       </Box>

       <Box
         sx={{
           display: "flex",
           justifyContent: { xs: "center", sm: "center" },
           alignItems: { xs: "center", sm: "center" },
           marginTop: {
             xs: "70px",
             sm: "70px",
             md: "0px",
             lg: "0px",
           },
         }}
       >
         <FormControl
           sx={{
             width: {
               xs: "300px",
               sm: "300px",
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
             value={city}
             label="state"
             onChange={handleChange2}
           >
             {state &&
               stateDistricts[state]?.map((item) => (
                 <MenuItem value={item} sx={{ color: "#000" }}>
                   {item}
                 </MenuItem>
               ))}
           </Select>
         </FormControl>
       </Box>

       <Box
         sx={{
           display: "flex",
           justifyContent: { xs: "center", sm: "center" },
           alignItems: { xs: "center", sm: "center" },
           marginTop: {
             xs: "70px",
             sm: "70px",
             md: "0px",
             lg: "0px",
           },
         }}
       >
         <FormControl
           sx={{
             width: {
               xs: "300px",
               sm: "300px",
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
             value={type}
             label="state"
             onChange={handleChange3}
           >
             <MenuItem value={"Digital"} sx={{ color: "#000" }}>
               Digital
             </MenuItem>
             <MenuItem value={"Unipole"} sx={{ color: "#000" }}>
               Unipole
             </MenuItem>
             <MenuItem value={3} sx={{ color: "#000" }}>
               Billboard
             </MenuItem>
           </Select>
         </FormControl>
       </Box>
     </Box>
   </Grid>
 </Grid>
</Grid>