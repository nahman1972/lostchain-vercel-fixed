// pages/_app.js

import '../styles_globals.css';
import Layout from '../Layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
