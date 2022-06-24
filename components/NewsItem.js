import { CardActionArea, CardMedia, Link } from "@mui/material";
import React from "react";
import { useTranslation } from "next-i18next";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { urlForThumbnail } from "../utils/image";
import NextLink from "next/link";

export default function NewsItem(props) {
  const { myNew } = props;
  const { t } = useTranslation("common");
  return (
    <div className="ourNews_item" key={myNew._id}>
      <NextLink href={`/news/${myNew.slug.current}`} passHref>
        <Link>
          <a><CardActionArea>
            <CardMedia
              sx={{ width: "100%" }}
              component="img"
              image={urlForThumbnail(myNew.image.asset._ref)}
              title={myNew.name}
            />
            <div className="ourNews_item_overlay">
              <VisibilityIcon size="large" />
            </div>
          </CardActionArea></a>
        </Link>
      </NextLink>
      <div className="ourNews_item_content">
        <NextLink href={`/news/${myNew.slug.current}`} passHref>
          <Link>
            <a><h3>{myNew.title}</h3></a>
          </Link>
        </NextLink>
        <p>{myNew.description}</p>
        <NextLink href={`/news/${myNew.slug.current}`} passHref>
          <Link><a><button className="button">{t("ourNews_button")}</button></a></Link>
        </NextLink>
      </div>
    </div>
  );
}
