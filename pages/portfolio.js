import CloseIcon from "@mui/icons-material/Close";
import { CircularProgress, Modal } from "@mui/material";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Portfolio.module.css";
import client from "../utils/client";
import { urlFor, urlForThumbnail } from "../utils/image";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Portfolio(props) {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openProject, setOpenProject] = useState(false);
  const [project, setProject] = useState(true);

  const fetchData = async () => {
    try {
      const projects = await client.fetch(`*[_type == "project"]`);
      setProjects(projects);
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
      title={"Portfolio"}
      description="Our partners and projects reflects our passion, hard work and dedication"
    >
      {openProject ? (
        <div onClick={() => setOpenProject(false)} className={styles.close}>
          <CloseIcon style={{ color: "#000" }} />
        </div>
      ) : null}
      <Modal open={openProject} onClose={() => setOpenProject(false)}>
        <div className={styles.gallery}>
          <div className={styles.images}>
            {project.gallery?.map((img) => {
              return (
                <img
                  key={img._key}
                  alt={`achref-mtir - ${project.title}`}
                  src={urlFor(img.asset._ref)}
                />
              );
            })}
          </div>
        </div>
      </Modal>
      <section className={styles.container}>
        <div className={styles.header}>
          <div className={styles.col60}>
            <h1>
              {locale === "en"
                ? "And the best is yet to come"
                : "Et le meilleur reste à venir"}
            </h1>
          </div>
          <div className={styles.col40}>
            <img
              alt="And the best is yet to come !"
              // src={"/" + "./images/portfolio.gif"}
              src="https://i.pinimg.com/originals/a4/76/b0/a476b0136bb9fc776eed816e82c2e808.gif"
            />
          </div>
        </div>
        <div className={styles.projects}>
          {loading ? (
            <div className="spinner">
              <CircularProgress sx={{ color: "#fff" }} />
            </div>
          ) : (
            <>
              {projects
                .sort((a, b) => {
                  if (a.order < b.order) {
                    return 1;
                  }
                  if (a.order > b.order) {
                    return -1;
                  }
                  return 0;
                })
                .map((project, index) => {
                  return (
                    <div
                      data-aos="zoom-in"
                      data-aos-delay={250 * index}
                      key={project._id}
                      className={styles.project}
                    >
                      <div className={styles.body}>
                        {project.isLive ? (
                          <a
                            className={styles.imgHolder}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              alt={project.name}
                              src={urlForThumbnail(project.image.asset._ref)}
                            />
                          </a>
                        ) : (
                          <a className={styles.imgHolder}>
                            <img
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                setProject(project);
                                if (project.gallery?.length > 0)
                                  setOpenProject(true);
                              }}
                              alt={project.name}
                              src={urlForThumbnail(project.image.asset._ref)}
                            />
                          </a>
                        )}
                        <h1>{project.name}</h1>
                        {locale === "en" ? (
                          <p>{project.en_description}</p>
                        ) : (
                          <p>{project.fr_description}</p>
                        )}
                        <div className={styles.tags}>
                          {project.tags.map((tag, index) => {
                            return (
                              <div
                                data-aos="fade-left"
                                data-aos-delay={250 * index}
                                key={index}
                                className={styles.tag}
                              >
                                {tag}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}
