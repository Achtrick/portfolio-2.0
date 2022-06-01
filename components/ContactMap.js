import { Box, Typography } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTranslation } from "next-i18next";

export default function ContactMap(props) {
  const { t } = useTranslation("common");
  return (
    <div style={{ marginBottom: "0px" }} className="contactMap_container">
      <div className="contactMap_content">
        <Box display="flex" alignItems="center" marginBottom={3}>
          <PhoneIcon
            sx={{ color: "#312782", marginRight: "15px", fontSize: "15px" }}
          />
          <Typography
            sx={{ color: "#312782", fontSize: "20px", fontSize: "15px" }}
          >
            {t("footer_phone")}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" marginBottom={3}>
          <EmailIcon
            sx={{ color: "#312782", marginRight: "15px", fontSize: "15px" }}
          />
          <Typography
            sx={{ color: "#312782", fontSize: "20px", fontSize: "15px" }}
          >
            {t("footer_mail")}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" marginBottom={3}>
          <LocationOnIcon
            sx={{ color: "#312782", marginRight: "15px", fontSize: "15px" }}
          />
          <Typography
            sx={{ color: "#312782", fontSize: "20px", fontSize: "15px" }}
          >
            {t("footer_address")}
          </Typography>
        </Box>
      </div>
      <div className="map_container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.544414955017!2d10.630259414572333!3d35.835652029096245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130275c53aca7d4f%3A0xc29eea23820b3a06!2sCreo!5e0!3m2!1sfr!2stn!4v1651450709999!5m2!1sfr!2stn"
          width={600}
          allowFullScreen={true}
          height={350}
          style={{ border: 0, width: "100%" }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
