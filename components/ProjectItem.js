import { CardActionArea, CardMedia } from "@mui/material";
import React from "react";
import { useTranslation } from "next-i18next";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { urlForThumbnail } from "../utils/image";

export default function ProjectItem(props) {
  const { project, index } = props;
  const { t } = useTranslation("common");
  return (
    <div
      className={
        index % 2
          ? `ourPortfolio_project_item odd`
          : `ourPortfolio_project_item`
      }
      key={project._id}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="ourPortfolio_project_item_image"
      >
        <CardMedia
          component="img"
          image={urlForThumbnail(project.image.asset._ref)}
          title={project.name}
        />
      </a>
      <div className="ourPortfolio_project_item_content">
        <h3>{project.name}</h3>
        <p className="ourPortfolio_project_item_tags">
          {project.tags?.map((tag) => (
            <span key={`${tag}-${project._id}`}>{tag}</span>
          ))}
        </p>
        <p>{project.description}</p>
        <button
          className="button"
          type="button"
          onClick={() => {
            window.open(project.link, "_blank");
          }}
        >
          {t("ourPortfolio_button")}
        </button>
      </div>
    </div>
  );
}
