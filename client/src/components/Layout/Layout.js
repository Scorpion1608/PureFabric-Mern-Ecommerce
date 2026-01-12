import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast"; // correct import
import "react-toastify/dist/ReactToastify.css"; // you can remove this if not using react-toastify anymore

const Layout = ({
  children,
  title = "Ecommerce App",
  description = "Ecommerce Application",
  keywords = "ecommerce, shop, buy online",
  author = "Your Name",
}) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>

      <Header />

      <main className="flex-grow-1">{children}</main>

      <Footer />

      {/* Only Toaster from react-hot-toast */}
      <Toaster position="top-right" />
    </div>
  );
};

export default Layout;
