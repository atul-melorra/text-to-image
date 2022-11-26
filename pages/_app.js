import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href={`https://d25xjl7berdv27.cloudfront.net/melorra_fonts/melorraicon.min.css`} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
