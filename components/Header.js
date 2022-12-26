import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Modal, useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";
var stringSimilarity = require("string-similarity");

export default function Header(props) {
  const router = useRouter();
  const { locale, asPath } = useRouter();
  const { t } = useTranslation("common");
  const isMobile = useMediaQuery("(max-width:768px)");
  const [sidbarVisible, setSidebarVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState("");
  const [showLangsList, setShowLangsList] = useState(false);
  const [searching, setSearching] = useState(false);
  const routes = [
    {
      title: "development",
      keywords:
        "web mobile dev developement application javascript responsive agile organized",
    },
    {
      title: "design",
      keywords:
        "design graphic graphique ui ux responsive chart charte logo affiche carte visite",
    },
    {
      title: "cm",
      keywords:
        "community ads sponsoring compagne publicité management page facebook page instagram media média ",
    },
  ];

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      setSearching(true);
      const fetchData = async () => {
        var max = { x: 0, title: "" };
        routes.forEach((route) => {
          console.log(
            stringSimilarity.compareTwoStrings(query, route.keywords)
          );
          if (
            stringSimilarity.compareTwoStrings(query, route.keywords) > max.x
          ) {
            max.x = stringSimilarity.compareTwoStrings(query, route.keywords);
            max.title = route.title;
          }
          if (max.x !== 0) {
            router?.push(`portfolio?service=${max.title}`);
          } else {
            router?.push(`portfolio`);
          }
        });
      };
      if (query) {
        await fetchData();
      } else {
        setSearching(false);
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
        onClose={() => setSidebarVisible(!sidbarVisible)}
      >
        <div className={styles.drawer}>
          <div className={styles.mobilelinks}>
            <IconButton
              style={{ color: "#fff" }}
              onClick={() => setSidebarVisible(!sidbarVisible)}
            >
              <CloseIcon />
            </IconButton>
            <Link href="/">
              <a
                onClick={() => setSidebarVisible(!sidbarVisible)}
                className={router.pathname === "/" ? styles.activeLink : null}
              >
                {t("home")}
              </a>
            </Link>
            <Link href="/services">
              <a
                onClick={() => setSidebarVisible(!sidbarVisible)}
                className={
                  router.pathname === "/services" ? styles.activeLink : null
                }
              >
                {t("services")}
              </a>
            </Link>
            <Link href="/portfolio">
              <a
                onClick={() => setSidebarVisible(!sidbarVisible)}
                className={
                  router.pathname === "/portfolio" ? styles.activeLink : null
                }
              >
                {t("portfolio")}
              </a>
            </Link>
            <Link href="/blog">
              <a
                onClick={() => setSidebarVisible(!sidbarVisible)}
                className={
                  router.pathname === "/blog" ? styles.activeLink : null
                }
              >
                {t("blog")}
              </a>
            </Link>
            <Link href="/contact">
              <a
                onClick={() => setSidebarVisible(!sidbarVisible)}
                className={
                  router.pathname === "/contact" ? styles.activeLink : null
                }
              >
                {t("contact")}
              </a>
            </Link>
          </div>
        </div>
      </Modal>
      <div
        style={{
          backgroundColor:
            router.pathname !== "/" && router.pathname !== "/services"
              ? "#000"
              : scrolled
              ? "#000"
              : null,
          transition: "all 0.3s",
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
          <Link href="/">
            <a className={router.pathname === "/" ? styles.activeLink : null}>
              {t("home")}
            </a>
          </Link>
          <Link href="/services">
            <a
              className={
                router.pathname === "/services" ? styles.activeLink : null
              }
            >
              {t("services")}
            </a>
          </Link>
          <Link href="/portfolio">
            <a
              className={
                router.pathname === "/portfolio" ? styles.activeLink : null
              }
            >
              {t("portfolio")}
            </a>
          </Link>
          <Link href="/blog">
            <a
              className={router.pathname === "/blog" ? styles.activeLink : null}
            >
              {t("blog")}
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={
                router.pathname === "/contact" ? styles.activeLink : null
              }
            >
              {t("contact")}
            </a>
          </Link>
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
          &nbsp; &nbsp;
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
