import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { Alert, CircularProgress } from "@mui/material";
import client from "../utils/client";
import ProjectItem from "./ProjectItem";

export default function OurPortfolio(props) {
  const { t } = useTranslation("common");
  const [filtredData, setFiltredData] = useState([]);
  const [tags, setTags] = useState([]);
  const [filter, setFilter] = useState(t("all_projects"));

  const [state, setState] = useState({
    projects: [],
    error: "",
    loading: true,
  });
  const { loading, error, projects } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projects = await client.fetch(
          `*[_type == "project"] | order(order asc)`
        );
        setState({ projects, loading: false });
      } catch (error) {
        setState({ error: error.message, loading: false });
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (projects?.length > 0) {
      let myTags = [t("all_projects")];
      projects?.map((project) => {
        project.tags?.map((tag) => {
          if (!myTags?.includes(`${tag}`)) {
            myTags.push(tag);
          }
        });
      });
      setTags(myTags);
      setFiltredData(projects);
    }
  }, [projects]);

  useEffect(() => {
    if (filter !== "" && filter !== t("all_projects")) {
      const filtredProjects = projects?.filter((project) => {
        if (project.tags) {
          return project.tags?.includes(filter);
        }
      });
      setFiltredData(filtredProjects);
    } else {
      setFiltredData(projects);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <div className="ourPortfolio_container">
      <section className="ourPortfolio_content_container">
        <div className="ourPortfolio_content">
          <h2 data-aos="fade-right" data-aos-delay="200">
            {t("ourPortfolio_title")}
          </h2>
          <p data-aos="fade-up" data-aos-delay="300">
            {t("ourPortfolio_description")}
          </p>
        </div>
        <div className="filter_actions">
          {tags.map((tag, index) => (
            <button
              data-aos="fade-up"
              data-aos-delay={index * 300}
              className={`button ${filter === tag && "active"}`}
              type="button"
              key={`${tag}`}
              onClick={() => {
                setFilter(tag);
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>
      <section className="ourPortfolio_items">
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Alert variant="danger">{error}</Alert>
        ) : (
          filtredData?.map((project, index) => (
            <div
              key={project._id}
              data-aos="fade-up"
              data-aos-delay={index * 400}
            >
              <ProjectItem project={project} key={project._id} index={index} />
            </div>
          ))
        )}
      </section>
    </div>
  );
}
