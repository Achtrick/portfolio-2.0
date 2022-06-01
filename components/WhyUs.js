import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

export default function WhyUs(props) {
  const { classes } = props;
  const { t } = useTranslation("common");

  return (
    <section className="whyus_container">
      <div className="image_container" data-aos="fade-right">
        <Image src="/images/space.webp" alt="Space" width={400} height={160} />
      </div>
      <div className="whyus_row">
        <div className="whyus_col">
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <Image
              data-aos="fade-right"
              data-aos-delay="200"
              src="/images/astronaut2.webp"
              alt="Astraunot"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="whyus_col">
          <h2 data-aos="fade-right" data-aos-delay="200">
            {t("whyus_title")}
          </h2>
          <p data-aos="fade-right" data-aos-delay="600">
            {t("whyus_description")}
          </p>
          <div className="whyus_items">
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="whyus_item"
            >
              <Image
                src="/images/item1.webp"
                alt="item"
                width={100}
                height={100}
              />
              <h3>{t("whyus_item1")}</h3>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="whyus_item"
            >
              <Image
                src="/images/item2.webp"
                alt="item"
                width={100}
                height={100}
              />
              <h3>{t("whyus_item2")}</h3>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              className="whyus_item"
            >
              <Image
                src="/images/item3.webp"
                alt="item"
                width={100}
                height={100}
              />
              <h3>{t("whyus_item3")}</h3>
            </div>
          </div>
          <div className="whyus_action">
            <span className="action">{t("whyus_question")}</span>
            <Link href="/portfolio">
              <button type="button" className="button">
                {t("whyus_button")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
