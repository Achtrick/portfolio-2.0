import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Intro from '../components/Intro';
import AboutBlock from '../components/AboutBlock';
import ServicesBlock from '../components/ServicesBlock';
import ProjectsBlock from '../components/ProjectsBlock';
import WhyUs from '../components/WhyUs';
import PartenersBlock from '../components/PartenersBlock';

export async function getStaticProps({locale}) {
  return {
      props: {
          ...(await serverSideTranslations( locale, ['common'] )),
      }
  }
}

export default function Home(props) {
  const { locale } = useRouter();
  const { t } = useTranslation('common');

  return (
    <Layout title={null} 
      description="Creo - Knowledge & Innovation" 
      tags={["Knowledge", "Innovation"]} 
    >
      <Intro classes={styles} />
      <AboutBlock classes={styles} />
      <ServicesBlock classes={styles} />
      <ProjectsBlock classes={styles} />
      <WhyUs classes={styles} />
      <PartenersBlock classes={styles} />
    </Layout>
  )
}
