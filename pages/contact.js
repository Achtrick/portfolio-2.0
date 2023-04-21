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
      description="achref-mtir - Don't hesitate to contact us to ask for a quote or any question that comes to mind."
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
      <section className={styles.container}>
        <div className={styles.overlay}>
          <div className={styles.header}>
            <h1 data-aos="fade-up">{t("leave_us_a_message")}</h1>
          </div>
          <div className="form_container">
            <form onSubmit={(e) => sendEmail(e)}>
              <div className="form_row">
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="form_col"
                >
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
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="form_col"
                >
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
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="form_col"
                >
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
                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="form_col"
                >
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
                <div
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="form_colx2"
                >
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
              <div data-aos="fade-up" data-aos-delay="600" className="form_row">
                <div className="form_colx2">
                  <p>
                    <button className="button" type="submit">
                      {t("contact_button")}
                    </button>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
