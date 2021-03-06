import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import Script from "next/script";
import Particles from "react-tsparticles";
import particleOptions from "../particles.json";
const Layout = ({ children, home, contact, projects }) => {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/LogoBlack.png" />
        <meta
          name="description"
          content="Personal portfolio made with Next.js!"
        />
      </Head>
      <Particles options={particleOptions} id="tsparticles"/>
      <Header home={home} contact={contact} projects={projects} />
      <main>{children}</main>
      <Footer />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></Script>
    </>
  );
};

export default Layout;
