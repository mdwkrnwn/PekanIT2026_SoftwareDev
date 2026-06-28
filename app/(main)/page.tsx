import { SolusiUMKM } from '../../components/SolusiUMKM';
import { FeatureDashboard } from "../../components/FeatureDashboard";
import { InsightHariIni } from "../../components/InsightHariIni";
import { AiBisnis } from "../../components/AiBisnis";
import { Testimonials } from "../../components/Testimonials";
import { HeroBanner } from "../../components/HeroBanner";
import { CTA } from "../../components/CTA";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <SolusiUMKM />
      <FeatureDashboard />
      <InsightHariIni />
      <AiBisnis />
      <Testimonials />
      <CTA />
    </>
  );
}