import { Box, Divider, IconButton, Typography } from "@mui/material";
import { darkMode } from "../Header/Header";
import { BsFacebook, BsInstagram, BsTelegram, BsYoutube } from "react-icons/bs";
export const Footer = ({ isDarkMode }: darkMode) => {
  return (
    <Box>
      <Box
        sx={{
          my: 5,
          backgroundColor: isDarkMode ? "#fff" : "#000",
          border: "1px solid",
        }}
      >
        <Divider />
      </Box>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Typography variant="h1" fontWeight={600}>
          *ZETTABAYT
        </Typography>

        <Typography variant="h5">
          О НАС СВЯЗАТЬСЯ С НАМИ ПРОДАВАЙТЕ НА{"  "}
          <span style={{ fontWeight: 600 }}>*ZETTABAYT</span>
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
          <IconButton
            sx={{
              color: isDarkMode ? "#fff" : "#000",
            }}
          >
            <BsInstagram size={30} />
          </IconButton>
          <IconButton
            sx={{
              color: isDarkMode ? "#fff" : "#000",
            }}
          >
            <BsTelegram size={30} />
          </IconButton>
          <IconButton
            sx={{
              color: isDarkMode ? "#fff" : "#000",
            }}
          >
            <BsYoutube size={30} />
          </IconButton>
          <IconButton
            sx={{
              color: isDarkMode ? "#fff" : "#000",
            }}
          >
            <BsFacebook size={30} />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          my: 5,
          backgroundColor: isDarkMode ? "#fff" : "#000",
          border: "1px solid",
        }}
      >
        <Divider />
      </Box>
      <Box sx={{ mb: 2, display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" fontWeight={600}>
          © *ZETTABAYT 2023
        </Typography>
        <Typography variant="h5">
          POWERED BY {"  "} <span style={{ fontWeight: 600 }}>ST40 </span>
        </Typography>
      </Box>
    </Box>
  );
};
