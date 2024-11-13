import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import BookADemoSection from "@/components/blocks/industries/book-a-demo-section";
import { GridCardsSection } from "@/components/blocks/industries/grid-card-view";
import BigInfoboardIframeSection from "@/components/blocks/industries/Iframe-Infobard/big-iframe-infoboard";
import IndustriesPageHeroSection from "@/components/blocks/industries/industry-page-hero-section";
import { Infoboard3DCards } from "@/components/blocks/industries/infoboards-cards-section";
import { Footer } from "@/components/ui/footer";
import { generatemetadata } from "@/metadata/utils/generate";
import {
  energyBookADemoSection,
  energyDashboardScreenShots3DCards,
  energyGridCardsSection,
  energyInfoboardIframeSection,
  energyKPIsGridCardsSection,
  energyPageHeroSectionDetails,
} from "@/page-data/industries/energy-analytics-solutions";

export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("energy-analytics-solutions");
}

const EnergyPage = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <IndustriesPageHeroSection
        heading={energyPageHeroSectionDetails.heading}
        description={energyPageHeroSectionDetails.description}
        bulletPoints={energyPageHeroSectionDetails.bulletPoints}
        buttons={energyPageHeroSectionDetails.buttons}
        imageSrc={energyPageHeroSectionDetails.imageSrc}
        alt={energyPageHeroSectionDetails.alt}
        imageClassName="xl:-mt-[75px] -mb-[60px] mx-[60px]"
        descriptionClassName="font-normal"
      />
      {/* <DownloadNowMiniForm words={words} heading={heading} /> */}
      <GridCardsSection
        projects={energyGridCardsSection.projects}
        heading={energyGridCardsSection.heading}
        description={energyGridCardsSection.description}
        gradientBackground={true}
        buttonPrimaryWhite={energyGridCardsSection.buttonPrimaryWhite}
        unifySimplifyAmplify={energyGridCardsSection.unifySimplifyAmplify}
      />
      <BigInfoboardIframeSection
        heading={energyInfoboardIframeSection.heading}
        iFrameSrc={energyInfoboardIframeSection.iFrameSrc}
        image={energyInfoboardIframeSection.image}
      />
      <Infoboard3DCards
        cards={energyDashboardScreenShots3DCards.cards}
        heading={energyDashboardScreenShots3DCards.heading}
        button={energyDashboardScreenShots3DCards.button}
        mainSectionClassName="mt-[-60px]"
      />
      <BookADemoSection heading={energyBookADemoSection.heading} buttonText={energyBookADemoSection.buttonText} href={energyBookADemoSection.href} />
      <section className="pb-10">
        <GridCardsSection
          projects={energyKPIsGridCardsSection.projects}
          heading={energyKPIsGridCardsSection.heading}
          description={energyKPIsGridCardsSection.description}
          buttonPrimaryWhite={energyKPIsGridCardsSection.buttonPrimaryWhite}
        />
      </section>
      <Footer />
    </section>
  );
};

export default EnergyPage;
