import React from "react";
import { useTranslation } from "next-i18next";

export default function AboutUs(props) {
  const { t } = useTranslation("common");
  return (
    <div className="aboutus_container">
      <div className="aboutus_content_container">
        <div className="aboutus_content">
          <h2 data-aos="fade-right" data-aos-delay="200">
            {t("aboutus_title")}
          </h2>
          <p data-aos="fade-up" data-aos-delay="300">
            {t("aboutus_description")}
          </p>
        </div>
      </div>
    </div>
  );
}
