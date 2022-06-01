import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
//import { useMediaQuery } from '@mui/material';

export default function Intro(props) {
  const { classes } = props;
  //const isBigScreen = useMediaQuery("(min-width:1800px)");
  const { t } = useTranslation("common");
  return (
    <section className="intro_container">
      <Image
        className="planet"
        src="/images/planet.webp"
        alt="Planet"
        width={640}
        height={649}
      />
      <div className="intro_background"></div>
      <div className="intro_content">
        <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="600">
          <h1>
            Knowledge <br />
            and innovation
          </h1>
          <p>{t("intro_description_1")}</p>
          <p>{t("intro_description_2")}</p>
        </div>
      </div>
    </section>
  );
}
