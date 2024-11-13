import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import HeroSectionScheduleDemo from "@/components/blocks/schedule-a-demo/hero-section";
import { Footer } from "@/components/ui/footer";
import { generatemetadata } from "@/metadata/utils/generate";

export const dynamic = "force-dynamic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("book-a-demo");
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
      <HeroSectionScheduleDemo />
      <Footer />
    </section>
  );
}
