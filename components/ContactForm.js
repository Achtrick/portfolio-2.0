import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import emailjs from "emailjs-com";
import axios from "axios";

export default function ContactForm(props) {
  const { t } = useTranslation("common");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
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
      company: formData.company,
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
        company: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setFeedback("échec ! réessayer ultérieurement");
      document.getElementById("feedback").style.color = "#F00";
    }
  };

  return (
    <div className="form_container">
      <form onSubmit={(e) => sendEmail(e)}>
        <div className="form_row">
          <div className="form_col">
            <input
              value={formData.name}
              required
              className="form_input"
              type="text"
              placeholder={t("contact_name")}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="form_col">
            <input
              value={formData.email}
              required
              className="form_input"
              type="email"
              placeholder={t("contact_email")}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="form_col">
            <input
              value={formData.subject}
              required
              className="form_input"
              type="text"
              placeholder={t("contact_subject")}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            />
          </div>
        </div>
        <div className="form_row">
          <div className="form_col">
            <input
              value={formData.phone}
              required
              className="form_input"
              type="text"
              placeholder={t("contact_phone")}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="form_col">
            <input
              value={formData.company}
              className="form_input"
              type="text"
              placeholder={t("contact_company")}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />
          </div>
          <div className="form_col">
            <textarea
              value={formData.message}
              required
              className="form_input_field"
              type="text"
              placeholder={t("contact_message")}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
            <div className="form_actions">
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
                  {formData.fileName != "" ? formData.fileName : t("join_file")}
                </p>
              </label>
              <p>
                <button className="button" type="submit">
                  {t("contact_button")}
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="form_row">
          <div className="form_col">
            <div className="form_actions">
              <p id="feedback">{feedback}</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
