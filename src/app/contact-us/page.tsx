import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import { ClientsMovingCards } from "@/components/blocks/company/client-carousel";
import { HappyClient } from "@/components/blocks/company/happy-client-section";
import { LocationSection } from "@/components/blocks/company/location-section";
import { TalkToOurExpertForm } from "@/components/blocks/company/talk-to-expert-form";
import { Footer } from "@/components/ui/footer";
import { generatemetadata } from "@/metadata/utils/generate";
export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("contact-us");
}

const signupHeading = "We'd love to |hear| from you";
//clientmovinghead
const clientmovinghead = "What our |clients| say";

//location head
const locationHead = "Our Locations";

const ContactUsPage = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
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
  );
};

export default ContactUsPage;
