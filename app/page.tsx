import { ForYou } from '../components/ForYou';
import { Welcome } from '../components/Welcome';
import { Trending } from "../components/Trending";
import { Testimonials } from "../components/Testimonials";
import { Articles } from "../components/Articles";
import { CTA } from "../components/CTA";
import { HeroBanner } from "../components/HeroBanner";

export default function Home() {
  return (
    <>
      <Welcome />

      {/* Hero Banner */}
      <HeroBanner />

      {/* Buat Kamu Nih */}
      <ForYou />

      {/* Trending Section (Vertical Marquee) */}
      <Trending />

      {/* Testimonials (Horizontal Marquee) */}
      <Testimonials />

      {/* Articles & Tips */}
      <Articles />

      <CTA />
    </>
  );
}