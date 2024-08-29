import Features from "../../components/landingPage/Features";
import Footer from "../../components/landingPage/Footer";
import Hero from "../../components/landingPage/Hero";
import NavigationBar from "../../components/landingPage/Navbar";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Barbearias RL',
}

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}
