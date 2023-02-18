import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PageWrapper from "@/components/layouts/PageWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <PageWrapper wrapperCss="snap-mandatory snap-y">
      <section id="hero" className="snap-center shrink-0">
        <Hero />
      </section>

      <section id="about" className="snap-center shrink-0">
        <About />
      </section>
    </PageWrapper>
  );
}
