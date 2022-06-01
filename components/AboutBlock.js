import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function AboutBlock(props) {
  const { classes } = props;
  const { t } = useTranslation("common");
  return (
    <section className="aboutBlock_container">
      <div className="image_container">
        <Image
          className="astronaut"
          src="/images/astronaut.webp"
          alt="Planet"
          width={600}
          height={600}
        />
      </div>
      <div className="about_content">
        <h2 data-aos="fade-left">{t("about_title")}</h2>
        <p data-aos="fade-left" data-aos-delay="600">
          {t("about_description")}
        </p>
      </div>
    </section>
  );
}
