import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { Box, Alert, CircularProgress } from "@mui/material";
import client from "../utils/client";
import NewsItem from "./NewsItem";

export default function OurNews(props) {
  const { t } = useTranslation("common");

  const [state, setState] = useState({
    news: [],
    error: "",
    loading: true,
  });
  const { loading, error, news } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const news = await client.fetch(
          `*[_type == "news" && isActive == true] | order(order asc)`
        );
        setState({ news, loading: false });
      } catch (error) {
        setState({ error: error.message, loading: false });
      }
    };
    fetchData();
  }, []);

  return (
    <div className="ourNews_container">
      <section className="ourNews_content_container">
        <div className="ourNews_content">
          <h2 data-aos="fade-right" data-aos-delay="200">
            {t("ourNews_title")}
          </h2>
          <p data-aos="fade-right" data-aos-delay="300">
            {t("ourNews_description")}
          </p>
        </div>
      </section>
      <section className="ourNews_items">
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Alert variant="danger">{error}</Alert>
        ) : (
          news?.map((myNew, index) => (
            <NewsItem myNew={myNew} key={myNew._id} />
          ))
        )}
      </section>
    </div>
  );
}
