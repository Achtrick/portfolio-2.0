import Layout from "../components/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Intro from "../components/Intro";
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
    <Layout>
      <Intro />
      <Study />
    </Layout>
  );
}
