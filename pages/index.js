import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Experience from "../components/Experience";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import Skills from "../components/Skills";
import Study from "../components/Study";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Home(props) {
  const { locale } = useRouter();
  const { t } = useTranslation("common");

  return (
    <Layout description="Fullstack web developer / MERN Stack expert.">
      <Intro />
      <Study />
      <Skills />
      <Experience />
    </Layout>
  );
}
