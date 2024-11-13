import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import AllVideosSection from "@/components/blocks/videos/all-videos-section";
import VideoGridLayout from "@/components/blocks/videos/video-grid-layout";
import { Footer } from "@/components/ui/footer";

const InfoveaveVideos = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <VideoGridLayout />
      <AllVideosSection />
      <Footer />
    </section>
  );
};
export default InfoveaveVideos;
