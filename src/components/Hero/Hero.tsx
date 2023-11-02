import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { darkMode } from "../Header/Header";

import { Slider } from "..";
export const Hero = ({ isDarkMode, setIsDarkMode }: darkMode) => {
  const isMaxWidth900 = useMediaQuery("(max-width:900px)");

  return (
    <Box>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          border: isDarkMode ? "2px solid" : "2px solid",
          borderRadius: "100px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Grid item xs={12} md={6} sx={{ padding: "40px !important" }}>
          <Typography variant="h2" fontWeight={600}>
            5G. Now in Iphone 14 pro
          </Typography>
          <Typography variant="h5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ex
            doloribus iste voluptatem aut molestias ducimus repudiandae eos
            beatae quia, rem quod dolorem sapiente voluptatum modi
            reprehenderit, totam tenetur illo!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isDarkMode ? (
              <img
                src="/iphone_14_dark.png"
                alt=""
                style={{
                  position: isMaxWidth900 ? "static" : "absolute",
                  top: -50,
                  width: isMaxWidth900 ? "250px" : "450px",
                  height: "auto",
                }}
              />
            ) : (
              <img
                src="/iphone_14_light.png"
                alt=""
                style={{
                  position: isMaxWidth900 ? "static" : "absolute",
                  top: -150,
                  width: isMaxWidth900 ? "1000px" : "1500px",
                  height: "auto",
                }}
              />
            )}
          </Box>
        </Grid>
      </Grid>

      {/* НОВИНКИ > */}

      <Box sx={{ my: 9 }}>
        <Typography variant="h1" fontWeight={600}>
          НОВИНКИ &gt;
        </Typography>
        <Box sx={{ mt: "50px", gap: 10 }}>
          <Slider isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </Box>
      </Box>

      {/* АКЦИЯ > */}

      <Box sx={{ my: 9 }}>
        <Typography variant="h1" fontWeight={600}>
          АКЦИЯ &gt;
        </Typography>
        <Box sx={{ mt: "50px", gap: 10 }}>
          <Slider isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </Box>
      </Box>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          border: isDarkMode ? "2px solid" : "2px solid",
          borderRadius: "100px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Grid item xs={12} md={6} sx={{ padding: "40px !important" }}>
          <Typography variant="h2" fontWeight={600}>
            5G. Now in Iphone 14 pro
          </Typography>
          <Typography variant="h5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ex
            doloribus iste voluptatem aut molestias ducimus repudiandae eos
            beatae quia, rem quod dolorem sapiente voluptatum modi
            reprehenderit, totam tenetur illo!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isDarkMode ? (
              <img
                src="/iphone_14_dark.png"
                alt=""
                style={{
                  position: isMaxWidth900 ? "static" : "absolute",
                  top: -50,
                  width: isMaxWidth900 ? "250px" : "450px",
                  height: "auto",
                }}
              />
            ) : (
              <img
                src="/iphone_14_light.png"
                alt=""
                style={{
                  position: isMaxWidth900 ? "static" : "absolute",
                  top: -150,
                  width: isMaxWidth900 ? "1000px" : "1500px",
                  height: "auto",
                }}
              />
            )}
          </Box>
        </Grid>
      </Grid>

      {/* БЕСТСЕЛЛЕРЫ > > */}

      <Box sx={{ my: 9 }}>
        <Typography variant="h1" fontWeight={600}>
          БЕСТСЕЛЛЕРЫ &gt;
        </Typography>
        <Box sx={{ mt: "50px", gap: 10 }}>
          <Slider isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </Box>
      </Box>
      {/* ДЛЯ СЕМЬИ  > */}

      <Box sx={{ my: 9 }}>
        <Typography variant="h1" fontWeight={600}>
          ДЛЯ СЕМЬИ &gt;
        </Typography>
        <Box sx={{ mt: "50px", gap: 10 }}>
          <Slider isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </Box>
      </Box>
      {/* ГЕЙМЕРАМ > */}

      <Box sx={{ my: 9 }}>
        <Typography variant="h1" fontWeight={600}>
          ГЕЙМЕРАМ &gt;
        </Typography>
        <Box sx={{ mt: "50px", gap: 10 }}>
          <Slider isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </Box>
      </Box>

      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          border: isDarkMode ? "2px solid" : "2px solid",
          borderRadius: "100px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Grid item xs={12} md={6} sx={{ padding: "40px !important" }}>
          <Typography variant="h2" fontWeight={600}>
            5G. Now in Iphone 14 pro
          </Typography>
          <Typography variant="h5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ex
            doloribus iste voluptatem aut molestias ducimus repudiandae eos
            beatae quia, rem quod dolorem sapiente voluptatum modi
            reprehenderit, totam tenetur illo!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isDarkMode ? (
              <img
                src="/iphone_14_dark.png"
                alt=""
                style={{
                  position: isMaxWidth900 ? "static" : "absolute",
                  top: -50,
                  width: isMaxWidth900 ? "250px" : "450px",
                  height: "auto",
                }}
              />
            ) : (
              <img
                src="/iphone_14_light.png"
                alt=""
                style={{
                  position: isMaxWidth900 ? "static" : "absolute",
                  top: -150,
                  width: isMaxWidth900 ? "1000px" : "1500px",
                  height: "auto",
                }}
              />
            )}
          </Box>
        </Grid>
      </Grid>

      {/*АКСЕССУАРЫ > */}

      <Box sx={{ my: 9 }}>
        <Typography variant="h1" fontWeight={600}>
          АКСЕССУАРЫ &gt;
        </Typography>
        <Box sx={{ mt: "50px", gap: 10 }}>
          <Slider isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </Box>
      </Box>
    </Box>
  );
};
