import { CircularProgress } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../styles/Experience.module.css";
import client from "../utils/client";

function Experience(props) {
  const { t } = useTranslation("common");
  const { locale } = useRouter();

  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const experiences = await client.fetch(`*[_type == "experience"]`);
      setExperiences(experiences);
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
      <p data-aos="fade-in">{t("experience")}</p>
      {loading ? (
        <div className="spinner">
          <CircularProgress sx={{ color: "#fff" }} />
        </div>
      ) : (
        <>
          {experiences
            .sort((a, b) => {
              if (a.order < b.order) {
                return 1;
              }
              if (a.order > b.order) {
                return -1;
              }
              return 0;
            })
            .map((experience, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={(index + 1) * 200}
                  key={experience._id}
                  className={styles.row}
                >
                  <div className={styles.year}>
                    {experience.from + " / " + experience.to}
                  </div>
                  <div className={styles.desc}>
                    <p>
                      {locale === "en"
                        ? experience.en_title
                        : experience.fr_title}
                    </p>
                    <pre>
                      {locale === "en"
                        ? experience.en_description
                        : experience.fr_description}
                    </pre>
                  </div>
                </div>
              );
            })}
        </>
      )}
      <br />
      <hr data-aos="fade-up" data-aos-delay="800" />
      <div data-aos="fade-up" data-aos-delay="1000" className="cv">
        {locale === "en" ? (
          <a className={styles.cv} href={"./cv-en.pdf"} download="Ashref-Cv">
            DOWNLOAD CV
          </a>
        ) : (
          <a className={styles.cv} href={"./cv-fr.pdf"} download="Ashref-Cv">
            TÉLÉCHARGER CV
          </a>
        )}
      </div>
    </div>
  );
}

export default Experience;
