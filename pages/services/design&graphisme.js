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
      title="Design and graphics"
      description="Creo - Design and graphics skills at youe service, our skilled designers will deliver your brand identity."
      tags={[
        "creo",
        "digital",
        "Knowledge",
        "Innovation",
        "graphic design",
        "crello",
        "graphic",
        "motion graphics",
        "graphic design courses",
        "paula scher",
        "massimo vignelli",
        "graphic artist",
        "motion designer",
        "neville brody",
        "freelance graphic designer",
        "visual designer",
        "vector illustration",
        "otl aicher",
        "social media design",
        "social media post design",
        "print design",
        "graphic design services",
        "graphic design logo",
        "digital designer",
        "graphic design website",
        "wolfgang weingart",
        "graphic designer near me",
        "famous graphic designers",
        "canva graphic design",
      ]}
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
            <h1>{t("design_intro_title")}</h1>
            <h2>{t("design_intro_desc")}</h2>
          </div>
          <div className={styles.col50}>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              className={styles.imgHolder}
            >
              <img alt="service_Img" src={"/" + "./images/design1.webp"} />
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
            <h1>{t("design_title3")}</h1>
            {/* <p>{t("design_desc3")}</p> */}
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
            <h1>{t("design_title4")}</h1>
            {/* <p>{t("design_desc4")}</p> */}
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
              <img alt="service_Img" src={"/" + "./icons/design.webp"} />
            </div>
            <h1>{t("design_title5")}</h1>
            {/* <p>{t("design_desc5")}</p> */}
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
              <img alt="service_Img" src={"/" + "./icons/deliver.webp"} />
            </div>
            <h1>{t("design_title6")}</h1>
            {/* <p>{t("design_desc6")}</p> */}
          </div>
        </div>
      </section>
      <section style={{ marginBottom: "-150px" }}>
        <ContactBlock />
      </section>
    </Layout>
  );
}
