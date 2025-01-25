import { CircularProgress } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../styles/Study.module.css";
import client from "../utils/client";

function Study(props) {
  const { t } = useTranslation("common");
  const { locale } = useRouter();

  const [studies, setStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const studies = await client.fetch(`*[_type == "degree"]`);
      setStudies(studies);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <p data-aos="fade-in">{t("education")}</p>
      {loading ? (
        <div className="spinner">
          <CircularProgress sx={{ color: "#fff" }} />
        </div>
      ) : (
        <>
          {studies
            .sort((a, b) => {
              if (a.from < b.from) {
                return 1;
              }
              if (a.from > b.from) {
                return -1;
              }
              return 0;
            })
            .map((study, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={(index + 1) * 200}
                  key={study._id}
                  className={styles.row}
                >
                  <div className={styles.year}>
                    {study.from + " - " + study.to}
                  </div>
                  <div className={styles.desc}>
                    <p>{locale === "en" ? study.en_title : study.fr_title}</p>
                    <p>{study.institution}</p>
                  </div>
                </div>
              );
            })}
        </>
      )}
    </div>
  );
}

export default Study;
