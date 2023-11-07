import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { AiOutlineHeart, AiOutlineSearch as SearchIcon } from "react-icons/ai";
import {
  BiShoppingBag as BagIcon,
  BiSun,
  BiSolidWasher,
  BiChevronRight,
  BiChevronDown,
} from "react-icons/bi";
import { MdOutlineDarkMode as DarkModeIcon } from "react-icons/md";
import { FiList, FiMenu, FiUser, FiX } from "react-icons/fi";
import { useState } from "react";
import { SlEarphones } from "react-icons/sl";
import { BsLaptop } from "react-icons/bs";
import { PiBooksBold } from "react-icons/pi";
import { catalogue } from "../../../api";
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
  const [isListIcon, setIsListIcon] = useState(true);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isNestedDrawerOpen, setIsNestedDrawerOpen] = useState(false);

  const toggleIcon = () => {
    setIsListIcon(!isListIcon);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleCatalog = () => {
    setIsCatalogOpen(!isCatalogOpen);
    // Sahifadagi scroll ni yopish
    if (!isCatalogOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const toggleNestedDrawer = () => {
    setIsNestedDrawerOpen(!isNestedDrawerOpen);
  };
  return (
    <Box>
      <Container
        maxWidth="xl"
        sx={{
          my: { xs: 2, md: 6 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 8,
          zIndex: 10,
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
            sx={{ borderRadius: 6, border: "2px solid", fontWeight: 600 }}
            startIcon={
              isListIcon ? (
                <FiList style={{ fontSize: "28px" }} />
              ) : (
                <FiX style={{ fontSize: "28px" }} />
              )
            }
            onClick={() => {
              toggleIcon();
              toggleCatalog();
            }}
          >
            *КАТАЛОГ
          </Button>

          <Box
            sx={{
              width: { sm: "200px", md: "250px", lg: "400px", xl: "500px" },
            }}
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
            {isDarkMode ? (
              <BiSun />
            ) : (
              <DarkModeIcon style={{ color: "#000" }} />
            )}
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
              startIcon={<FiList />}
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

      <Drawer
        open={isCatalogOpen}
        onClose={toggleCatalog}
        anchor="left"
        variant="persistent"
        sx={{
          zIndex: 5,
          [`& .MuiDrawer-paper`]: { top: "140px", zIndex: 5 },
          display: { xs: "none", xl: "block" },
        }}
      >
        <Box
          sx={{
            width: "450px",
            padding: "20px",
          }}
        >
          {data.map((item, index) => (
            <Box
              onMouseEnter={toggleNestedDrawer}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                justifyContent: "space-between",
                my: 1,
                px: 1,
                borderRadius: 1,
                cursor: "pointer",
                backgroundColor:
                  index === activeIndex ? "#8c8c8c" : "transparent",
                "&:hover": { backgroundColor: "#8c8c8c" },
              }}
              key={index}
              onClick={() => {
                handleClick(index), toggleNestedDrawer();
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography sx={{ fontSize: "28px" }}>{item.icon}</Typography>
                <Typography fontWeight={600}>{item.text}</Typography>
              </Box>
              <BiChevronRight style={{ fontSize: "28px" }} />
            </Box>
          ))}
        </Box>
      </Drawer>
      {isCatalogOpen && (
        <Drawer
          open={isNestedDrawerOpen}
          onClose={() => {
            toggleNestedDrawer();
            toggleCatalog();
          }}
          anchor="left"
          variant="persistent"
          sx={{
            width: 300,
            position: "absolute",
            [`& .MuiDrawer-paper`]: {
              left: "450px",
              top: "140px",
              zIndex: 4,
              width: "100%",
              display: { xs: "none", xl: "block" },
            },
          }}
        >
          <Box
            sx={{
              width: "1000px",
              padding: "20px",
              overflowY: "auto", // Pastga scroll qilish
              maxHeight: "80vh",
              "&::-webkit-scrollbar": {
                width: 0,
                background: "transparent",
              },
            }}
          >
            <Grid container spacing={2} direction="row" alignItems="center">
              {catalogue.map((item, index) => (
                <Grid item xl={4} key={index}>
                  <Typography fontWeight={600}>{item.name}</Typography>
                  <Box
                    sx={{
                      mt: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        "&:hover": {
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                      }}
                    >
                      {item.text1}
                    </Typography>
                    <Typography
                      sx={{
                        "&:hover": {
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                      }}
                    >
                      {item.text2}
                    </Typography>
                    <Typography
                      sx={{
                        "&:hover": {
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                      }}
                    >
                      {item.text3}
                    </Typography>
                    <Typography
                      sx={{
                        "&:hover": {
                          textDecoration: "underline",
                          fontWeight: "500",
                        },
                      }}
                    >
                      {item.text4}
                    </Typography>
                    <Typography
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        color: "gray",
                      }}
                    >
                      Ещё <BiChevronDown />
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

const data = [
  {
    icon: <SlEarphones />,
    text: "*ЭЛЕКТРОНИКА",
  },
  {
    icon: <BsLaptop />,
    text: "*НОУТБУКИ И КОМПЬЮТЕРЫ",
  },
  {
    icon: <BiSolidWasher />,
    text: "*БЫТОВАЯ ТЕХНИКА",
  },
  {
    icon: <PiBooksBold />,
    text: "*КНИГИ",
  },
];
