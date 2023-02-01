import { CssBaseline } from "@mui/material";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import CookieConsent from "react-cookie-consent";
import { AppContext } from "./AppContext";
import { useContext } from "react";

export default function Layout({ title, tags, description, children }) {
  const router = useRouter();
  const { setShowLangsList } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>{title ? `achref-mtir - ${title}` : "achref-mtir"}</title>
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
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800&display=swap"
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
        <link rel="canonical" href="https://achref-mtir.tn" />
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
