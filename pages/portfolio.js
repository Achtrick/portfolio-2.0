import CloseIcon from "@mui/icons-material/Close";
import { CircularProgress, Modal } from "@mui/material";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Portfolio.module.css";
import client from "../utils/client";
import { urlFor, urlForThumbnail } from "../utils/image";
import { useRouter } from "next/router";

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
      tags={[
        "achref-mtir",
        "digital",
        "Knowledge",
        "Innovation",
        "community management",
        "hoa management companies",
        "community association management",
        "tribe management",
        "community management associates",
        "blue mountain community management",
        "community property management",
        "community management services",
        "cams property management",
        "community management corporation",
        "hoa property management",
        "associa hoa",
        "ccmc hoa",
        "north pointe property management",
        "rose community management",
        "consolidated community management",
        "professional community management",
        "condo association management",
        "cam management",
        "hoa property management companies",
        "cams hoa",
        "allinonemgmt",
        "all county community property manag",
        "cusick community management",
        "homeowners association management companies",
        "graphic design",
        "crello",
        "graphic",
        "motion graphics",
        "graphic design courses",
        "paula scher",
        "massimo vignelli",
        "graphic artist",
        "motion designer",
        "neville brody",
        "freelance graphic designer",
        "visual designer",
        "vector illustration",
        "otl aicher",
        "social media design",
        "social media post design",
        "print design",
        "graphic design services",
        "graphic design logo",
        "digital designer",
        "graphic design website",
        "wolfgang weingart",
        "graphic designer near me",
        "famous graphic designers",
        "canva graphic design",
        "marketing",
        "digital marketing",
        "affiliate marketing",
        "influencer",
        "social media marketing",
        "network marketing",
        "inbound marketing",
        "marketing strategy",
        "email marketing",
        "content marketing",
        "market segmentation",
        "marketing management",
        "segmentation",
        "marketing plan",
        "ssw marketing",
        "online marketing",
        "ansoff matrix",
        "influencer marketing",
        "digital marketing agency",
        "hubspot academy",
        "target market",
        "neuromarketing",
        "lead generation",
        "brand equity",
        "trade marketing",
        "referencing",
        "reference",
        "harvard referencing",
        "apa in text citation",
        "chicago style citation",
        "apa referencing",
        "apa style citation",
        "harvard referencing style",
        "cite them right",
        "apa referencing style",
        "cite this for me apa",
        "ieee citation",
        "apa citation example",
        "apa 7 citation",
        "apa in text citation multiple authors",
        "oscola referencing",
        "harvard citation",
        "apa in text citation example",
        "vancouver referencing",
        "harvard referencing example",
        "apa 7 referencing",
        "cite this for me harvard",
        "reference list",
        "oscola",
        "harvard referencing website",
        "web and mobile development",
        "hybrid apps",
        "ecommerce app development",
        " web and mobile app development",
        " mobile web development",
        " django mobile app",
        "native and hybrid app",
        " web and mobile development company",
        " web and mobile application development",
        "web and mobile app development company",
        " html5 mobile app",
        "mobile web application development",
        "mobile website development",
        "mobile web app development",
        "web and mobile app development services",
        "react native for web and mobile",
        "ecommerce application development company",
        "online mobile app development",
        "website and mobile app development",
        "app development website",
        " web design mobile",
        " website and mobile app developers",
        "web mobile development and marketing",
        " web and mobile application development company",
        "website application development company",
      ]}
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
