// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
// import "../styles/globals.css";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import Navbar from "../components/navbar/Navbar"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
