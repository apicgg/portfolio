import React from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className="bg-zinc-900 text-zinc-300">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
