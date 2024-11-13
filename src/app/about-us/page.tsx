// import BackgroundGradient from "@/assets/bg-gradient-trans.png";

import NoesysUrl from "@/assets/about-us/noesys-logo/Noesys-Full-Logo.jpg";
import CareersAtInfoveaveSection from "@/components/blocks/about-us/careers/careersAtInfoveave";
import { PartnersSignUpFormSection } from "@/components/blocks/about-us/partners-signup/partners-signup-form";
import { FoundingTeamSection } from "@/components/blocks/about-us/the-founding-team/founding-team-section";
import { ClientsMovingCards } from "@/components/blocks/company/client-carousel";
import { HappyClient } from "@/components/blocks/company/happy-client-section";
import InfoveaveSection from "@/components/blocks/company/infoveave-section";
import { LocationSection } from "@/components/blocks/company/location-section";
import NoesysSection from "@/components/blocks/company/noesys-section";
import { TalkToOurExpertForm } from "@/components/blocks/company/talk-to-expert-form";
import { GridCardsSection } from "@/components/blocks/industries/grid-card-view";
import { Footer } from "@/components/ui/footer";
import { generatemetadata } from "@/metadata/utils/generate";

export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("about-us");
}

//Company Section

//grid card props
const companyTeamsCardHeading = "The Founding |Team|";
// const gridCardDescription =
//   "At our company, we hold trust, transparency, and care as core values. We believe that these are essential in fostering strong and lasting relationships with both our clients and team members. We also place great emphasis on a strong work ethic and a high degree of integrity. It is our belief that these values are integral to maintaining a positive and productive work environment. Additionally, we strive to foster the right attitude in our team members, as we believe that a positive attitude is key to achieving success both individually and collectively.";

//PartnersSignupHeading
const partnersSignUpHeading = "Join the |Infoveave Partner Network|";

//grid card props
const gridCardHeading = "|Our values| inspire us to innovate and excel";
// const gridCardDescription =
//   "At our company, we hold trust, transparency, and care as core values. We believe that these are essential in fostering strong and lasting relationships with both our clients and team members. We also place great emphasis on a strong work ethic and a high degree of integrity. It is our belief that these values are integral to maintaining a positive and productive work environment. Additionally, we strive to foster the right attitude in our team members, as we believe that a positive attitude is key to achieving success both individually and collectively.";

const projects = [
  {
    title: "Agility",
    description: "Our agility propels us to survive and achieve. We are firm believers in stepping up to any task, and being proactive.",
  },
  {
    title: "Focus",
    description: "We obsess with our customers' success. We empower every team member to be proactive and take ownership.",
  },
  {
    title: "Care",
    description: "We care for our people, customers & product. We go extra miles to build robust products, & a positive workspace.",
  },
];

//noesys section props
const retailHeroSectionDescription3 =
  "Noesys, means “result of Analysis, Perception and Thinking”, this philosophy is engrained in the way we engage with our customers helping them realize their business objectives. Over the years, we have evolved on how we operate and serve our customers yet have kept our founding principles intact.";

const noesyshead = "Noesys software Pvt. Ltd.";

//infoveave section props
const retailHeroSectionDescription4 =
  "Infoveave is a Unified Data Automation and Decision Intelligence Platform that integrates data from multiple sources to deliver intelligent information and timely insights that, in turn, provide businesses with the clarity they need for making mission critical decisions.";

const infoveaveHead = "Brand";

//clientmovinghead
const clientmovinghead = "What our |clients| say";

const noesysUrl = NoesysUrl;

//contact us props
const signupHeading = "We'd love to |hear| from you";

//Location heading
const locationHead = "Our Locations";

const AboutUs = () => {
  return (
    <section
    // style={{
    //   backgroundImage: `url(${BackgroundGradient.src})`,
    //   backgroundSize: "cover",
    //   backgroundAttachment: "fixed",
    // }}
    >
      {/* Company section */}
      <section id="company">
        <NoesysSection heading={noesyshead} description={retailHeroSectionDescription3} imageSrc={noesysUrl} />
        <div className="mt-[-40px] mb-[-25px] ">
          <FoundingTeamSection heading={companyTeamsCardHeading} />
        </div>
      </section>

      {/* Brand section */}
      <section id="brand">
        <div className="mb-[-35px]">
          <InfoveaveSection heading={infoveaveHead} description={retailHeroSectionDescription4} />
        </div>
        <GridCardsSection projects={projects} heading={gridCardHeading} gridHeadingClassName="mb-[-25px]" />
      </section>

      {/* Partners section */}
      <section id="partners" className="mt-[-80px]">
        <PartnersSignUpFormSection heading={partnersSignUpHeading} />
      </section>
      {/* media careers */}
      <section id="careers" className="my-[-60px]">
        <CareersAtInfoveaveSection />
      </section>
      {/* contact section */}
      <section id="contactus" className="md:mt-[-50px]">
        <TalkToOurExpertForm heading={signupHeading} />
        <HappyClient />
        <div className="pt-20">
          <ClientsMovingCards heading={clientmovinghead} />
        </div>
        <div className="pb-20 pt-10">
          <LocationSection heading={locationHead} />
        </div>
        <Footer />
      </section>
    </section>
  );
};
export default AboutUs;
