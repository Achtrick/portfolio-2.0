import { CircularProgress } from "@mui/material";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Article.module.css";
import client from "../utils/client";
import { urlFor } from "../utils/image";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

function News(props) {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await client.fetch(`*[_type == "news" && _id == $id][0]`, {
        id: id,
      });
      setArticle(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchData();
  }, [id]);

  return (
    <Layout
      title={article?.title}
      description="Creo - Your portal for latest news and technologies in the web design and development"
      tags={article?.description?.split(" ")}
    >
      <section className={styles.container}>
        <div className={styles.overlay}>
          {loading ? (
            <div className="spinner">
              <CircularProgress sx={{ color: "#000" }} />
            </div>
          ) : (
            <div className={styles.article}>
              <div data-aos="fade-in" className={styles.header}>
                <img
                  alt={article.title}
                  src={urlFor(article.image.asset._ref)}
                />
                <div className={styles.articleOverlay}>
                  <h1>{article.title}</h1>
                </div>
              </div>
              <p data-aos="fade-in" data-aos-delay="400">
                {article.description}
              </p>
              <h2 data-aos="fade-in">{article.body}</h2>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default News;
