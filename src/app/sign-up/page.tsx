import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import HeroSectionSignUp from "@/components/blocks/signup-for-free-trial/hero-section";
import SignupHighlight from "@/components/blocks/signup-for-free-trial/signup-highlight-section";
import { Footer } from "@/components/ui/footer";
import { generatemetadata } from "@/metadata/utils/generate";
export const dynamic = "force-dynamic"; // eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("sign-up");
}

export default function SignUpPage() {
  return (
    <section
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <HeroSectionSignUp />
      <section className="md:-mt-20">
        <SignupHighlight buttonText="Book Demo Appointment" heading="Prefer someone to walk you through a demo?" />
      </section>
      <Footer />
    </section>
  );
}
