import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme, global } from "components";
import PageContainer from "../components/PageContainer";
import { store } from "../store";
import { Provider } from "react-redux";
import { AppProps } from "next/app";

const GlobalStyle = createGlobalStyle`
  ${global.style}
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PageContainer max_width={768}>
          <Component {...pageProps} />
        </PageContainer>
      </ThemeProvider>
    </Provider>
  );
}
