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
      description="Creo - Knowledge & Innovation"
      tags={["creo", "digital", "Knowledge", "Innovation"]}
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
