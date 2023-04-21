import React, { useEffect, useState } from "react";
import styles from "../styles/Study.module.css";
import { useTranslation } from "next-i18next";
import { CircularProgress } from "@mui/material";
import client from "../utils/client";
import { useRouter } from "next/router";

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
      <p>{t("education")}</p>
      {loading ? (
        <div className="spinner">
          <CircularProgress sx={{ color: "#fff" }} />
        </div>
      ) : (
        <>
          {studies.map((study) => {
            return (
              <div key={study._id} className={styles.row}>
                <div className={styles.year}>{study.from + "-" + study.to}</div>
                <div className={styles.desc}>
                  <p>{locale === "en" ? study.en_title : study.fr_title}</p>
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
