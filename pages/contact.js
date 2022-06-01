import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import ContactIntro from '../components/ContactIntro';
import ContacttUs from '../components/ContactUs';
import ContactForm from '../components/ContactForm';
import ContactMap from '../components/ContactMap';

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
    <Layout title={"Contact"} 
      description="Creo - Knowledge & Innovation" 
      tags={["creo", "digital", "Knowledge", "Innovation"]} 
    >
      <ContactIntro />
      <ContacttUs />
      <ContactForm />
      <ContactMap />
    </Layout>
  )
}
