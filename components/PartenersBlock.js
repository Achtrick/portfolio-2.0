import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import NextLink from "next/link";
import {
  Alert,
  CardActionArea,
  CardActionAreaCardMedia,
  CardMedia,
  CircularProgress,
} from "@mui/material";
import { urlForThumbnail } from "../utils/image";
import client from "../utils/client";

export default function PartenersBlock(props) {
  const { classes } = props;
  const { t } = useTranslation("common");
  const [state, setState] = useState({
    parteners: [],
    error: "",
    loading: true,
  });
  const { loading, error, parteners } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const parteners = await client.fetch(
          `*[_type == "partener" && isActive == true] | order(order asc)`
        );
        setState({ parteners, loading: false });
      } catch (error) {
        setState({ error: error.message, loading: false });
      }
    };
    fetchData();
  }, []);

  return (
    <section className="partenersBlock_container">
      <h2 data-aos="fade-up" data-aos-delay="300">
        {t("parteners_title")}
      </h2>
      <div className="parteners_items">
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Alert variant="danger">{error}</Alert>
        ) : (
          parteners?.map((partener, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 400}
              className="partener_item"
              key={partener._id}
            >
              <Image
                src={urlForThumbnail(partener.image.asset._ref)}
                alt="Partener"
                width={100}
                height={100}
              />
            </div>
          ))
        )}
      </div>
      <div className="image-container" data-aos="fade-left">
        <Image
          src="/images/space2.webp"
          alt="Space"
          width={362}
          height={190}
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="1000"
        />
      </div>
    </section>
  );
}
