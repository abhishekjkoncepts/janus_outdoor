{/* <Carousel
  cols={3}
  rows={1}
  gap={20}
  loop={true}
  showDots={false}
  dotColorActive="#795548"
  dotColorInactive="#ccc"
  style={{ padding: "10px" }}
>
  {products &&
    products.reverse().map((item) => (
      <Carousel.Item>
        <Card
          sx={{
            borderRadius: "150px 150px 0 0",
            border: "1px solid #C02222",
          }}
          onClick={() => {
            navigate(
              `/${
                item?.category?.toLowerCase()
                  ? item?.category?.toLowerCase()
                  : item?.code
              }/${item?.url ? item?.url : item?.address}/`,
              { state: { id: item._id } }
            );
            console.log("hello world");
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={item?.image}
              alt="green iguana"
              sx={{ backgroundColor: "grey" }}
            />
            <CardContent sx={{ height: "180px" }}>
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                {item?.address}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                State: {item?.state} <br />
                City: {item?.city}
                <br />
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Carousel.Item>
    ))}
</Carousel>; */}
