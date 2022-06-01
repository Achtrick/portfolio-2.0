import React from "react";
import { useTranslation } from "next-i18next";
import Bules from "./Bules";
import Link from "next/link";

export default function ServicesBlock(props) {
  const { classes } = props;
  const { t } = useTranslation("common");
  return (
    <section className="servicesBlock_container">
      <h2 data-aos="fade-up" data-aos-delay="200">
        {t("services_title")}
      </h2>
      <div className="servicesBlock_row">
        <div className="servicesBlock_col">
          <div className="servicesBlock_item" data-aos="fade-right">
            <h3>{t("service2")}</h3>
            <p>{t("service2_description")}</p>
            <Link href="/services/design&graphisme">
              <button className="button">{t("services_button")}</button>
            </Link>
            <div className="bules_container">
              <Bules />
            </div>
          </div>
          <div className="servicesBlock_item" data-aos="fade-right">
            <h3>{t("service4")}</h3>
            <p>{t("service4_description")}</p>
            <Link href="/services/community_management">
              <button className="button">{t("services_button")}</button>
            </Link>
            <div className="bules_container">
              <Bules />
            </div>
          </div>
          <div className="servicesBlock_item" data-aos="fade-right">
            <h3>{t("service5")}</h3>
            <p>{t("service5_description")}</p>
            <Link href="/services/marketing">
              <button className="button">{t("services_button")}</button>
            </Link>
            <div className="bules_container">
              <Bules />
            </div>
          </div>
        </div>
        <div className="servicesBlock_col">
          <div className="servicesBlock_item" data-aos="fade-left">
            <h3>{t("service1")}</h3>
            <p>{t("service1_description")}</p>
            <Link href="/services/web&mobile_development">
              <button className="button">{t("services_button")}</button>
            </Link>
            <div className="bules_container">
              <Bules />
            </div>
          </div>
          <div className="servicesBlock_item" data-aos="fade-left">
            <h3>{t("service3")}</h3>
            <p>{t("service3_description")}</p>
            <Link href="/services/referencement">
              <button className="button">{t("services_button")}</button>
            </Link>
            <div className="bules_container">
              <Bules />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
