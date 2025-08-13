import { Analytics } from "@vercel/analytics/next"
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TeamMember from '../components/TeamMember';
import Footer from '../components/Footer';
import teamMembers from '../assets/teamMembers';

export default function Home() {
  return (
    <>
      <Head>
        <title>Alka Law Associates - Legal Excellence, Delivered</title>
        <meta name="description" content="ALA is a boutique law firm specializing in Direct and Indirect Taxation, with a strong pan-India presence across all Courts and Tribunals." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>

      <main>
        <Analytics />
        
        {/* Global styles */}
        <Navbar />
        <Hero id="home" />
        <Services id="services" />
        <TeamMember id="team" teamMembers={teamMembers} />
        <Footer id="footer" />
      </main>
    </>
  );
}
