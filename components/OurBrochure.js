import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";

export default function OurBrochure(props) {
  const { t } = useTranslation("common");
  const { locale } = useRouter();

  return (
    <div className="ourBrochure_container">
      <div className="image_rocket_container">
        <div className="image_rocket">
          <Image
            src="/images/rocket.webp"
            alt="Rocket"
            width={480}
            height={540}
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="1000"
          />
        </div>
      </div>
      <div className="ourBrochure_content_container">
        <div className="ourBrochure_content">
          <h2 data-aos="fade-down-right" data-aos-delay="200">
            {t("ourBrochure_title")}
          </h2>
          <p data-aos="fade-up-left" data-aos-delay="200">
            {t("ourBrochure_description")}
          </p>
          {locale === "en" ? (
            <a href={"/" + "./brochure.pdf"} download="Creo-Brochure.pdf">
              <button
                data-aos="fade-up"
                data-aos-delay="200"
                className="button"
              >
                {t("ourBrochure_button")}
              </button>
            </a>
          ) : (
            <a href={"/" + "./plaquette.pdf"} download="Creo-Plaquette.pdf">
              <button
                data-aos="fade-up"
                data-aos-delay="200"
                className="button"
              >
                {t("ourBrochure_button")}
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
