import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFlip,
  Autoplay,
  Mousewheel,
  Pagination,
} from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-flip";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";

export default function Intro(props) {
  const { t } = useTranslation("common");
  const [activeIndex, setactiveIndex] = useState(1);
  const { pathname } = useRouter();
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <section className={styles.container}>
      <Swiper
        style={{ zIndex: "0" }}
        modules={[EffectFlip, Mousewheel, Pagination, Autoplay]}
        mousewheel={true}
        autoplay
        onSlideChange={(e) => setactiveIndex(e.activeIndex + 1)}
        effect={"flip"}
        pagination={{
          clickable: true,
        }}
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img
            alt="creo"
            src={
              isMobile
                ? "/" + "./images/home1mobile.png"
                : "/" + "./images/home.png"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="creo"
            src={
              isMobile
                ? "/" + "./images/home2mobile.png"
                : "/" + "./images/home2.png"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="creo"
            src={
              isMobile
                ? "/" + "./images/home3mobile.png"
                : "/" + "./images/home3.png"
            }
          />
        </SwiperSlide>
      </Swiper>

      <div className={styles.links}>
        <p>{t("follow_us")}</p>
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/CreoSousse">
          <img alt="creo-facebook" src={"/" + "./images/facebook.webp"} />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/creo_consulting/">
          <img alt="creo-instagram" src={"/" + "./images/instagram.webp"} />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.twitter.com/CreoSousse">
          <img alt="creo-twitter" src={"/" + "./images/twitter.webp"} />
        </a>
        <a
          target="_blank" rel="noreferrer"
          href="https://www.linkedin.com/company/creo-tn/mycompany/"
        >
          <img alt="creo-linkedin" src={"/" + "./images/linkedin.webp"} />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/CreoSousse">
          <img alt="creo-youtube" src={"/" + "./images/youtube.webp"} />
        </a>
      </div>
      <div className={styles.overlay}>
        <h1>knowledge and</h1>
        <h1>innovation</h1>
        <p>{t("portfolio_intro_description")}</p>
      </div>
      <div className={styles.button}>
        <Link href="services">
          <button>{t("discover")}</button>
        </Link>
      </div>
      <div className={styles.pagination}>____0{activeIndex}</div>
    </section>
  );
}
