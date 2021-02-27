import "../styles/globals.scss";
import React from "react";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  return (
      <Layout>
          <AnimateSharedLayout>
              <Component {...pageProps} />
          </AnimateSharedLayout>
      </Layout>
  );
}

export default MyApp;
