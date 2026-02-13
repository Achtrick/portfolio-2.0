import { CssBaseline } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";
import CookieConsent from "react-cookie-consent";
import { AppContext } from "./AppContext";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ title, description, children }) {
  const router = useRouter();
  const { setShowLangsList } = useContext(AppContext);

  const tags = [
    "mtir",
    "Achraf",
    "Achref",
    "Ashref",
    "Ashraf",
    "Achraf mtir",
    "Achref mtir",
    "Ashraf mtir",
    "Ashref mtir",
    "achref-mtir",
    "achraf-mtir",
    "ashref-mtir",
    "ashraf-mtir",
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
  ];

  return (
    <>
      <Head>
        <title>{title ? `Achref MTIR - ${title}` : "Achref MTIR"}</title>
        <meta
          property="og:title"
          content={title ? `Achref MTIR - ${title}` : "Achref MTIR"}
        />
        <meta property="og:description" content="Software engineer." />
        <meta
          property="og:image"
          content="https://achraf-mtir.dev/images/achref.png"
        />
        <meta property="og:url" content="https://achraf-mtir.dev/" />
        <meta property="og:type" content="website" />
        {description && <meta name="description" content={description}></meta>}
        {tags && <meta name="keywords" content={tags.join(", ")}></meta>}
        <link defer rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          defer
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue:wght@100;300;400;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logo.webp" />
        <link
          rel="icon"
          type="image/webp"
          sizes="32x32"
          href="/images/logo.webp"
        />
        <link
          rel="icon"
          type="image/webp"
          sizes="16x16"
          href="/images/logo.webp"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/images/logo.webp" />
        <link rel="shortcut icon" href="/images/logo.webp" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#000" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://achraf-mtir.dev" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index, follow" />
      </Head>
      <CssBaseline />
      <Header />
      <main onClick={() => setShowLangsList(false)}>{children}</main>
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText={router.locale === "en" ? "I understand" : "Je Comprend"}
        cookieName="achref-mtir-cookies-consent"
        style={{ background: "#000", borderTop: "1px solid #ccc" }}
        buttonStyle={{ backgroundColor: "#fff", fontSize: "15px" }}
        expires={150}
      >
        {router.locale === "en"
          ? "This website uses cookies to enhance the user experience."
          : "Ce site utilise des cookies pour améliorer l'expérience utilisateur."}
      </CookieConsent>
    </>
  );
}
