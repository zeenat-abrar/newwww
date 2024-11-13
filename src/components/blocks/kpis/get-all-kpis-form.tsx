import InfoveaveShapeGradient from "@/assets/infoveave-shape-gradient.png";
import KpisPrimaryWhiteButton from "@/components/ui/buttons/kpis-primary-white-button";

interface GetAllKpisProps {
  heading?: string;
}

const GetAllKpis = ({ heading }: GetAllKpisProps) => {
  return (
    <div
      className="bg-ivindigo-600 px-5 pt-6 pb-8 shadow-xl rounded-lg"
      style={{
        backgroundImage: `url(${InfoveaveShapeGradient.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-xl text-white font-semibold text-center mb-4">{heading ?? "Get the complete list of KPIs"}</h2>
      <form>
        <div className="flex justify-center flex-col items-center gap-4 w-full lg:mt-0 lg:w-auto text-black">
          <input
            id="workEmail"
            type="email"
            placeholder="Enter your email"
            className={`bg-white placeholder:text-gray-600 text-gray-900 px-2 py-[10px] outline-none rounded-md w-full border-2 border-white`}
          />
          <KpisPrimaryWhiteButton text="Request all KPIs" />
        </div>
      </form>
    </div>
  );
};

export default GetAllKpis;
