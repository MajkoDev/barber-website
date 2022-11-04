import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Footer2 from "./Footer2"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Barber TT</title>
        <meta name="description" content="Barber in Trnava" />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer2 />
    </>
  );
};

export default Layout;
