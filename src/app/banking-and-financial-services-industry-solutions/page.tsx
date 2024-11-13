import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import CustomerDemographics from "@/assets/Dashboard-cards/Infoveave-Customer-Demographic.webp";
import RiskAndCompliance from "@/assets/Dashboard-cards/Infoveave-Risk-Compliance.webp";
import Stability from "@/assets/Dashboard-cards/Infoveave-Stability.webp";
// import { DownloadNowMiniForm } from "@/components/blocks/industries/download-now-mini-form";
import BookADemoSection from "@/components/blocks/industries/book-a-demo-section";
import { GridCardsSection } from "@/components/blocks/industries/grid-card-view";
import BigInfoboardIframeSection from "@/components/blocks/industries/Iframe-Infobard/big-iframe-infoboard";
import IndustriesPageHeroSection from "@/components/blocks/industries/industry-page-hero-section";
import { infobard3dCardsButtonType, Infoboard3DCards } from "@/components/blocks/industries/infoboards-cards-section";
import { Footer } from "@/components/ui/footer";
import { generatemetadata } from "@/metadata/utils/generate";
import {
  bankingBookADemoSection,
  bankingGridCardsKnowMoreSection,
  bankingInfoboardIframeSection,
  bankingKPIsGridCardsSection,
  bankingPageHeroSectionDetails,
} from "@/page-data/industries/banking-and-financial-services-industry-solutions";

export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("banking-and-financial-services-industry-solutions");
}

// Array of card data - Infoboard3DCards
const inforboard3DCardsHeading = "Explore More Dashboard Examples";

const cards = [
  {
    id: 1,
    imageSrc: CustomerDemographics,
    title: "Customer Demographics",
  },
  {
    id: 2,
    imageSrc: RiskAndCompliance,
    title: "Risk & Compliance",
  },
  {
    id: 3,
    imageSrc: Stability,
    title: "Stability",
  },
];
const inforboard3DCardsButton: infobard3dCardsButtonType = {
  text: "Get started with our templates - Sign up today!",
  href: "/sign-up",
};

const BankingSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <IndustriesPageHeroSection
        heading={bankingPageHeroSectionDetails.heading}
        description={bankingPageHeroSectionDetails.description}
        bulletPoints={bankingPageHeroSectionDetails.bulletPoints}
        buttons={bankingPageHeroSectionDetails.buttons}
        alt={bankingPageHeroSectionDetails.alt}
        imageSrc={bankingPageHeroSectionDetails.imageSrc}
        imageClassName="my-[20px]"
        descriptionClassName="font-normal"
      />
      <GridCardsSection
        projects={bankingGridCardsKnowMoreSection.projects}
        heading={bankingGridCardsKnowMoreSection.heading}
        description={bankingGridCardsKnowMoreSection.description}
        gradientBackground={true}
        buttonPrimaryWhite={bankingGridCardsKnowMoreSection.buttonPrimaryWhite}
        unifySimplifyAmplify={bankingGridCardsKnowMoreSection.unifySimplifyAmplify}
      />
      <BigInfoboardIframeSection
        heading={bankingInfoboardIframeSection.heading}
        iFrameSrc={bankingInfoboardIframeSection.iFrameSrc}
        image={bankingInfoboardIframeSection.image}
      />
      <Infoboard3DCards cards={cards} heading={inforboard3DCardsHeading} button={inforboard3DCardsButton} mainSectionClassName="mt-[-60px]" />
      <BookADemoSection heading={bankingBookADemoSection.heading} buttonText={bankingBookADemoSection.buttonText} href={bankingBookADemoSection.href} />
      <section className="pb-10">
        <GridCardsSection
          projects={bankingKPIsGridCardsSection.projects}
          heading={bankingKPIsGridCardsSection.heading}
          description={bankingKPIsGridCardsSection.description}
          buttonPrimaryWhite={bankingKPIsGridCardsSection.buttonPrimaryWhite}
        />
      </section>
      <Footer />
    </section>
  );
};

export default BankingSection;
