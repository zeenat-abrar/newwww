import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import BookADemoSection from "@/components/blocks/industries/book-a-demo-section";
import { GridCardsSection } from "@/components/blocks/industries/grid-card-view";
import BigInfoboardIframeSection from "@/components/blocks/industries/Iframe-Infobard/big-iframe-infoboard";
import IndustriesPageHeroSection from "@/components/blocks/industries/industry-page-hero-section";
import { Infoboard3DCards } from "@/components/blocks/industries/infoboards-cards-section";
import { Footer } from "@/components/ui/footer";
import { generatemetadata } from "@/metadata/utils/generate";
import {
  retailBookADemoSection,
  retailDashboardScreenShots3DCards,
  retailGridCardsSection,
  retailInfoboardIframeSection,
  retailKPICards,
  retailPageHeroSectionDetails,
} from "@/page-data/industries/retail-analytics-solutions";

export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("retail-analytics-solutions");
}

const RetailsAnalyticsSolutions = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <IndustriesPageHeroSection
        heading={retailPageHeroSectionDetails.heading}
        description={retailPageHeroSectionDetails.description}
        buttons={retailPageHeroSectionDetails.buttons}
        bulletPoints={retailPageHeroSectionDetails.bulletPoints}
        imageSrc={retailPageHeroSectionDetails.imageSrc}
        alt={retailPageHeroSectionDetails.alt}
        imageClassName="xl:-mt-[100px]"
        descriptionClassName="font-normal"
      />
      <GridCardsSection
        projects={retailGridCardsSection.projects}
        heading={retailGridCardsSection.heading}
        gradientBackground={true}
        unifySimplifyAmplify={retailGridCardsSection.unifySimplifyAmplify}
      />
      <BigInfoboardIframeSection
        heading={retailInfoboardIframeSection.heading}
        iFrameSrc={retailInfoboardIframeSection.iFrameSrc}
        image={retailInfoboardIframeSection.image}
      />
      <Infoboard3DCards
        cards={retailDashboardScreenShots3DCards.cards}
        heading={retailDashboardScreenShots3DCards.heading}
        button={retailDashboardScreenShots3DCards.button}
        mainSectionClassName="mt-[-60px]"
      />
      <BookADemoSection heading={retailBookADemoSection.heading} buttonText={retailBookADemoSection.buttonText} href={retailBookADemoSection.href} />
      <section className="pb-10">
        <GridCardsSection
          projects={retailKPICards.projects}
          heading={retailKPICards.heading}
          description={retailKPICards.description}
          buttonPrimaryWhite={retailKPICards.buttonPrimaryWhite}
        />
      </section>
      <Footer />
    </section>
  );
};

export default RetailsAnalyticsSolutions;
