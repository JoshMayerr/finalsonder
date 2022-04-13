import "../styles/globals.css";
import Header from "../components/Header";
import InfiniteFooter from "../components/InfiniteFooter";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <InfiniteFooter />
      <Footer />
    </>
  );
}

export default MyApp;
