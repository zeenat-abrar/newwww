import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import BookADemoSection from "@/components/blocks/industries/book-a-demo-section";
import { GridCardsSection } from "@/components/blocks/industries/grid-card-view";
import BigInfoboardIframeSection from "@/components/blocks/industries/Iframe-Infobard/big-iframe-infoboard";
import IndustriesPageHeroSection from "@/components/blocks/industries/industry-page-hero-section";
import { Infoboard3DCards } from "@/components/blocks/industries/infoboards-cards-section";
import { Footer } from "@/components/ui/footer";
import { generatemetadata } from "@/metadata/utils/generate";
import {
  manufacturingBookADemoSection,
  manufacturingDashboardScreenShots3DCards,
  manufacturingGridCardsKnowMoreSection,
  manufacturingInfoboardIframeSection,
  manufacturingKPIsGridCardsSection,
  manufacturingPageHeroSectionDetails,
} from "@/page-data/industries/manufacturing-analytics-solutions";

export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("manufacturing-analytics-solutions");
}

const ManufacturingSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <IndustriesPageHeroSection
        heading={manufacturingPageHeroSectionDetails.heading}
        description={manufacturingPageHeroSectionDetails.description}
        bulletPoints={manufacturingPageHeroSectionDetails.bulletPoints}
        buttons={manufacturingPageHeroSectionDetails.buttons}
        alt="Infoveave- manufacturing image"
        imageSrc={manufacturingPageHeroSectionDetails.imageSrc}
        imageClassName="mt-4 mb-[-10px] lg:my-[-55px]"
        descriptionClassName="font-normal"
      />
      {/* <DownloadNowMiniForm words={words} heading={heading} /> */}
      <GridCardsSection
        heading={manufacturingGridCardsKnowMoreSection.heading}
        description={manufacturingGridCardsKnowMoreSection.description}
        projects={manufacturingGridCardsKnowMoreSection.projects}
        gradientBackground={true}
        buttonPrimaryWhite={manufacturingGridCardsKnowMoreSection.buttonPrimaryWhite}
        unifySimplifyAmplify={manufacturingGridCardsKnowMoreSection.unifySimplifyAmplify}
      />
      <BigInfoboardIframeSection
        heading={manufacturingInfoboardIframeSection.heading}
        iFrameSrc={manufacturingInfoboardIframeSection.iFrameSrc}
        image={manufacturingInfoboardIframeSection.image}
      />
      <Infoboard3DCards
        cards={manufacturingDashboardScreenShots3DCards.cards}
        heading={manufacturingDashboardScreenShots3DCards.heading}
        button={manufacturingDashboardScreenShots3DCards.button}
        mainSectionClassName="mt-[-60px]"
      />
      <BookADemoSection
        heading={manufacturingBookADemoSection.heading}
        buttonText={manufacturingBookADemoSection.buttonText}
        href={manufacturingBookADemoSection.href}
      />
      <section className="pb-10">
        <GridCardsSection
          projects={manufacturingKPIsGridCardsSection.projects}
          heading={manufacturingKPIsGridCardsSection.heading}
          description={manufacturingKPIsGridCardsSection.description}
          buttonPrimaryWhite={manufacturingKPIsGridCardsSection.buttonPrimaryWhite}
        />
      </section>
      <Footer />
    </section>
  );
};

export default ManufacturingSection;
