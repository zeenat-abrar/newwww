import InfoveaveShapeGradient from "@/assets/infoveave-shape-gradient.png";
import KpisPrimaryWhiteButton from "@/components/ui/buttons/kpis-primary-white-button";

interface BlogsBookADemoProps {
  heading?: string;
}

const BlogsBookADemo = ({ heading }: BlogsBookADemoProps) => {
  return (
    <div
      className="bg-ivindigo-600 px-5 pt-6 pb-8 shadow-xl rounded-lg"
      style={{
        backgroundImage: `url(${InfoveaveShapeGradient.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-xl text-white font-semibold text-center mb-4">{heading ?? "Ready to revolutionize your data journey with Infoveave?"}</h2>
      <form>
        <div className="flex justify-center flex-col items-center gap-4 w-full lg:mt-0 lg:w-auto text-black">
          <KpisPrimaryWhiteButton text="Schedule Demo" href="/book-a-demo" />
        </div>
      </form>
    </div>
  );
};

export default BlogsBookADemo;
