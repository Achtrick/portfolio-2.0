import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { StoreProvider } from "../utils/store";
import { SnackbarProvider } from "notistack";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { AppContext } from "../components/AppContext";
import Script from 'next/script';

const clientSideEmotionCache = createCache({ key: "css" });

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 200,
      duration: 1200,
    });
  }, []);

  const [openView, setOpenView] = useState(false);
  const [openItem, setOpenItem] = useState({});

  return (
    <>
    <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

    <Script strategy="lazyOnload" id="google-script">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
        `}
    </Script>
    <AppContext.Provider
      value={{ openView, setOpenView, openItem, setOpenItem }}
    >
      <CacheProvider value={emotionCache}>
        <SnackbarProvider
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <StoreProvider>
            <Component {...pageProps} />
          </StoreProvider>
        </SnackbarProvider>
      </CacheProvider>
    </AppContext.Provider>
    </>
  );
}

export default appWithTranslation(MyApp);
