import { CircularProgress } from "@mui/material";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Blog.module.css";
import client from "../utils/client";
import { urlFor } from "../utils/image";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Portfolio(props) {
  const { t } = useTranslation("common");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { locale } = useRouter();

  const fetchData = async () => {
    try {
      const data = await client.fetch(`*[_type == "news"]`);
      setArticles(data);
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
      title="Blog"
      description="Creo - Your portal for latest news and technologies in the web design and development"
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
        <div className={styles.overlay}>
          <div className={styles.header}>
            <h1 data-aos="fade-down">{t("news")}</h1>
            <div className={styles.articles}>
              {loading ? (
                <div className="spinner">
                  <CircularProgress sx={{ color: "#000" }} />
                </div>
              ) : (
                <>
                  {articles.map((article, index) => {
                    return (
                      <div
                        data-aos="zoom-out"
                        data-aos-delay={250 * index}
                        key={article._id}
                        className={styles.article}
                      >
                        <div className={styles.body}>
                          <a href={`/${locale}/news?id=${article._id}`}>
                            <img
                              alt={article.title}
                              src={urlFor(article.image.asset._ref)}
                            />
                            <div className={styles.imgOverlay}>
                              <img
                                alt={article.title}
                                src={"/" + "./images/link.webp"}
                              />
                            </div>
                          </a>
                          <h1>{article.title}</h1>
                          <p>
                            {article.description.length > 100
                              ? article.description.slice(0, 100) + "..."
                              : article.description}
                          </p>
                          <a
                            className={styles.button}
                            href={`/${locale}/news?id=${article._id}`}
                          >
                            {t("visit")}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
