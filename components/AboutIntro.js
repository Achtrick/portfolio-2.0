import React from "react";
import { useTranslation } from "next-i18next";

export default function AboutIntro(props) {
  const { t } = useTranslation("common");
  return (
    <section className="about_intro_container">
      <div className="about_intro_overlay"></div>
      <div className="about_intro_content">
        <h1 data-aos="fade-up" data-aos-delay="200">
          {t("about_intro_title")}
        </h1>
        <p data-aos="fade-up" data-aos-delay="300">
          {t("about_intro_description")}
        </p>
      </div>
    </section>
  );
}
