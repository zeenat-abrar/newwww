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
  telecomBookADemoSection,
  telecomDashboardScreenShots3DCards,
  telecomGridCardsKnowMoreSection,
  telecomInfoboardIframeSection,
  telecomKPIsGridCardsSection,
  telecomPageHeroSectionDetails,
} from "@/page-data/industries/telecom-industry-solutions";
export const dynamic = "force-dynamic";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("telecom-industry-solutions");
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
        heading={telecomPageHeroSectionDetails.heading}
        description={telecomPageHeroSectionDetails.description}
        bulletPoints={telecomPageHeroSectionDetails.bulletPoints}
        buttons={telecomPageHeroSectionDetails.buttons}
        imageSrc={telecomPageHeroSectionDetails.imageSrc}
        imageClassName="mt-8 lg:mt-[-20px] lg:mr-[-100px] lg:px-[50px]"
        descriptionClassName="font-normal"
        alt={telecomPageHeroSectionDetails.alt}
      />
      {/* <DownloadNowMiniForm words={words} heading={heading} /> */}
      <GridCardsSection
        heading={telecomGridCardsKnowMoreSection.heading}
        description={telecomGridCardsKnowMoreSection.description}
        projects={telecomGridCardsKnowMoreSection.projects}
        gradientBackground={true}
        buttonPrimaryWhite={telecomGridCardsKnowMoreSection.buttonPrimaryWhite}
        unifySimplifyAmplify={telecomGridCardsKnowMoreSection.unifySimplifyAmplify}
      />
      <BigInfoboardIframeSection
        heading={telecomInfoboardIframeSection.heading}
        iFrameSrc={telecomInfoboardIframeSection.iFrameSrc}
        image={telecomInfoboardIframeSection.image}
      />
      <Infoboard3DCards
        cards={telecomDashboardScreenShots3DCards.cards}
        heading={telecomDashboardScreenShots3DCards.heading}
        button={telecomDashboardScreenShots3DCards.button}
        mainSectionClassName="mt-[-60px]"
      />
      <BookADemoSection heading={telecomBookADemoSection.heading} buttonText={telecomBookADemoSection.buttonText} href={telecomBookADemoSection.href} />
      <section className="pb-10">
        <GridCardsSection
          projects={telecomKPIsGridCardsSection.projects}
          heading={telecomKPIsGridCardsSection.heading}
          description={telecomKPIsGridCardsSection.description}
          buttonPrimaryWhite={telecomKPIsGridCardsSection.buttonPrimaryWhite}
        />
      </section>
      <Footer />
    </section>
  );
};

export default TelecomPage;
