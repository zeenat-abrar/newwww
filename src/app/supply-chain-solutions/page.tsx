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
  supplyChainBookADemoSection,
  supplyChainDashboardScreenShots3DCards,
  supplyChainGridCardsKnowMoreSection,
  supplyChainInfoboardIframeSection,
  supplyChainKPIsGridCardsSection,
  supplyChainPageHeroSectionDetails,
} from "@/page-data/industries/supply-chain-solutions";

export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("supply-chain-solutions");
}

const TelecomPage = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <IndustriesPageHeroSection
        heading={supplyChainPageHeroSectionDetails.heading}
        description={supplyChainPageHeroSectionDetails.description}
        bulletPoints={supplyChainPageHeroSectionDetails.bulletPoints}
        buttons={supplyChainPageHeroSectionDetails.buttons}
        imageSrc={supplyChainPageHeroSectionDetails.imageSrc}
        imageClassName="-mt-[20px] lg:mr-[-100px] lg:px-[20px] lg:my-[-64px]"
        descriptionClassName="font-normal"
        alt={supplyChainPageHeroSectionDetails.alt}
      />
      {/* <DownloadNowMiniForm words={words} heading={heading} /> */}
      <GridCardsSection
        heading={supplyChainGridCardsKnowMoreSection.heading}
        description={supplyChainGridCardsKnowMoreSection.description}
        unifySimplifyAmplify={supplyChainGridCardsKnowMoreSection.unifySimplifyAmplify}
        projects={supplyChainGridCardsKnowMoreSection.projects}
        gradientBackground={true}
        buttonPrimaryWhite={supplyChainGridCardsKnowMoreSection.buttonPrimaryWhite}
      />
      <BigInfoboardIframeSection
        heading={supplyChainInfoboardIframeSection.heading}
        iFrameSrc={supplyChainInfoboardIframeSection.iFrameSrc}
        image={supplyChainInfoboardIframeSection.image}
      />
      <Infoboard3DCards
        cards={supplyChainDashboardScreenShots3DCards.cards}
        heading={supplyChainDashboardScreenShots3DCards.heading}
        button={supplyChainDashboardScreenShots3DCards.button}
        mainSectionClassName="lg:mt-[-60px]"
      />
      <BookADemoSection
        heading={supplyChainBookADemoSection.heading}
        buttonText={supplyChainBookADemoSection.buttonText}
        href={supplyChainBookADemoSection.href}
      />
      <section className="pb-10">
        <GridCardsSection
          projects={supplyChainKPIsGridCardsSection.projects}
          heading={supplyChainKPIsGridCardsSection.heading}
          description={supplyChainKPIsGridCardsSection.description}
          buttonPrimaryWhite={supplyChainKPIsGridCardsSection.buttonPrimaryWhite}
        />
      </section>
      <Footer />
    </section>
  );
};

export default TelecomPage;
