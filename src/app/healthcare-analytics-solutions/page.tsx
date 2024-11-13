import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import BookADemoSection from "@/components/blocks/industries/book-a-demo-section";
// import { DownloadNowMiniForm } from "@/components/blocks/industries/download-now-mini-form";
import { GridCardsSection } from "@/components/blocks/industries/grid-card-view";
import BigInfoboardIframeSection from "@/components/blocks/industries/Iframe-Infobard/big-iframe-infoboard";
import IndustriesPageHeroSection from "@/components/blocks/industries/industry-page-hero-section";
import { Infoboard3DCards } from "@/components/blocks/industries/infoboards-cards-section";
import { Footer } from "@/components/ui/footer";
import { generatemetadata } from "@/metadata/utils/generate";
import {
  healthCareBookADemoSection,
  healthCareDashboardScreenShots3DCards,
  healthCareGridCardsSection,
  healthCareInfoboardIframeSection,
  healthCareKPIsGridCardsSection,
  healthCarePageHeroSectionDetails,
} from "@/page-data/industries/healthcare-analytics-solutions";

export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("healthcare-analytics-solutions");
}

const HealthcareSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <IndustriesPageHeroSection
        heading={healthCarePageHeroSectionDetails.heading}
        description={healthCarePageHeroSectionDetails.description}
        bulletPoints={healthCarePageHeroSectionDetails.bulletPoints}
        buttons={healthCarePageHeroSectionDetails.buttons}
        imageSrc={healthCarePageHeroSectionDetails.imageSrc}
        alt={healthCarePageHeroSectionDetails.alt}
        imageClassName="xl:-mt-[80px] xl:mb-[-31px]"
        descriptionClassName="font-normal"
      />
      {/* <DownloadNowMiniForm words={words} heading={heading} /> */}
      <GridCardsSection
        heading={healthCareGridCardsSection.heading}
        // description={healthCareGridCardsSection.description}
        projects={healthCareGridCardsSection.projects}
        gradientBackground={true}
        buttonPrimaryWhite={healthCareGridCardsSection.buttonPrimaryWhite}
      />
      <BigInfoboardIframeSection
        heading={healthCareInfoboardIframeSection.heading}
        iFrameSrc={healthCareInfoboardIframeSection.iFrameSrc}
        image={healthCareInfoboardIframeSection.image}
      />
      <Infoboard3DCards
        cards={healthCareDashboardScreenShots3DCards.cards}
        heading={healthCareDashboardScreenShots3DCards.heading}
        button={healthCareDashboardScreenShots3DCards.button}
        mainSectionClassName="mt-[-75px]"
      />
      <BookADemoSection
        heading={healthCareBookADemoSection.heading}
        buttonText={healthCareBookADemoSection.buttonText}
        href={healthCareBookADemoSection.href}
      />
      <section className="pb-10">
        <GridCardsSection
          projects={healthCareKPIsGridCardsSection.projects}
          heading={healthCareKPIsGridCardsSection.heading}
          description={healthCareKPIsGridCardsSection.description}
          buttonPrimaryWhite={healthCareKPIsGridCardsSection.buttonPrimaryWhite}
        />
      </section>
      <Footer />
    </section>
  );
};

export default HealthcareSection;
