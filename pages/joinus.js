import Layout from "../components/Layout";
import styles from "../styles/Joinus.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import SpontaniousApp from "../components/SpontaniousApp";
import PostView from "../components/PostView";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../components/AppContext";
import CircularProgress from "@mui/material/CircularProgress";
import client from "../utils/client";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function About(props) {
  const { locale } = useRouter();
  const { t } = useTranslation("common");
  const { openView, setOpenView, setOpenItem } = useContext(AppContext);

  useEffect(() => {
    setOpenView(false);
  }, []);

  const [state, setState] = useState({
    offers: [],
    loading: true,
  });
  const { loading, offers } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const offers = await client.fetch(
          `*[_type == "offer" ] | order(order asc)`
        );
        setState({ offers, loading: false });
      } catch (error) {
        setState({ loading: false });
      }
    };
    fetchData();
  }, []);

  return (
    <Layout
      title={"Join"}
      description="Creo - We are more than happy for you to join our team, if you believe that you have what it takes to join us please don't hesitate."
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
      ]}
    >
      <section className={styles.container}>
        <img src={"/" + "./images/joinusheader.webp"} />
        <div className={styles.overlay}>
          <h1 data-aos="flip-up">{t("joinus_title")}</h1>
          <p data-aos="fade-in" data-aos-delay="400">
            {t("joinus_description")}
          </p>
        </div>
        <div className={styles.imgOverlay}>
          <img
            data-aos="slide-left"
            data-aos-delay="400"
            src={"/" + "./images/spiral.svg"}
          />
        </div>
      </section>
      {openView ? (
        <PostView />
      ) : (
        <section className={styles.canvas}>
          {loading ? (
            <div className="spinner">
              <CircularProgress />
            </div>
          ) : (
            <section className={styles.grid}>
              <h1 data-aos="fade-up">{t("our_job_offers")}</h1>
              {offers?.map((offer, index) => {
                if (offer.category === "job")
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        window.scrollTo(0, 400);
                        setOpenItem(offer);
                        setOpenView(true);
                      }}
                      className={styles.col}
                    >
                      <div
                        className={styles.card}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                      >
                        <h2>{offer.name}</h2>
                        <p>{offer.description.slice(0, 120) + "..."}</p>
                      </div>
                    </div>
                  );
              })}
            </section>
          )}
          <section className={styles.grid}>
            <h1 data-aos="fade-up">{t("our_price_offers")}</h1>
            {offers?.map((offer, index) => {
              if (offer.category === "price")
                return (
                  <div
                    key={index}
                    onClick={() => {
                      window.scrollTo(0, 400);
                      setOpenItem(offer);
                      setOpenView(true);
                    }}
                    className={styles.col}
                    data-aos="fade-up"
                    data-aos-delay={index * 400}
                  >
                    <div className={styles.card}>
                      <h2>{offer.name}</h2>
                      <p>{offer.description.slice(0, 120) + "..."}</p>
                    </div>
                  </div>
                );
            })}
          </section>
          <section className={styles.grid}>
            <h1 data-aos="fade-up">{t("our_internship_offers")}</h1>
            {offers?.map((offer, index) => {
              if (offer.category === "internship")
                return (
                  <div
                    key={index}
                    onClick={() => {
                      window.scrollTo(0, 400);
                      setOpenItem(offer);
                      setOpenView(true);
                    }}
                    className={styles.col}
                    data-aos="fade-up"
                    data-aos-delay={index * 400}
                  >
                    <div className={styles.card}>
                      <h2>{offer.name}</h2>
                      <p>{offer.description.slice(0, 120) + "..."}</p>
                    </div>
                  </div>
                );
            })}
          </section>
        </section>
      )}
      <SpontaniousApp />
    </Layout>
  );
}
