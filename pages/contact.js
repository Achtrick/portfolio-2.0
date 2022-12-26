import Layout from "../components/Layout";
import styles from "../styles/Contact.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import emailjs from "emailjs-com";
import axios from "axios";
import { useState } from "react";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function About(props) {
  const { t } = useTranslation("common");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    cv: "",
    fileName: "",
  });

  const [feedback, setFeedback] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    var templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };
    const serviceID = "service_dyozx05";
    const templateID = "template_usjk0sm";
    const userID = "user_aew1XU7c2JP3topXNbU9p";
    try {
      axios.post("/api/uploadCv", { email: formData.email, cv: formData.cv });
      emailjs.send(serviceID, templateID, templateParams, userID);
      setFeedback("Votre email est envoyée !");
      document.getElementById("feedback").style.color = "green";
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        fileName: "",
      });
    } catch (error) {
      setFeedback("échec ! réessayer ultérieurement");
      document.getElementById("feedback").style.color = "#F00";
    }
  };

  return (
    <Layout
      title={"Contact"}
      description="Creo - Don't hesitate to contact us to ask for a quote or any question that comes to mind."
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
      <section className={styles.container}>
        <div className={styles.overlay}>
          <div className={styles.header}>
            <h1>{t("leave_us_a_message")}</h1>
          </div>
          <div className="form_container">
            <form onSubmit={(e) => sendEmail(e)}>
              <div className="form_row">
                <div className="form_col">
                  <label>{t("contact_name")}</label>
                  <input
                    value={formData.name}
                    required
                    className="form_input"
                    type="text"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="form_col">
                  <label>{t("contact_email")}</label>
                  <input
                    value={formData.email}
                    required
                    className="form_input"
                    type="email"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="form_col">
                  <label>{t("contact_phone")}</label>
                  <input
                    value={formData.phone}
                    required
                    className="form_input"
                    type="number"
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form_row">
                <div className="form_col">
                  <label>{t("contact_subject")}</label>
                  <input
                    value={formData.subject}
                    required
                    className="form_input"
                    type="text"
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>
                <div className="form_colx2">
                  <label>{t("contact_message")}</label>
                  <textarea
                    value={formData.message}
                    required
                    className="form_input_field"
                    type="text"
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form_row">
                <div className="form_col">
                  <input
                    id="file"
                    hidden
                    accept="application/pdf,application/vnd.ms-excel"
                    className="form_input"
                    type="file"
                    placeholder={t("contact_company")}
                    onChange={(e) => {
                      let reader = new FileReader();
                      reader.readAsDataURL(e.target.files[0]);
                      reader.onload = (evt) => {
                        setFormData({
                          ...formData,
                          cv: evt.target.result,
                          fileName: e.target.files[0].name,
                        });
                      };
                    }}
                  />
                  <label htmlFor="file">
                    <p>
                      {formData.fileName != ""
                        ? formData.fileName
                        : t("join_file")}
                    </p>
                  </label>
                </div>
                <div className="form_colx2">
                  <p>
                    <button className="button" type="submit">
                      {t("contact_button")}
                    </button>
                  </p>
                  <p id="feedback">{feedback}</p>
                </div>
              </div>
            </form>
          </div>
          <div className={styles.maps}>
            <iframe
              width="100%"
              height="300"
              frameborder="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=RJPJ+7X4,%20Rue%20de%20Constantine,%20Sousse+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
