import React, { useEffect, useState } from "react";
import { IconButton, Drawer, useMediaQuery, Menu, Modal } from "@mui/material";
import NextLink from "next/link";
//import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import client from "../utils/client";
var stringSimilarity = require("string-similarity");
import styles from "../styles/Navbar.module.css";
import Link from "next/dist/client/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header(props) {
  //const { darkMode, setDarkMode } = props;
  const router = useRouter();
  const { locale, asPath } = useRouter();
  const { t } = useTranslation("common");
  const isMobile = useMediaQuery("(max-width:768px)");
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
    try {
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 30;
      setScrolled(scrollCheck);
    });
  });

  return (
    <>
      <Modal
        anchor="top"
        open={sidbarVisible}
        onClose={() => setSidebarVisible(!setSidebarVisible)}
      >
        <div className={styles.drawer}>
          <div className={styles.mobilelinks}>
            <IconButton
              style={{ color: "#fff" }}
              onClick={() => setSidebarVisible(!setSidebarVisible)}
            >
              <CloseIcon />
            </IconButton>
            <Link href="/">{t("home")}</Link>
            <Link href="/services">{t("services")}</Link>
            <Link href="/portfolio">{t("portfolio")}</Link>
            <Link href="/blog">{t("blog")}</Link>
            <Link href="/contact">{t("contact")}</Link>
          </div>
        </div>
      </Modal>
      <div
        style={{
          backgroundColor:
            router.pathname !== "/" && router.pathname !== "/services"
              ? "#000"
              : null,
        }}
        className={styles.navbar}
      >
        <div className={styles.openDrawer}>
          <IconButton
            onClick={() => setSidebarVisible(true)}
            sx={{ color: "white !important" }}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className={styles.logo}>
          <Link href="/">
            <img
              style={{ cursor: "pointer" }}
              alt="creo"
              src={"/" + "./images/logo-white.webp"}
            />
          </Link>
        </div>
        <div className={styles.links}>
          <Link href="/">{t("home")}</Link>
          <Link href="/services">{t("services")}</Link>
          <Link href="/portfolio">{t("portfolio")}</Link>
          <Link href="/blog">{t("blog")}</Link>
          <Link href="/contact">{t("contact")}</Link>
        </div>
        <div className={styles.lang}>
          <form onSubmit={submitHandler} style={{ display: "flex" }}>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={styles.search}
              type="text"
              required
            />
            <IconButton
              type="submit"
              sx={{ color: "white", width: "40px", height: "40px" }}
            >
              <SearchIcon sx={{ color: "white !important" }} />
            </IconButton>
          </form>
          &nbsp;
          <p onClick={() => setShowLangsList(!showLangsList)}>
            {locale === "fr"
              ? isMobile
                ? "fr"
                : "français"
              : locale === "en"
              ? isMobile
                ? "en"
                : "english"
              : null}
          </p>
          <div
            className={
              showLangsList
                ? `${styles.langmenu} ${styles.open}`
                : styles.langmenu
            }
          >
            {locale === "fr" ? (
              <Link
                onClick={() => setShowLangsList(false)}
                href={asPath}
                locale={"en"}
              >
                <p>{isMobile ? "en" : "english"}</p>
              </Link>
            ) : (
              <Link
                onClick={() => setShowLangsList(false)}
                href={asPath}
                locale={"fr"}
              >
                <p>{isMobile ? "fr" : "français"}</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
