import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function ContactBlock(props) {
  const { classes } = props;
  const { t } = useTranslation("common");
  return (
    <section className="contactBlock_container">
      <div className="contactBlock_content">
        <h2 data-aos="fade-up" data-aos-delay="400">
          {t("contactBlock_title")}
        </h2>
        <p data-aos="fade-up" data-aos-delay="600">
          {t("contactBlock_description")}
        </p>
        <Link href="/contact">
          <button className="button">{t("contactBlock_button")}</button>
        </Link>
      </div>
    </section>
  );
}
