import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
} from "@mui/material";
import { AiOutlineHeart, AiOutlineSearch as SearchIcon } from "react-icons/ai";
import { BiShoppingBag as BagIcon, BiSun } from "react-icons/bi";
import { MdOutlineDarkMode as DarkModeIcon } from "react-icons/md";
import { FiMenu, FiUser } from "react-icons/fi";
import { useState } from "react";

export interface darkMode {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

const mobileButtonStyles = {
  borderRadius: 6,
  border: "2px solid",
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
};
export const Header = ({ isDarkMode, setIsDarkMode }: darkMode) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <Container
      maxWidth="xl"
      sx={{
        my: { xs: 2, md: 6 },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 8,
      }}
    >
      <Box sx={{ width: { xs: "60px", md: "80px" } }}>
        {isDarkMode ? (
          <img src="/logo_light.svg" alt="" style={{ width: "100%" }} />
        ) : (
          <img src="/logo.svg" alt="" style={{ width: "100%" }} />
        )}
      </Box>
      <Box
        sx={{
          display: { xs: "none", xl: "flex" },
          gap: 2.5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            borderRadius: 6,
            border: "2px solid",
            padding: "5px 30px",
            fontWeight: 600,
          }}
          startIcon={<img src="/catalog.svg" alt="" />}
        >
          *КАТАЛОГ
        </Button>
        <Box
          sx={{ width: { sm: "200px", md: "250px", lg: "400px", xl: "500px" } }}
        >
          <input
            type="text"
            placeholder="*ИСКАТЬ ТОВАРЫ"
            style={{
              borderRadius: "50px",
              border: `2px solid ${isDarkMode ? "#fff" : "#000"}`,
              padding: "10px 20px",
              width: "100%",
              maxWidth: "500px",
              backgroundColor: isDarkMode ? "#121212" : "#fff",
              color: isDarkMode ? "#fff" : "#000",
            }}
          />
        </Box>
        <SearchIcon
          style={{
            marginLeft: "-60px",
            cursor: "pointer",
            fontSize: "30px",
            color: isDarkMode ? "#fff" : "#000",
          }}
        />
      </Box>
      <IconButton
        sx={{
          border: isDarkMode ? "2px solid #fff" : "2px solid #000",
          display: { xs: "flex", xl: "none" },
        }}
        onClick={toggleDrawer}
      >
        <FiMenu
          style={{ fontSize: "28px", color: isDarkMode ? "#fff" : "#000" }}
        />
      </IconButton>
      <Box
        sx={{
          display: { xs: "none", xl: "flex" },
          gap: 2.5,
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          sx={{ borderRadius: 6, border: "2px solid", fontWeight: 600 }}
          startIcon={<FiUser style={{ fontSize: "28px" }} />}
        >
          *ВОЙТИ
        </Button>
        <Button
          variant="outlined"
          sx={{ borderRadius: 6, border: "2px solid", fontWeight: 600 }}
          startIcon={<AiOutlineHeart style={{ fontSize: "28px" }} />}
        >
          *ИЗБРАННОЕ
        </Button>
        <Button
          variant="outlined"
          sx={{ borderRadius: 6, border: "2px solid", fontWeight: 600 }}
          startIcon={<BagIcon style={{ fontSize: "28px" }} />}
        >
          *КОРЗИНА
        </Button>
        <IconButton
          sx={{ border: isDarkMode ? "2px solid #fff" : "2px solid #000" }}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? <BiSun /> : <DarkModeIcon style={{ color: "#000" }} />}
        </IconButton>
      </Box>
      <Drawer
        onClose={toggleDrawer}
        anchor="left"
        open={isDrawerOpen}
        sx={{ display: { xs: "block", xl: "none" } }}
      >
        <Box
          sx={{
            width: "270px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box sx={{ width: { xs: "60px", md: "80px" } }}>
            {isDarkMode ? (
              <img src="/logo_light.svg" alt="" style={{ width: "100%" }} />
            ) : (
              <img src="/logo.svg" alt="" style={{ width: "100%" }} />
            )}
          </Box>
          <Divider
            sx={{
              width: "100%",
              backgroundColor: isDarkMode ? "#fff" : "#000",
             
            }}
          />
          <Button
            fullWidth
            variant="outlined"
            sx={mobileButtonStyles}
            startIcon={<img src="/catalog.svg" alt="" />}
          >
            *КАТАЛОГ
          </Button>
          <Button
            variant="outlined"
            sx={mobileButtonStyles}
            startIcon={<AiOutlineHeart style={{ fontSize: "28px" }} />}
          >
            *ИЗБРАННОЕ
          </Button>
          <Button
            variant="outlined"
            sx={mobileButtonStyles}
            startIcon={<BagIcon style={{ fontSize: "28px" }} />}
          >
            *КОРЗИНА
          </Button>
          <Button
            variant="outlined"
            sx={mobileButtonStyles}
            startIcon={<FiUser style={{ fontSize: "28px" }} />}
          >
            *ВОЙТИ
          </Button>
          <Box>
            <input
              type="text"
              placeholder="*ИСКАТЬ ТОВАРЫ"
              style={{
                borderRadius: "50px",
                border: `2px solid ${isDarkMode ? "#fff" : "#000"}`,
                padding: "10px 20px",
                width: "100%",

                backgroundColor: isDarkMode ? "#353535" : "#fff",
                color: isDarkMode ? "#fff" : "#000",
              }}
            />
          </Box>
          <IconButton
            sx={{
              border: isDarkMode ? "2px solid #fff" : "2px solid #000 ",
              width: "50px",
              height: "50px",
            }}
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? (
              <BiSun />
            ) : (
              <DarkModeIcon style={{ color: "#000" }} />
            )}
          </IconButton>
        </Box>
      </Drawer>
    </Container>
  );
};
