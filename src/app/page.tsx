import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

import { NextThemesProviders } from "./themeProvider";

export default function Home() {
  return (
    <main>
      <NextThemesProviders>
        <Header />
        <Hero />
        <Footer />
      </NextThemesProviders>
    </main>
  );
}
