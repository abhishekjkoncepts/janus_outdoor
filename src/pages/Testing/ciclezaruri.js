  {/* EXPERIENCE */}
  <Box>
  <Grid
    container
    sx={{
      backgroundColor: "#000",
    }}
  >
    <Grid
      item
      xs={12}
      sm={12}
      md={0.7}
      lg={0.7}
      // sx={{ backgroundColor: "purple" }}
    ></Grid>
    <Grid
      item
      xs={12}
      sm={12}
      md={10.6}
      lg={10.6}
      // sx={{ backgroundColor: "pink" }}
    >
      <Box
        sx={{
          marginTop: { xs: "10", sm: "10", md: "40px", lg: "40px" },
          marginBottom: { xs: "10", sm: "10", md: "20px", lg: "20px" },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: {
                xs: "19px",
                sm: "19px",
                md: "36px",
                lg: "36px",
              },
              fontWeight: "600",
              fontFamily: "Poppins, sans-serif",
              textAlign: "center",
              color: "#fff",
            }}
          >
            EXPERIENCE
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "400",
              fontFamily: "Poppins, sans-serif",
              textAlign: "center",
            }}
          >
            Why are we a creative ad agency ?.It is because we achieve{" "}
            <br />
            more than a simple online marketing agency can!
          </Typography>
        </Box>
      </Box>
    </Grid>
    <Grid
      item
      xs={12}
      sm={12}
      md={0.7}
      lg={0.7}
      // sx={{ backgroundColor: "purple" }}
    ></Grid>
  </Grid>

  <Grid container sx={{ backgroundColor: "black" }}>
    <Grid
      item
      xs={12}
      sm={12}
      md={0.7}
      lg={0.7}
      // sx={{ backgroundColor: "yellow" }}
    ></Grid>
    <Grid
      item
      xs={12}
      sm={12}
      md={10.6}
      lg={10.6}
      // sx={{ backgroundColor: "green" }}
    >
      <Grid container sx={{ height: "300px", backgroundcolor: "black" }}>
        {/* CIRCLE 1 */}
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          sx={{
            backgroundColor: "#000",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <Box className="main-bg">
            <Box className="circle">
              <h1>527</h1>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#fff",
                marginTop: "70px",
                fontSize: "22px",
                marginLeft: "170px",
                fontWeight: "500",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Happy Clients
            </Typography>
          </Box>
        </Grid>
        {/* CIRCLE 2 */}
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          sx={{
            backgroundColor: "#000",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <Box className="main-bg2">
            <Box className="circle2">
              <h1>423</h1>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#fff",
                marginTop: "20px",
                fontSize: "22px",
                fontWeight: "500",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              OOH Sites
            </Typography>
          </Box>
        </Grid>
        {/* CIRCLE 3 */}
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          sx={{
            backgroundColor: "#000",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box className="main-bg">
            <Box className="circle3">
              <h1>47CR</h1>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#fff",
                marginTop: "20px",
                marginRight: "100px",
                fontSize: "22px",
                fontWeight: "500",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              People Impacted
            </Typography>
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
      // sx={{ backgroundColor: "blue" }}
    ></Grid>
  </Grid>
</Box>