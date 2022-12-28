import { CircularProgress, Modal } from "@mui/material";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Portfolio.module.css";
import client from "../utils/client";
import { urlFor } from "../utils/image";
import CloseIcon from "@mui/icons-material/Close";
import { color } from "@mui/system";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Portfolio(props) {
  const router = useRouter();
  const { service } = router.query;
  const { t } = useTranslation("common");

  const [projects, setProjects] = useState([]);
  const [type, setType] = useState("all");
  const [loading, setLoading] = useState(true);
  const [openProject, setOpenProject] = useState(false);
  const [project, setProject] = useState(true);

  const fetchData = async () => {
    var query = `*[_type == "project"]`;
    if (type !== "all") {
      query = `*[_type == "project" && type=="${type}"]`;
    }
    try {
      const projects = await client.fetch(query);
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [type]);

  useEffect(() => {
    if (router.isReady && service) setType(service);
  }, [router.isReady, router]);

  return (
    <Layout
      title={"Portfolio"}
      description="Creo - Our partners and projects reflects our hard work and dedication"
      tags={[
        "creo",
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
        <div className={styles.close}>
          <CloseIcon
            style={{ color: "#000" }}
            onClick={() => setOpenProject(false)}
          />
        </div>
      ) : null}
      <Modal open={openProject} onClose={() => setOpenProject(false)}>
        <div className={styles.gallery}>
          <div className={styles.images}>
            {project.gallery?.map((img) => {
              return (
                <img
                  key={img._key}
                  alt={`creo - ${project.title}`}
                  src={urlFor(img.asset._ref)}
                />
              );
            })}
          </div>
        </div>
      </Modal>
      <section className={styles.container}>
        <div className={styles.overlay}>
          <div className={styles.header}>
            <h1>{t("discover_our_projects")}</h1>
            <div className={styles.menu}>
              <button
                onClick={() => setType("all")}
                className={
                  type === "all"
                    ? `${styles.button} ${styles.active}`
                    : styles.button
                }
              >
                {t("all")}
              </button>
              <button
                onClick={() => setType("design")}
                className={
                  type === "design"
                    ? `${styles.button} ${styles.active}`
                    : styles.button
                }
              >
                {t("design")}
              </button>
              <button
                onClick={() => setType("cm")}
                className={
                  type === "cm"
                    ? `${styles.button} ${styles.active}`
                    : styles.button
                }
              >
                {t("cm")}
              </button>
              <button
                onClick={() => setType("development")}
                className={
                  type === "development"
                    ? `${styles.button} ${styles.active}`
                    : styles.button
                }
              >
                {t("development")}
              </button>
            </div>
            <div className={styles.projects}>
              {loading ? (
                <div className="spinner">
                  <CircularProgress sx={{ color: "#000" }} />
                </div>
              ) : (
                <>
                  {projects.map((project) => {
                    return (
                      <div key={project._id} className={styles.project}>
                        <div className={styles.body}>
                          <img
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setProject(project);
                              setOpenProject(true);
                            }}
                            alt={project.name}
                            src={urlFor(project.image.asset._ref)}
                          />
                          <h1>{project.name}</h1>
                          <p>{project.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
