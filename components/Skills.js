import React from "react";
import styles from "../styles/Skills.module.css";
import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { CircularProgress } from "@mui/material";
import client from "../utils/client";
import { useRouter } from "next/router";

function Skills(props) {
  const { t } = useTranslation("common");
  const { locale } = useRouter();

  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const skills = await client.fetch(`*[_type == "skill"]`);
      setSkills(skills);
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
          {skills.map((skill) => {
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

export default Skills;
