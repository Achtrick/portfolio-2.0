import React from "react";
import styles from "../styles/Joinus.module.css";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import Link from "next/link";
import { useTranslation } from "next-i18next";

function PostView(props) {
  const { setOpenView, openItem, setOpenItem } = useContext(AppContext);
  const { t } = useTranslation("common");

  return (
    <section className={styles.canvas}>
      <div className={styles.row}>
        <div className={styles.col70}>
          <div
            data-aos="fade-right"
            className={styles.arrow}
            onClick={() => {
              setOpenView(false);
            }}
          >
            <img alt="back-creo" src={"/" + "./icons/arrow.svg"} />
          </div>
          <h1 data-aos="fade-up">{openItem.name}</h1>
          <h2 data-aos="fade-up">{t("offer_description")}</h2>
          <p data-aos="fade-up">{openItem.description}</p>

          {openItem.mission ? (
            <>
              <h2 data-aos="fade-up">{t("mission")}</h2>
              <pre data-aos="fade-up">{openItem.mission}</pre>
            </>
          ) : null}
        </div>
        <div className={styles.col30}>
          <div data-aos="fade-left">
            <div className={styles.postCard}>
              <h3>{openItem.date}</h3>
              <p>{t("joinus_offer_contact")}</p>
              <Link href="/contact">
                <button className="button">{t("send")}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostView;
