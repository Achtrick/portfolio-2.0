import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Services.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import ContactBlock from "../../components/ContactBlock";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Service() {
  const { locale } = useRouter();
  const { t } = useTranslation("common");

  return (
    <Layout
      title="Community management"
      description="Creo - Knowledge & Innovation"
      tags={["creo", "digital", "Knowledge", "Innovation"]}
    >
      <section className={styles.intro}>
        <img
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="500"
          alt="service_Img"
          src={"/" + "./images/about-bg.webp"}
        />
        <div className={styles.row}>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
            className={styles.col50}
          >
            <h1>{t("com_intro_title")}</h1>
            <h2>{t("com_intro_desc")}</h2>
          </div>
          <div className={styles.col50}>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              className={styles.imgHolder}
            >
              <img alt="service_Img" src={"/" + "./images/management.webp"} />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section1}>
        {/* <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          {t("com_title1")}
        </h1>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          {t("com_desc1")}
        </p> */}
        <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">
          {t("com_title2")}
        </h1>
        {/* <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">
          {t("com_desc2")}
        </p> */}
        <img
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="700"
          src={"/" + "./images/tear_drop.svg"}
        />
      </section>
      <section className={styles.section2}>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="500"
          className={styles.row}
        >
          <div className={styles.col}>
            <div className={styles.imgHolder}>
              <img alt="service_Img" src={"/" + "./icons/etude.webp"} />
            </div>
            <h1>{t("com_title3")}</h1>
            {/* <p>{t("com_desc3")}</p> */}
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="500"
          className={styles.chart}
        >
          <svg viewbox="0 100 0 100">
            <line x1="150" x2="150" y1="0" y2="100" />
          </svg>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="500"
          className={styles.even}
        >
          <div className={styles.col}>
            <div className={styles.imgHolder}>
              <img alt="service_Img" src={"/" + "./icons/plan.webp"} />
            </div>
            <h1>{t("com_title4")}</h1>
            {/* <p>{t("com_desc4")}</p> */}
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="500"
          className={styles.chart}
        >
          <svg viewbox="0 100 0 100">
            <line x1="150" x2="150" y1="0" y2="100" />
          </svg>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="500"
          className={styles.row}
        >
          <div className={styles.col}>
            <div className={styles.imgHolder}>
              <img alt="service_Img" src={"/" + "./icons/invest.svg"} />
            </div>
            <h1>{t("com_title5")}</h1>
            {/* <p>{t("com_desc5")}</p> */}
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="500"
          className={styles.chart}
        >
          <svg viewbox="0 100 0 100">
            <line x1="150" x2="150" y1="0" y2="100" />
          </svg>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="500"
          className={styles.even}
        >
          <div className={styles.col}>
            <div className={styles.imgHolder}>
              <img alt="service_Img" src={"/" + "./icons/test.webp"} />
            </div>
            <h1>{t("com_title6")}</h1>
            {/* <p>{t("com_desc6")}</p> */}
          </div>
        </div>
      </section>
      <section style={{ marginBottom: "-150px" }}>
        <ContactBlock />
      </section>
    </Layout>
  );
}
