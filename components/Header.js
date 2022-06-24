import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  TextField,
  useMediaQuery,
  List,
  ListItem,
  Divider,
  Slide,
  Dialog,
  DialogContent,
  // Link
  //Switch
} from "@mui/material";
import NextLink from "next/link";
//import Link from "next/link";
import classes from "../utils/classes";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import client from "../utils/client";
var stringSimilarity = require("string-similarity");

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Header(props) {
  //const { darkMode, setDarkMode } = props;
  const router = useRouter();
  const { locale, asPath } = useRouter();
  const { t } = useTranslation("common");
  const isDesktop = useMediaQuery("(min-width:600px)");
  const [sidbarVisible, setSidebarVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState("");
  const [showLangsList, setShowLangsList] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [searching, setSearching] = useState(false);
  const [logo, setLogo] = useState({
    src: "/images/logo-white.webp",
    width: 90,
    height: 24,
  });
  const [routes, setRoutes] = useState([
    {
      url: "/services/web&mobile_development",
      keywords:
        "web mobile dev developement développement developement application ",
    },
    {
      url: "/services/design&graphisme",
      keywords: "design graphic graphique chart charte logo affiche  ",
    },
    {
      url: "/services/referencement",
      keywords:
        "referencing referncement référencement seo sao sma smo sponsoring sponsorisé facebook instagram tiktok linkedin twitter ",
    },
    {
      url: "/services/marketing",
      keywords: "marketing digitale digital ",
    },
    {
      url: "/services/community_management",
      keywords:
        "community management page facebook page instagram media média ",
    },
  ]);

  let servicesRoutes = [
    "/services/web&mobile_development",
    "/services/design&graphisme",
    "/services/referencement",
    "/services/marketing",
    "/services/community_management",
  ];

  const sidebarOpenHandler = () => {
    setSidebarVisible(true);
  };

  const sidebarCloseHandler = () => {
    setSidebarVisible(false);
  };

  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setSearching(true);
    const fetchData = async () => {
      const articleRoutes = await client.fetch(`*[_type == "news"]`);
      articleRoutes.map((route) => {
        routes.push({
          url: "/news/" + route.slug.current,
          keywords: route.description,
        });
      });
      routes.forEach((route) => {
        stringSimilarity.compareTwoStrings(query, route.keywords) >= 0.15
          ? router?.push(route.url)
          : setSearching(false);
      });
    };
    if (query) {
      await fetchData();
      setSidebarVisible(false);
    } else {
      setSearching(false);
      setSidebarVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 30;
      setScrolled(scrollCheck);
    });
  });

  useEffect(() => {
    if (servicesRoutes.includes(asPath)) {
      setLogo({ ...logo, src: "/images/logo.webp", width: 120, height: 78 });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath]);

  return (
    <AppBar
      position="fixed"
      sx={
        scrolled
          ? {
              ...classes.appbar,
              backdropFilter: "blur(4px);",
              backgroundColor: "rgba(49,39,131,0.48) ",
            }
          : classes.appbar
      }
    >
      {isDesktop ? (
        <Toolbar sx={classes.toolbar} width="100%">
          <Box display="flex" alignItems="center" width="20%">
            <NextLink href="/" passHref>
              
                <a><Image
                  style={{ cursor: "pointer" }}
                  src={logo.src}
                  alt="logo"
                  width={logo.width}
                  height={logo.height}
                /></a>
              
            </NextLink>
          </Box>
          <Box
            width="60%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={classes.navbarContainer}
          >
            <Box sx={classes.navbarMenu}>
              <NextLink href="/" passHref>
                
                  <a><Typography sx={classes.menuTitle}>{t("home")}</Typography></a>
                
              </NextLink>
              <NextLink href="/about" passHref>
                
                  <a><Typography sx={classes.menuTitle}>{t("about")}</Typography></a>
                
              </NextLink>
              <Box
                onClick={(e) => {
                  e.preventDefault();
                  setShowServices(true);
                }}
              >
                <Typography sx={classes.menuTitle}>{t("services")}</Typography>
              </Box>
              <NextLink href="/portfolio" passHref>
                
                  <a><Typography sx={classes.menuTitle}>
                    {t("portfolio")}
                  </Typography></a>
                
              </NextLink>
              <NextLink href="/joinus" passHref>
                
                  <a><Typography sx={classes.menuTitle}>
                    {t("joinus_title")}
                  </Typography></a>
                
              </NextLink>
              <NextLink href="/news" passHref>
                
                  <a><Typography sx={classes.menuTitle}>{t("news")}</Typography></a>
                
              </NextLink>
              <NextLink href="/contact" passHref>
                
                  <a><Typography sx={classes.menuTitle}>{t("contact")}</Typography></a>
                
              </NextLink>
            </Box>
            <Box>
              <div
                className="languages flex center"
                onClick={() => setShowLangsList(!showLangsList)}
              >
                <div className="selected-lang">
                  <Image
                    src={`/images/langs/${locale === "fr" ? "fr" : "en"}.webp`}
                    alt="Lang"
                    width={25}
                    height={25}
                  />
                </div>
                <KeyboardArrowDownIcon
                  className={showLangsList ? "rotate" : ""}
                />
                <div
                  className={
                    showLangsList ? "list-languages show" : "list-languages"
                  }
                >
                  <ul>
                    <li>
                      <NextLink href={asPath} locale="fr">
                        <a className="flex">
                          <Image
                            src="/images/langs/fr.webp"
                            alt="Lang"
                            width={25}
                            height={25}
                          />
                          <span className="lang-list">Français</span>
                        </a>
                      </NextLink>
                    </li>
                    <li>
                      <NextLink href={asPath} locale="en">
                        <a className="flex">
                          <Image
                            src="/images/langs/en.webp"
                            alt="Lang"
                            width={25}
                            height={25}
                          />
                          <span className="lang-list">English</span>
                        </a>
                      </NextLink>
                    </li>
                  </ul>
                </div>
              </div>
            </Box>
          </Box>
          <Box
            width="20%"
            display={"flex"}
            alignItems={"center"}
            justifyContent="right"
          >
            <Box sx={isDesktop ? classes.visible : classes.hidden}>
              <form onSubmit={submitHandler}>
                <Box sx={classes.searchForm}>
                  <input
                    id="search-input"
                    variant="standard"
                    name="query"
                    className="searchInput"
                    value={query}
                    onChange={queryChangeHandler}
                    color="primary"
                  />
                  <IconButton
                    type="submit"
                    sx={classes.searchButton}
                    aria-label="search"
                  >
                    {searching ? (
                      <CircularProgress size={30} color="white" />
                    ) : (
                      <SearchIcon size={50} color="white" />
                    )}
                  </IconButton>
                </Box>
              </form>
            </Box>
            {/* <Switch checked={darkMode} onChange={setDarkMode} /> */}
          </Box>
        </Toolbar>
      ) : (
        <Toolbar sx={{ justifyContent: "space-between", padding: "0px 10px" }}>
          <Box display="flex" alignItems="center">
            <NextLink href="/" passHref>
              
                <a><Image
                  style={{ cursor: "pointer" }}
                  src={logo.src}
                  alt="logo"
                  width={logo.width}
                  height={logo.height}
                /></a>
              
            </NextLink>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Box>
              <MenuIcon
                color="white"
                sx={{ fontSize: "30px", marginRight: "10px" }}
                onClick={() => setSidebarVisible(true)}
              />
            </Box>
            <Box>
              <div
                className="languages flex center"
                onClick={() => setShowLangsList(!showLangsList)}
              >
                <div className="selected-lang">
                  {" "}
                  <Image
                    src={`/images/langs/${locale === "fr" ? "fr" : "en"}.webp`}
                    alt="Lang"
                    width={25}
                    height={25}
                  />{" "}
                </div>
                <KeyboardArrowDownIcon
                  className={showLangsList ? "rotate" : ""}
                />
                <div
                  style={{ marginRight: "60px" }}
                  className={
                    showLangsList ? "list-languages show" : "list-languages"
                  }
                >
                  <ul>
                    <li>
                      <NextLink href={asPath} locale="fr">
                        <a className="flex">
                          <Image
                            src="/images/langs/fr.webp"
                            alt="Lang"
                            width={25}
                            height={25}
                          />
                          <span style={{ color: "#fff", marginLeft: "8px" }}>
                            Français
                          </span>
                        </a>
                      </NextLink>
                    </li>
                    <li>
                      <NextLink href={asPath} locale="en">
                        <a className="flex">
                          <Image
                            src="/images/langs/en.webp"
                            alt="Lang"
                            width={25}
                            height={25}
                          />{" "}
                          <span style={{ color: "#fff", marginLeft: "8px" }}>
                            English
                          </span>
                        </a>
                      </NextLink>
                    </li>
                  </ul>
                </div>
              </div>
            </Box>
          </Box>
        </Toolbar>
      )}
      <Dialog
        open={showServices}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setShowServices(false)}
        aria-describedby="alert-dialog-slide-description"
        sx={isDesktop ? classes.servicesDialog : classes.servicesDialogMobile}
      >
        <HighlightOffIcon
          sx={classes.closeIcon}
          onClick={() => {
            setShowServices(false);
          }}
        />
        <DialogContent>
          <Box sx={{ position: "relative" }}>
            <NextLink href="/services/web&mobile_development" passHref>
              
                <a><Typography
                  onClick={() => {
                    setSidebarVisible(false);
                    setShowServices(false);
                  }}
                  sx={classes.servicesTitle}
                >
                  {t("service1")}
                </Typography></a>
              
            </NextLink>
            <NextLink href="/services/design&graphisme" passHref>
              
                <a><Typography
                  onClick={() => {
                    setSidebarVisible(false);
                    setShowServices(false);
                  }}
                  sx={classes.servicesTitle}
                >
                  {t("service2")}
                </Typography></a>
              
            </NextLink>
            <NextLink href="/services/referencement" passHref>
              
                <a><Typography
                  onClick={() => {
                    setSidebarVisible(false);
                    setShowServices(false);
                  }}
                  sx={classes.servicesTitle}
                >
                  {t("service3")}
                </Typography></a>
              
            </NextLink>
            <NextLink href="/services/community_management" passHref>
              
                <a><Typography
                  onClick={() => {
                    setSidebarVisible(false);
                    setShowServices(false);
                  }}
                  sx={classes.servicesTitle}
                >
                  {t("service4")}
                </Typography></a>
              
            </NextLink>
            <NextLink href="/services/marketing" passHref>
              
                <a><Typography
                  onClick={() => {
                    setSidebarVisible(false);
                    setShowServices(false);
                  }}
                  sx={classes.servicesTitle}
                >
                  {t("service5")}
                </Typography></a>
              
            </NextLink>
          </Box>
        </DialogContent>
      </Dialog>
      <Drawer
        anchor="left"
        open={sidbarVisible}
        onClose={sidebarCloseHandler}
        sx={{
          "& .MuiPaper-root.MuiPaper-elevation": {
            backgroundColor: "rgba(49,39,131,0.48)",
            backdropFilter: "blur(15px)",
          },
        }}
      >
        <List>
          <ListItem>
            <Box>
              <form onSubmit={submitHandler}>
                <Box sx={classes.searchForm}>
                  <TextField
                    id="search-input"
                    variant="standard"
                    name="query"
                    sx={classes.searchInputMobile}
                    value={query}
                    onChange={queryChangeHandler}
                    focused
                  />
                  <IconButton
                    type="submit"
                    sx={classes.searchButton}
                    aria-label="search"
                  >
                    {searching ? (
                      <CircularProgress size={30} color="white" />
                    ) : (
                      <SearchIcon size={50} color="white" />
                    )}
                  </IconButton>
                </Box>
              </form>
            </Box>
          </ListItem>
          <Divider light />
        </List>
        <Box sx={{ display: "block" }}>
          <NextLink href="/" passHref>
            
              <a><Typography sx={{ color: "#FFF", padding: "10px 20px" }}>
                {t("home")}
              </Typography></a>
            
          </NextLink>
          <NextLink href="/about" passHref>
            
            <a><Typography sx={{ color: "#FFF", padding: "10px 20px" }}>
                {t("about")}
              </Typography></a>
            
          </NextLink>
          <NextLink href="/services" passHref>
            
              <a><Typography
                onClick={(e) => {
                  e.preventDefault();
                  setShowServices(true);
                }}
                sx={{ color: "#FFF", padding: "10px 20px" }}
              >
                {t("services")}
              </Typography></a>
            
          </NextLink>
          <NextLink href="/portfolio" passHref>
            
              <a><Typography sx={{ color: "#FFF", padding: "10px 20px" }}>
                {t("portfolio")}
              </Typography></a>
            
          </NextLink>
          <NextLink href="/news" passHref>
            
              <a><Typography sx={{ color: "#FFF", padding: "10px 20px" }}>
                {t("news")}
              </Typography></a>
            
          </NextLink>
          <NextLink href="/contact" passHref>
            
              <a><Typography sx={{ color: "#FFF", padding: "10px 20px" }}>
                {t("contact")}
              </Typography></a>
            
          </NextLink>
        </Box>
      </Drawer>
    </AppBar>
  );
}
