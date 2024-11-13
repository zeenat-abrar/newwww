import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import OurTeamSection from "@/components/blocks/company/our-team-hero-section";
import SupportCard from "@/components/blocks/resources/cards";
import { PhoneSupportBanner } from "@/components/blocks/resources/phone-support-banner";
import { Footer } from "@/components/ui/footer";
import { generatemetadata } from "@/metadata/utils/generate";
export const dynamic = "force-dynamic";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("support");
}

const headingHero = "Infoveave® Support Portal";
const descriptionHero =
  "Here at Infoveave®, we understand that data analysis & visualization can be complex and overwhelming demanding support. That’s why we’ve created a Infoveave-support center to provide you with the resources you need to succeed. Whether you’re a new user or an experienced person, we’ve got something for everyone.";
const secondDescription = "";

const SupportPage = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <OurTeamSection description={descriptionHero} heading={headingHero} description2={secondDescription} />
      <div className="pb-28">
        <SupportCard />
      </div>
      <PhoneSupportBanner />
      <Footer />
    </section>
  );
};
export default SupportPage;
