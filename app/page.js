'use client'
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Categories from './components/Categories';
import LeadSection from './components/LeadSection';
import SponsorBanner from './components/SponsorBanner';
import Footer from './components/Footer';
export default function Home(){
  return (
    <main>
      <Header />
      <Hero />
      <Categories />
      <Features />
      <LeadSection />
      <SponsorBanner />
      <Footer />
    </main>
  );
}
