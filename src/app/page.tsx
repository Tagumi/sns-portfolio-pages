import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Works from "@/components/Works";
import Skills from "@/components/Skills";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Featured />
        <Works />
        <Skills />
        <Career />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
