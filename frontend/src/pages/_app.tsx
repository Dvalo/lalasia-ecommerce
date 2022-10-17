import type { AppProps } from "next/app";
import PageLayout from "../layout";
import "../styles/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}

export default MyApp;
