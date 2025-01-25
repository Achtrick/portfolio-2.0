import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Modal, useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";
import { AppContext } from "./AppContext";

export default function Header(props) {
  const router = useRouter();
  const { locale, asPath } = useRouter();
  const { t } = useTranslation("common");
  const isMobile = useMediaQuery("(max-width:768px)");
  const [sidbarVisible, setSidebarVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { showLangsList, setShowLangsList } = useContext(AppContext);

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
        onClick={() => setShowLangsList(false)}
        style={{
          backdropFilter: scrolled ? "blur(15px)" : null,
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
        <div className={styles.links}>
          <Link href="/">
            <a className={router.pathname === "/" ? styles.activeLink : null}>
              {t("home")}
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
          <p
            className={styles.button}
            onClick={(e) => {
              e.stopPropagation();
              setShowLangsList(!showLangsList);
            }}
          >
            {locale === "fr"
              ? isMobile
                ? "fr"
                : "français"
              : locale === "en"
              ? isMobile
                ? "en"
                : "english"
              : null}{" "}
            {showLangsList ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
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
