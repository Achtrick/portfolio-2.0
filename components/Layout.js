import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Head from "next/head";
import Header from "./Header";
import jsCookie from "js-cookie";
import { useContext } from "react";
import { Store } from "../utils/store";
import Footer from "./Footer";

export default function Layout({ title, tags, description, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;

  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode;
    jsCookie.set("darkMode", newDarkMode ? "ON" : "OFF");
  };

  const theme = createTheme({
    components: {
      MuiLink: {
        defaultProps: {
          underline: "hover",
        },
      },
      MuiInput: {
        defaultProps: {
          margin: 0,
        },
      },
    },
    typography: {
      fontFamily: ["Helvetica", "sans-serif"].join(","),

      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#FFF",
      },
      secondary: {
        main: "#f700c4",
      },
      white: {
        main: "#FFF",
      },
    },
  });

  return (
    <>
      <Head>
        <title>{title ? `${title} - Creo` : "Creo"}</title>
        {description && <meta name="description" content={description}></meta>}
        {tags && <meta name="keywords" content={tags.join(", ")}></meta>}
        <link defer rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          defer
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        />
        <link
          defer
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          defer
          href="https://fonts.cdnfonts.com/css/hastafi-personal-use-only"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header setDarkMode={darkModeChangeHandler} darkMode={darkMode} />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
