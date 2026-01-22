import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { NextThemesProviders } from "@/components/ThemeProvider";

export default function Home() {
  return (
    <NextThemesProviders>
      <main>
        <Header />
        <Hero />
        <Footer />
      </main>
    </NextThemesProviders>
  );
}
