import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import BookADemoSection from "@/components/blocks/industries/book-a-demo-section";
import { GridCardsSection } from "@/components/blocks/industries/grid-card-view";
import BigInfoboardIframeSection from "@/components/blocks/industries/Iframe-Infobard/big-iframe-infoboard";
import IndustriesPageHeroSection from "@/components/blocks/industries/industry-page-hero-section";
import { Infoboard3DCards } from "@/components/blocks/industries/infoboards-cards-section";
import { Footer } from "@/components/ui/footer";
import { generatemetadata } from "@/metadata/utils/generate";
import {
  automotiveBookADemoSection,
  automotiveDashboardScreenShots3DCards,
  automotiveGridCardsKnowMoreSection,
  automotiveInfoboardIframeSection,
  automotiveKPIsGridCardsSection,
  automotivePageHeroSectionDetails,
} from "@/page-data/industries/automotive-analytics-solutions";
export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;

export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("automotive-analytics-solutions");
}

const AutomotiveAnalyticsSolution = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <IndustriesPageHeroSection
        heading={automotivePageHeroSectionDetails.heading}
        description={automotivePageHeroSectionDetails.description}
        bulletPoints={automotivePageHeroSectionDetails.bulletPoints}
        buttons={automotivePageHeroSectionDetails.buttons}
        alt={automotivePageHeroSectionDetails.alt}
        imageSrc={automotivePageHeroSectionDetails.imageSrc}
        imageClassName="mr-[52px] mt-10 lg:mt-[-24px]"
        descriptionClassName="font-normal"
      />
      {/* <DownloadNowMiniForm words={words} heading={heading} /> */}
      <GridCardsSection
        heading={automotiveGridCardsKnowMoreSection.heading}
        description={automotiveGridCardsKnowMoreSection.description}
        projects={automotiveGridCardsKnowMoreSection.projects}
        gradientBackground={true}
        buttonPrimaryWhite={automotiveGridCardsKnowMoreSection.buttonPrimaryWhite}
        unifySimplifyAmplify={automotiveGridCardsKnowMoreSection.unifySimplifyAmplify}
      />
      <BigInfoboardIframeSection
        heading={automotiveInfoboardIframeSection.heading}
        iFrameSrc={automotiveInfoboardIframeSection.iFrameSrc}
        image={automotiveInfoboardIframeSection.image}
      />
      <Infoboard3DCards
        cards={automotiveDashboardScreenShots3DCards.cards}
        heading={automotiveDashboardScreenShots3DCards.heading}
        button={automotiveDashboardScreenShots3DCards.button}
        mainSectionClassName="mt-[-60px]"
      />
      <BookADemoSection
        heading={automotiveBookADemoSection.heading}
        buttonText={automotiveBookADemoSection.buttonText}
        href={automotiveBookADemoSection.href}
      />
      <section className="pb-10">
        <GridCardsSection
          projects={automotiveKPIsGridCardsSection.projects}
          heading={automotiveKPIsGridCardsSection.heading}
          description={automotiveKPIsGridCardsSection.description}
          buttonPrimaryWhite={automotiveKPIsGridCardsSection.buttonPrimaryWhite}
        />
      </section>
      <Footer />
    </section>
  );
};

export default AutomotiveAnalyticsSolution;
