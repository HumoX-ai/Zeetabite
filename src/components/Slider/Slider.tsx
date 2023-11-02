// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { Box, Grid, IconButton, Rating, Typography } from "@mui/material";
import { darkMode } from "../Header/Header";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";

export default function Slider({ isDarkMode }: darkMode) {
  return (
    <Box sx={{ mt: 3 }}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              sx={{ mt: "50px" }}
            >
              <Grid
                key={index}
                item
                sx={{
                  border: "2px solid",
                  borderRadius: "200px",
                  padding: "25px",
                  "&:hover": {
                    color: isDarkMode ? "#000" : "#fff ",
                    backgroundColor: isDarkMode ? "#fff" : "#000",
                    cursor: "pointer",
                    transition: "0.3s ease-in-out",
                    "& button": {
                      color: isDarkMode ? "#000" : "#fff",
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    border: "1px solid",
                    padding: "20px",
                    borderRadius: "100%",
                  }}
                >
                  <img src={item.img} alt="" style={{ width: "100%" }} />
                </Box>
                <Rating
                  sx={{ display: "flex", justifyContent: "center", my: 1 }}
                  name="half-rating"
                  defaultValue={2.5}
                  precision={0.5}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    mb: 4,
                  }}
                >
                  <Typography variant="h5" fontWeight={500}>
                    {item.title}
                  </Typography>
                  <Typography variant="h5" fontWeight={600}>
                    {item.price}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
                  <IconButton
                    sx={{
                      border: "2px solid",
                      color: isDarkMode ? "#fff" : "#000",
                    }}
                  >
                    <HiOutlineShoppingBag size={40} />
                  </IconButton>
                  <IconButton
                    sx={{
                      border: "2px solid",
                      color: isDarkMode ? "#fff" : "#000",
                    }}
                  >
                    <AiOutlineHeart size={40} />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

const data = [
  {
    img: "/phones.png",
    title: "iPhone 15 Pro",
    price: "$1234",
  },
  {
    img: "/phones.png",
    title: "iPhone 15 Pro",
    price: "$1234",
  },
  {
    img: "/phones.png",
    title: "iPhone 15 Pro",
    price: "$1234",
  },
  {
    img: "/phones.png",
    title: "iPhone 15 Pro",
    price: "$1234",
  },
];
