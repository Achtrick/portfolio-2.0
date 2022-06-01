import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function AboutResume(props) {
  const { t } = useTranslation("common");
  return (
    <div className="aboutResume_container">
      <div className="flex start" data-aos="fade-right" data-aos-delay="500">
        <div className="aboutResume_col">
          <div className="flex start">
            <div className="aboutResume_item">
              <h3>{t("as_item1")}</h3>
              <Image
                src="/images/planet1.webp"
                alt="Excellence"
                width={70}
                height={70}
              />
            </div>
          </div>
          <p>{t("as_item1_description")}</p>
        </div>
      </div>
      <div className="flex end" data-aos="fade-left" data-aos-delay="500">
        <div className="aboutResume_col">
          <div className="flex end">
            <div className="aboutResume_item">
              <h3>{t("as_item2")}</h3>
              <Image
                src="/images/planet2.webp"
                alt="Pragmatisme"
                width={70}
                height={70}
              />
            </div>
          </div>
          <p>{t("as_item2_description")}</p>
        </div>
      </div>
      <div className="flex start" data-aos="fade-right" data-aos-delay="500">
        <div className="aboutResume_col">
          <div className="flex start">
            <div className="aboutResume_item">
              <h3>{t("as_item3")}</h3>
              <Image
                src="/images/planet3.webp"
                alt="Creativity"
                width={70}
                height={70}
              />
            </div>
          </div>
          <p>{t("as_item3_description")}</p>
        </div>
      </div>
    </div>
  );
}
