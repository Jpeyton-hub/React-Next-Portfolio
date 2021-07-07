import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/LogoBlack" />
        <meta
          name="description"
          content="Personal portfolio made with Next.js!"
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export default Layout;
