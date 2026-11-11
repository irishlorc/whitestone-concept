import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MaterialIndex from "@/components/MaterialIndex";
import Philosophy from "@/components/Philosophy";
import Founder from "@/components/Founder";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Statement from "@/components/Statement";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <MaterialIndex />
        <Philosophy />
        <Founder />
        <Services />
        <Process />
        <Statement />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
