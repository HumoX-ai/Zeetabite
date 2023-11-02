import { Box, Divider, IconButton, Typography } from "@mui/material";
import { darkMode } from "../Header/Header";
import { BsFacebook, BsInstagram, BsTelegram, BsYoutube } from "react-icons/bs";
export const Footer = ({ isDarkMode, setIsDarkMode }: darkMode) => {
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

        <Typography
          variant="h5"
          sx={{ display: "flex", gap: 0.5, justifyContent: "center" }}
        >
          О НАС СВЯЗАТЬСЯ С НАМИ ПРОДАВАЙТЕ НА
          <Typography variant="h5" fontWeight={600}>
            *ZETTABAYT
          </Typography>
        </Typography>
        <Box>
          <IconButton>
            <BsInstagram />
          </IconButton>
          <IconButton>
            <BsTelegram />
          </IconButton>
          <IconButton>
            <BsYoutube />
          </IconButton>
          <IconButton>
            <BsFacebook />
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
    </Box>
  );
};
