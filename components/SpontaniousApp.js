import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

export default function SpontaniousApp(props) {
  const { classes } = props;
  const { t } = useTranslation("common");
  return (
    <section
      style={{ backgroundColor: "#FAEDFF", marginBottom: "-23px" }}
      className="contactBlock_container"
    >
      <div className="contactBlock_content">
        <Image
          data-aos="fade-down"
          data-aos-delay="400"
          src={"/icons/bell.svg"}
          height={25}
          width={25}
        />
        <h2 data-aos="fade-up" data-aos-delay="500">
          {t("spontanious_title")}
        </h2>
        <h3 data-aos="fade-up" data-aos-delay="600">
          {t("spontanious_description")}
        </h3>
        <Link href="/contact">
          <button className="button">{t("apply_button")}</button>
        </Link>
      </div>
    </section>
  );
}
