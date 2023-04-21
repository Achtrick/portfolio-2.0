// import { createTheme } from "@mui/material/styles";
import { Link } from "@mui/material";
import { useTranslation } from "next-i18next";
import NextLink from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const { t } = useTranslation("common");
  const date = new Date();

  return (
    <div className={styles.container}>
      <a
        href="https://github.com/Achtrick"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="achref-github" src="/icons/github.webp" />
      </a>
      &nbsp; &nbsp;
      <a
        href="https://www.linkedin.com/in/ashref-mtir-192426160/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="achref-linkedin" src="/icons/linkedin.webp" />
      </a>
      &nbsp; &nbsp;
      <a
        href="https://www.instagram.com/achref_mtir/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="achref-instagram" src="/icons/instagram.webp" />
      </a>
    </div>
  );
}
