import Head from "next/head";
import Footer from "./Footer";
import Nav from "./Nav";
import Footer2 from "./Footer2"


const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Barber TT</title>
        <meta name="description" content="Barber in Trnava" />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer2 />
    </>
  );
};

export default Layout;
