import { useTranslation } from "next-i18next";
import { useState } from "react";
import styles from "../styles/Intro.module.css";
// Import Swiper styles
import { useMediaQuery } from "@mui/material";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Intro(props) {
  const { t } = useTranslation("common");
  const [activeIndex, setactiveIndex] = useState(1);
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <section className={styles.container}>
      <img alt="intro" src={"/images/blue-dot.png"} />
      <img alt="intro" src={"/images/blue-dot.png"} />
      <img alt="intro" src={"/images/blue-dot.png"} />
      <div className={styles.overlay}>
        <div className={styles.col60}>
          <h1 data-aos="fade-left" data-aos-delay="100">
            {t("hi_iam")}
          </h1>
          <h2 data-aos="fade-left" data-aos-delay="200">
            achref mtir
          </h2>
          <h3 data-aos="fade-left" data-aos-delay="300">
            {t("fullstack_developer")}
          </h3>
          <p data-aos="fade-left" data-aos-delay="400">
            {t("intro")}
          </p>
          <div className={styles.row}>
            <a
              data-aos="fade-up"
              data-aos-delay="600"
              href="https://github.com/Achtrick"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="achref-github" src="/icons/github.webp" />
            </a>
            <a
              data-aos="fade-up"
              data-aos-delay="700"
              href="https://www.linkedin.com/in/ashref-mtir-192426160/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="achref-linkedin" src="/icons/linkedin.webp" />
            </a>
            <a
              data-aos="fade-up"
              data-aos-delay="800"
              href="https://www.instagram.com/achref_mtir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="achref-instagram" src="/icons/instagram.webp" />
            </a>
          </div>
        </div>
        <div className={styles.col40}>
          <img
            data-aos="fade-right"
            data-aos-delay={isMobile ? "" : "1000"}
            alt="achref-mtir"
            src="/images/achref.png"
          />
        </div>
      </div>
    </section>
  );
}
