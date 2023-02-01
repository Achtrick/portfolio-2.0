import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "../styles/Intro.module.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Autoplay, Mousewheel, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-flip";
import { useMediaQuery } from "@mui/material";

export default function Intro(props) {
  const { t } = useTranslation("common");
  const [activeIndex, setactiveIndex] = useState(1);
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <section className={styles.container}>
      <img alt="intro" src={"/images/intro.webp"} />
      <div className={styles.overlay}>
        <div className={styles.col60}>
          <h1>{t("hi_iam")}</h1>
          <h2>achref mtir</h2>
          <h3>{t("fullstack_developer")}</h3>
          <p>{t("intro")}</p>
          <div className={styles.row}>
            <img alt="achref-github" src="/icons/github.webp" />
            <img alt="achref-linkedin" src="/icons/linkedin.webp" />
            <img alt="achref-instagram" src="/icons/instagram.webp" />
          </div>
        </div>
        <div className={styles.col40}>
          <img alt="achref-mtir" src="/images/achref.webp" />
        </div>
      </div>
    </section>
  );
}
