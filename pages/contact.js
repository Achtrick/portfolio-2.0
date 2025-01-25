import emailjs from "emailjs-com";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSnackbar } from "notistack";
import { useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Contact.module.css";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function About(props) {
  const { t } = useTranslation("common");
  const { enqueueSnackbar } = useSnackbar();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    cv: "",
    fileName: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    var templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };
    const serviceID = "service_ke3jlg8";
    const templateID = "template_7hw5efj";
    const userID = "user_Q9HhNdBO4kBOgS9xXUEyg";
    try {
      emailjs.send(serviceID, templateID, templateParams, userID);
      enqueueSnackbar("Votre email est envoyée !", { variant: "success" });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        fileName: "",
      });
    } catch (error) {
      enqueueSnackbar("échec ! réessayer ultérieurement", { variant: "error" });
    }
  };

  return (
    <Layout
      title={"Contact"}
      description="Don't hesitate to contact us to ask for a quote or any question that comes to mind."
    >
      <section className={styles.container}>
        <div className={styles.overlay}>
          <div className={styles.header}>
            <h1 data-aos="fade-up">{t("leave_us_a_message")}</h1>
          </div>
          <div className={styles.form_container}>
            <form onSubmit={(e) => sendEmail(e)}>
              <div className={styles.form_row}>
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className={styles.form_col}
                >
                  <label>{t("contact_name")}</label>
                  <input
                    value={formData.name}
                    required
                    className={styles.form_input}
                    type="text"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className={styles.form_col}
                >
                  <label>{t("contact_email")}</label>
                  <input
                    value={formData.email}
                    required
                    className={styles.form_input}
                    type="email"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className={styles.form_col}
                >
                  <label>{t("contact_phone")}</label>
                  <input
                    value={formData.phone}
                    required
                    className={styles.form_input}
                    type="number"
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className={styles.form_row}>
                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className={styles.form_col}
                >
                  <label>{t("contact_subject")}</label>
                  <input
                    value={formData.subject}
                    required
                    className={styles.form_input}
                    type="text"
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className={styles.form_colx2}
                >
                  <label>{t("contact_message")}</label>
                  <textarea
                    value={formData.message}
                    required
                    className={styles.form_input_field}
                    type="text"
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="600"
                className={styles.form_row}
              >
                <div className={styles.form_colx2}>
                  <button
                    style={{ textTransform: "uppercase" }}
                    className="button"
                    type="submit"
                  >
                    {t("send")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
