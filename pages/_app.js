import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { appWithTranslation } from "next-i18next";
import { SnackbarProvider } from "notistack";
import { useEffect, useState } from "react";
import { AppContext } from "../components/AppContext";
import "../styles/globals.css";

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

  const [showLangsList, setShowLangsList] = useState(false);

  return (
    <AppContext.Provider value={{ showLangsList, setShowLangsList }}>
      <CacheProvider value={emotionCache}>
        <SnackbarProvider
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Component {...pageProps} />
        </SnackbarProvider>
      </CacheProvider>
    </AppContext.Provider>
  );
}

export default appWithTranslation(MyApp);
