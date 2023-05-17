import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-20">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
