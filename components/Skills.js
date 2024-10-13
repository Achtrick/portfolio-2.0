import CircleIcon from "@mui/icons-material/Circle";
import { CircularProgress, Tooltip } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../styles/Skills.module.css";
import client from "../utils/client";
import { urlForThumbnail } from "../utils/image";

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

  const renderSkillRating = (rating) => {
    const block = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        block.push(
          <div key={i}>
            &nbsp;
            <CircleIcon sx={{ color: "#d2650f", fontSize: "10px" }} />
            &nbsp;
          </div>
        );
      } else {
        block.push(
          <div key={i}>
            &nbsp;
            <CircleIcon sx={{ color: "#F0F0F0", fontSize: "10px" }} />
            &nbsp;
          </div>
        );
      }
    }
    return block;
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      <p data-aos="fade-in">{t("skills")}</p>
      {loading ? (
        <div className="spinner">
          <CircularProgress sx={{ color: "#fff" }} />
        </div>
      ) : (
        <div className={styles.grid}>
          {skills
            .sort((a, b) => {
              if (a.order < b.order) {
                return -1;
              }
              if (a.order > b.order) {
                return 1;
              }
              return 0;
            })
            .map((skill, index) => {
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={(index + 1) * 150}
                  className={styles.imgHolder}
                >
                  <Tooltip title={skill.name}>
                    <img alt={skill.name} src={urlForThumbnail(skill.image)} />
                  </Tooltip>
                  // <div
                  //   data-aos="fade-up"
                  //   data-aos-delay={(index + 3) * 150}
                  //   className={styles.rating}
                  // >
                  //   {renderSkillRating(skill.level)}
                  // </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default Skills;
