import React from "react";
import { useTranslation } from "next-i18next";

export default function NewsIntro(props) {
  const { t } = useTranslation("common");
  return (
    <section className="news_intro_container">
      <div className="news_intro_overlay"></div>
      <div className="news_intro_content">
        <h1 data-aos="fade-up" data-aos-delay="200">
          {t("news_intro_title")}
        </h1>
        <p data-aos="fade-up" data-aos-delay="300">
          {t("news_intro_description")}
        </p>
      </div>
    </section>
  );
}
