// import { createTheme } from "@mui/material/styles";
import { Link } from "@mui/material";
import { useTranslation } from "next-i18next";
import NextLink from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const { t } = useTranslation("common");
  const date = new Date();

  return (
    <section className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.col30}>
          <h1>{t("our_services")}</h1>
          <NextLink href={`/portfolio?service=development`}>
            <p>{t("development") + " (web / mobile)"}</p>
          </NextLink>
          <NextLink href={`/portfolio?service=design`}>
            <p>{t("design_graphic")}</p>
          </NextLink>
          <NextLink href={`/portfolio?service=cm`}>
            <p>{t("community_management")}</p>
          </NextLink>
        </div>
        <div className={styles.col30}>
          <h1>{t("our_contacts")}</h1>
          <p>{t("footer_address")}</p>
          <p>+216 25 788 950 / +216 50 870 256</p>
          <p>contact@creo.tn</p>
        </div>
        <div className={styles.col30}>
          <h1>{t("follow_us")}</h1>
          <div className={styles.socials}>
            <NextLink href="https://www.facebook.com/CreoSousse" passHref>
              <Link style={{ margin: "6px" }}>
                <img src="/images/facebook.webp" alt="facebook" />
              </Link>
            </NextLink>
            <NextLink href="https://www.instagram.com/CreoSousse" passHref>
              <Link style={{ margin: "6px" }}>
                <img src="/images/instagram.webp" alt="instagram" />
              </Link>
            </NextLink>
            <NextLink href="https://www.linkedin.com/in/CreoSousse" passHref>
              <Link style={{ margin: "6px" }}>
                <img src="/images/linkedin.webp" alt="linkedin" />
              </Link>
            </NextLink>
            <NextLink href="https://www.twitter.com/CreoSousse" passHref>
              <Link style={{ margin: "6px" }}>
                <img src="/images/twitter.webp" alt="twitter" />
              </Link>
            </NextLink>
            <NextLink
              href="https://www.youtube.com/channel/CreoSousse"
              passHref
            >
              <Link style={{ margin: "6px" }}>
                <img src="/images/youtube.webp" alt="youtube" />
              </Link>
            </NextLink>
          </div>
        </div>
      </div>
      <div className={styles.hr} />
      <div className={styles.row}>
        <p style={{ marginRight: "10px" }}>
          Copyright &copy; {date.getFullYear()} by creo. All Rights Reserved.
        </p>
      </div>
    </section>
  );
}
