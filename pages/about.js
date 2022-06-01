import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import AboutIntro from '../components/AboutIntro';
import AboutUs from '../components/AboutUs';
import AboutResume from '../components/AboutResume';

export async function getStaticProps({locale}) {
  return {
      props: {
          ...(await serverSideTranslations( locale, ['common'] )),
      }
  }
}

export default function About(props) {
  const { locale } = useRouter();
  const { t } = useTranslation('common');

  return (
    <Layout title={"About"} 
      description="Creo - Knowledge & Innovation" 
      tags={["creo", "digital", "Knowledge", "Innovation"]}  
    >
      <AboutIntro classes={styles} />
      <AboutUs classes={styles} />
      <AboutResume classes={styles} />
    </Layout>
  )
}
