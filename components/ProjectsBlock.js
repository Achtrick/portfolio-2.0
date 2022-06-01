import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import {
  Alert,
  CardActionArea,
  CardMedia,
  CircularProgress,
} from "@mui/material";
import { urlForThumbnail } from "../utils/image";
import client from "../utils/client";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";

export default function ProjectsBlock(props) {
  const { classes } = props;
  const { t } = useTranslation("common");

  const [state, setState] = useState({
    projects: [],
    error: "",
    loading: true,
  });
  const { loading, error, projects } = state;
  const isLargeScreen = useMediaQuery("(min-width:1366px)");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projects = await client.fetch(
          `*[_type == "project" && isActive == true] | order(order asc)`
        );
        setState({ projects, loading: false });
      } catch (error) {
        setState({ error: error.message, loading: false });
      }
    };
    fetchData();
  }, []);

  return (
    <section className="projectsBlock_container">
      <div className="projects_content">
        <h2 data-aos="fade-right" data-aos-delay="200">
          {t("projects_title")}
        </h2>
        <p data-aos="fade-right" data-aos-delay="600">
          {t("projects_description")}
        </p>
        <div data-aos="fade-right" data-aos-delay="1000">
          <Link href="/portfolio">
            <button className="button">{t("projects_button")}</button>
          </Link>
        </div>
      </div>
      <div className="image_container">
        <Image
          src="/images/rocket.webp"
          alt="Rocket"
          width={700}
          height={840}
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="1000"
        />
      </div>
      <div className="portfolio_container">
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Alert variant="danger">{error}</Alert>
        ) : (
          projects?.map((project) => (
            <div
              className={isLargeScreen ? "project_item_lg" : "project_item"}
              key={project._id}
            >
              <a href={project.link} target="_blank" rel="noreferrer">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={urlForThumbnail(project.image.asset._ref)}
                    title={project.name}
                  />
                  <div className="project_item_content">
                    <h3>{project.name}</h3>
                  </div>
                  <div className="project_item_overlay">
                    <VisibilityIcon size="large" />
                  </div>
                </CardActionArea>
              </a>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
