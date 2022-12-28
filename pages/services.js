import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Services.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useTranslation } from "next-i18next";
import { CircularProgress, useMediaQuery } from "@mui/material";
import client from "../utils/client";
import { urlFor } from "../utils/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

function Services(props) {
  const { t } = useTranslation("common");
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery("(max-width:768px)");

  const fetchData = async () => {
    try {
      const partners = await client.fetch(
        `*[_type == "partener" && isActive == true] | order(order asc)`
      );
      setPartners(partners);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout
      title="Services"
      description="Creo - We offer a wide variaty of services to garantee your project success."
      tags={[
        "creo",
        "digital",
        "Knowledge",
        "Innovation",
        "community management",
        "hoa management companies",
        "community association management",
        "tribe management",
        "community management associates",
        "blue mountain community management",
        "community property management",
        "community management services",
        "cams property management",
        "community management corporation",
        "hoa property management",
        "associa hoa",
        "ccmc hoa",
        "north pointe property management",
        "rose community management",
        "consolidated community management",
        "professional community management",
        "condo association management",
        "cam management",
        "hoa property management companies",
        "cams hoa",
        "allinonemgmt",
        "all county community property manag",
        "cusick community management",
        "homeowners association management companies",
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
        "creo",
        "digital",
        "Knowledge",
        "Innovation",
        "marketing",
        "digital marketing",
        "affiliate marketing",
        "influencer",
        "social media marketing",
        "network marketing",
        "inbound marketing",
        "marketing strategy",
        "email marketing",
        "content marketing",
        "market segmentation",
        "marketing management",
        "segmentation",
        "marketing plan",
        "ssw marketing",
        "online marketing",
        "ansoff matrix",
        "influencer marketing",
        "digital marketing agency",
        "hubspot academy",
        "target market",
        "neuromarketing",
        "lead generation",
        "brand equity",
        "trade marketing",
        "creo",
        "digital",
        "Knowledge",
        "Innovation",
        "referencing",
        "reference",
        "harvard referencing",
        "apa in text citation",
        "chicago style citation",
        "apa referencing",
        "apa style citation",
        "harvard referencing style",
        "cite them right",
        "apa referencing style",
        "cite this for me apa",
        "ieee citation",
        "apa citation example",
        "apa 7 citation",
        "apa in text citation multiple authors",
        "oscola referencing",
        "harvard citation",
        "apa in text citation example",
        "vancouver referencing",
        "harvard referencing example",
        "apa 7 referencing",
        "cite this for me harvard",
        "reference list",
        "oscola",
        "harvard referencing website",
        "creo",
        "digital",
        "Knowledge",
        "Innovation",
        "web and mobile development",
        "hybrid apps",
        "ecommerce app development",
        " web and mobile app development",
        " mobile web development",
        " django mobile app",
        "native and hybrid app",
        " web and mobile development company",
        " web and mobile application development",
        "web and mobile app development company",
        " html5 mobile app",
        "mobile web application development",
        "mobile website development",
        "mobile web app development",
        "web and mobile app development services",
        "react native for web and mobile",
        "ecommerce application development company",
        "online mobile app development",
        "website and mobile app development",
        "app development website",
        " web design mobile",
        " website and mobile app developers",
        "web mobile development and marketing",
        " web and mobile application development company",
        "website application development company",
        "creo",
        "digital",
        "Knowledge",
        "Innovation",
        "marketing",
        "digital marketing",
        "affiliate marketing",
        "influencer",
        "social media marketing",
        "network marketing",
        "inbound marketing",
        "marketing strategy",
        "email marketing",
        "content marketing",
        "market segmentation",
        "marketing management",
        "segmentation",
        "marketing plan",
        "ssw marketing",
        "online marketing",
        "ansoff matrix",
        "influencer marketing",
        "digital marketing agency",
        "hubspot academy",
        "target market",
        "neuromarketing",
        "lead generation",
        "brand equity",
        "trade marketing",
      ]}
    >
      <div className={styles.container}>
        <img alt="creo-services" src={"/" + "./images/services.webp"} />
        <div className={styles.overlay}>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.title}>
                <h1>01</h1>
                <h1>
                  {t("development")}
                  <br /> web/mobile
                </h1>
              </div>
              <div className={styles.hr} />
              <div className={styles.description}>
                <p>{t("dev_service_1")}</p>
                <p> {t("dev_service_2")}</p>
                <p>{t("dev_service_3")}</p>
                <p>{t("dev_service_4")}</p>
                <p>{t("dev_service_5")}</p>
                <p>-UX/UI</p>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.title}>
                <h1>02</h1>
                <h1>
                  community
                  <br /> management
                </h1>
              </div>
              <div className={styles.hr} />
              <div className={styles.description}>
                <p>{t("cm_service_1")}</p>
                <p>{t("cm_service_2")}</p>
                <p>{t("cm_service_3")}</p>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.title}>
                <h1>03</h1>
                <h1>
                  {t("design&")}
                  <br /> {t("graphics")}
                </h1>
              </div>
              <div className={styles.hr} />
              <div className={styles.description}>
                <p>{t("design_service_1")}</p>
                <p>{t("design_service_2")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="spinner">
          <CircularProgress />
        </div>
      ) : (
        <Swiper
          modules={[Autoplay]}
          className={styles.swiper}
          spaceBetween={20}
          slidesPerView={isMobile ? 3 : 6}
          autoplay
          loop
          pagination={{ clickable: true }}
        >
          {partners.map((partner) => {
            return (
              <SwiperSlide key={partner._id}>
                <div className={styles.partner}>
                  <img
                    alt={partner.name}
                    src={urlFor(partner.image.asset._ref)}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </Layout>
  );
}

export default Services;
