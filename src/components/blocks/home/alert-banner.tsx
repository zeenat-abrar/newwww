import Link from "next/link";
import InfoveaveShapeGradient from "@/assets/infoveave-shape-gradient.png";
import { AlertBeamsWithCollision } from "@/components/ui/beams-animations/alert-beam-section";

interface AlertBannerProps {
  heading: string;
  linkText: string;
}

function AlertBanner({ heading, linkText }: AlertBannerProps) {
  return (
    <AlertBeamsWithCollision
      style={{
        backgroundImage: `url(${InfoveaveShapeGradient.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className="bg-ivindigo-500 hidden lg:flex m-auto"
    >
      <div className="container flex items-center justify-center w-full gap-5">
        <p className="text-sm text-center font-semibold text-white dark:text-white">{heading}</p>
        <Link href={"/insights-data-visualization"}>
          <p className="text-sm text-center font-semibold text-white dark:text-white transition duration-500 hover:scale-110">{linkText}</p>
        </Link>
      </div>
    </AlertBeamsWithCollision>
  );
}

export default AlertBanner;
