import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { SnackbarProvider } from "notistack";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { AppContext } from "../components/AppContext";
import { useRouter } from "next/router";

const clientSideEmotionCache = createCache({ key: "css" });

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  const router = useRouter();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("580663037159050"); // facebookPixelId
        ReactPixel.pageView();
        ReactPixel.track("ViewContent");
        ReactPixel.track("Contact");
        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.events]);

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
    <AppContext.Provider
      value={{ openView, setOpenView, openItem, setOpenItem }}
    >
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
