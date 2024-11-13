import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import KPILibrary from "@/assets/kpi-liabrary/hero-section/retail-kpi-hero.png";
import { WobbleCardSection } from "@/components/blocks/resources/all-kpi";
import KpiHeroSection from "@/components/blocks/resources/kpiHeroSection";
import { Footer } from "@/components/ui/footer";
import { generatemetadata } from "@/metadata/utils/generate";

export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("kpi-library");
}

const retailHeroSectionHeading = "Get your hands on all the important |KPIs|";
const retailHeroSectionDescription =
  "Success depends on staying up to date with all your important company metrics. Learn about all the important KPIs and why should they be used.";
const retailHeroSectionImageSrc = KPILibrary;

const SupportPage = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <KpiHeroSection heading={retailHeroSectionHeading} description={retailHeroSectionDescription} imageSrc={retailHeroSectionImageSrc} />
      <WobbleCardSection />
      <Footer />
    </section>
  );
};
export default SupportPage;
