// import { createTheme } from "@mui/material/styles";
import { Link } from "@mui/material";
import NextLink from "next/link";
// import classes from "../utils/classes";
import Image from "next/image";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styles from "../styles/Footer.module.css";
import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation("common");

  return (
    <section className={styles.footer}>
      <div className={styles.col}>
        <div className={styles.content}>
          <div className={styles.group}>
            <PhoneIcon sx={{ color: "#FFF", marginRight: "15px" }} />
            <p sx={{ color: "#FFF" }}>{t("footer_phone")}</p>
          </div>
          <div className={styles.group}>
            <EmailIcon sx={{ color: "#FFF", marginRight: "15px" }} />
            <p sx={{ color: "#FFF" }}>{t("footer_mail")}</p>
          </div>
          <div className={styles.group}>
            <LocationOnIcon sx={{ color: "#FFF", marginRight: "15px" }} />
            <p sx={{ color: "#FFF" }}>{t("footer_address")}</p>
          </div>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.content}>
          <div className={styles.row}>
            <NextLink href="https://www.facebook.com/CreoSousse" passHref>
              <Link style={{ margin: "6px" }}>
                <Image
                  src="/images/facebook.webp"
                  alt="facebook"
                  width={30}
                  height={30}
                />
              </Link>
            </NextLink>
            <NextLink href="https://www.instagram.com/CreoSousse" passHref>
              <Link style={{ margin: "6px" }}>
                <Image
                  src="/images/instagram.webp"
                  alt="instagram"
                  width={30}
                  height={30}
                />
              </Link>
            </NextLink>
            <NextLink href="https://www.linkedin.com/in/CreoSousse" passHref>
              <Link style={{ margin: "6px" }}>
                <Image
                  src="/images/linkedin.webp"
                  alt="linkedin"
                  width={30}
                  height={30}
                />
              </Link>
            </NextLink>
            <NextLink href="https://www.twitter.com/CreoSousse" passHref>
              <Link style={{ margin: "6px" }}>
                <Image
                  src="/images/twitter.webp"
                  alt="twitter"
                  width={30}
                  height={30}
                />
              </Link>
            </NextLink>
            <NextLink
              href="https://www.youtube.com/channel/CreoSousse"
              passHref
            >
              <Link style={{ margin: "6px" }}>
                <Image
                  src="/images/youtube.webp"
                  alt="youtube"
                  width={30}
                  height={30}
                />
              </Link>
            </NextLink>
          </div>
          <div className={styles.row}>
            <p style={{ marginRight: "10px" }}>{t("footer_copyright")}</p>

            <Image
              src="/images/logo-white.webp"
              alt="logo"
              width={120}
              height={35}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
