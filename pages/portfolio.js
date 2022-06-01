import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import PortfolioIntro from "../components/PortfolioIntro";
import OurPortfolio from "../components/OurPortfolio";
import ServicesBlock from "../components/ServicesBlock";
import OurBrochure from "../components/OurBrochure";
import ContactBlock from "../components/ContactBlock";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Portfolio(props) {
  const { locale } = useRouter();
  const { t } = useTranslation("common");

  return (
    <Layout
      title={"Portfolio"}
      description="Creo - Knowledge & Innovation"
      tags={["creo", "digital", "Knowledge", "Innovation"]}
    >
      <PortfolioIntro />
      <OurPortfolio />
      <ServicesBlock />
      <OurBrochure />
      <div style={{ marginBottom: "-150px" }}>
        <ContactBlock />
      </div>
    </Layout>
  );
}
