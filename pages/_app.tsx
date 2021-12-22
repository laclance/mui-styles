import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import { EmotionCache, CacheProvider } from "@emotion/react";
import createEmotionCache from "../styles/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface Props extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: Props) => {
  // Remove the server-side injected CSS.
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);  
  
  return (
    <CacheProvider value={emotionCache}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
    </CacheProvider>
  );
};

export default MyApp;
