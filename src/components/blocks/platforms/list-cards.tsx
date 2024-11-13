import MainHeading from "@/components/ui/headings/main-heading";

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface FeatureCardsProps {
  heading: string;
  description?: string;
  cards: Feature[];
}

export default function FeatureCards({ heading, description, cards }: FeatureCardsProps) {
  return (
    <section className="xl:max-w-[100rem] mx-auto px-[3%] xl:px-[104px]">
      {/* Text Section */}
      <div className="text-center mt-20 relative z-10">
        <MainHeading text={heading} alignText="center" />
      </div>

      {/* Description Section */}
      {description && (
        <div className="text-center mt-2">
          <p>{description}</p>
        </div>
      )}

      <div className="mx-auto py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {cards.map((feature, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="shrink-0 p-7 bg-ivviolet-700 text-white rounded-lg">{feature.icon}</div>
            <div>
              <h3 className="mt-[-5px] md:mt-0 text-mobileSubHeading md:text-base font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-1 md:mt-2 text-mobileParagraph md:text-base text-gray-700">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
