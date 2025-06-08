// pages/_app.js

import '../styles/styles_globals.css'; // dacă ai folder "styles"
import Layout from '../components/Layout'; // dacă Layout e în "components"

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
