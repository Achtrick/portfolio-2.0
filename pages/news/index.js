import Layout from "../../components/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NewsIntro from "../../components/NewsIntro";
import OurNews from "../../components/OurNews";
import ServicesBlock from "../../components/ServicesBlock";
import OurBrochure from "../../components/OurBrochure";
import ContactBlock from "../../components/ContactBlock";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Portfolio(props) {
  return (
    <Layout
      title={"News"}
      description="Creo - Knowledge & Innovation"
      tags={["creo", "digital", "Knowledge", "Innovation"]}
    >
      <NewsIntro />
      <OurNews />
      <ServicesBlock />
      <OurBrochure />
      <div style={{ marginBottom: "-150px" }}>
        <ContactBlock />
      </div>
    </Layout>
  );
}
