import Layout from "../../components/Layout";
import OurNews from "../../components/OurNews";
import ArticleIntro from "../../components/ArticleIntro";
import Article from "../../components/Article";
import ServicesBlock from "../../components/ServicesBlock";
import OurBrochure from "../../components/OurBrochure";
import ContactBlock from "../../components/ContactBlock";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import client from "../../utils/client";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

export default function ArticleScreen({ slug }) {
  const [state, setState] = useState({
    article: null,
    loading: true,
  });
  const { loading, article } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const article = await client.fetch(
          `*[_type == "news" && slug.current == $slug][0]`,
          { slug: slug }
        );
        setState({ article, loading: false });
      } catch (error) {
        setState({ loading: false });
      }
    };
    fetchData();
  }, [slug]);

  return (
    <Layout
      title={article?.title}
      description="Creo - Knowledge & Innovation"
      tags={["creo", "digital", "Knowledge", "Innovation"]}
    >
      {loading ? (
        <div className="spinner">
          <CircularProgress />
        </div>
      ) : (
        <ArticleIntro title={article.title} />
      )}
      {loading ? (
        <div className="spinner">
          <CircularProgress />
        </div>
      ) : (
        <Article description={article.description} />
      )}

      <OurNews />
      <ServicesBlock />
      <OurBrochure />
      <div style={{ marginBottom: "-150px" }}>
        <ContactBlock />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      slug: context.params.slug,
      ...(await serverSideTranslations(context.locale, ["common"])),
    },
  };
}
