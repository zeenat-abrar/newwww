import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import GetAllKpis from "@/components/blocks/kpis/get-all-kpis-form";

type KPIListType = {
  listHeading?: string;
  listParagraph?: string[];
  formula?: string;
  listImage?: StaticImageData;
};

export type kpisContentType = {
  heading?: string;
  paragraph?: string[];
  bulletPoints?: KPIListType[];
};

export interface KpiInnerPageGridLayoutProps {
  content: kpisContentType[];
  formHeading?: string;
}

const recentPosts: { text: string; href: string }[] = [
  { text: "Banking metrics: KPIs for financial institutions", href: "/top-10-kpis-for-banks-to-track" },
  { text: "Financial Metrics: Essential KPIs for decision-making", href: "/top-10-finance-kpis-to-track" },
  { text: "Sales performance metrics: KPIs to boost revenue", href: "/top-10-sales-kpis-to-track" },
  { text: "Telecom Metrics: Measuring success in the industry", href: "/top-10-telecom-kpis-to-track" },
  { text: "Digital marketing metrics: KPIs for driving online success", href: "/top-10-digital-marketing-kpis" },
];

const KpiInnerPageGridLayout = ({ content, formHeading }: KpiInnerPageGridLayoutProps) => {
  return (
    <div className="my-16 grid grid-cols-4 xl:gap-5 px-[3%] xl:px-[104px] 3xl:max-w-[100rem] xl:mx-auto">
      {/* Left Column: 75% Width */}
      <div className="col-span-4 xl:col-span-3 xl:mr-8">
        {/* Content for the left column goes here */}
        {content.map((ele, index) => (
          <div key={index} className="mb-10">
            {ele.heading && <h2 className="text-xl font-semibold my-4">{ele.heading}</h2>}
            {ele.paragraph && <p className="text-base">{ele.paragraph}</p>}
            {ele.bulletPoints?.map((e, i) => (
              <div key={i} className="my-10">
                {e.listHeading && <h2 className="text-xl font-semibold my-4">{e.listHeading}</h2>}
                {e.listParagraph?.map((para, paraIndex) => (
                  <p key={paraIndex} className="text-base my-3">
                    {para}
                  </p>
                ))}
                {e.formula && (
                  <div className="bg-ivviolet-200 py-4 px-6 mt-6 border-l-6 border-ivviolet-900">
                    <h3 className="font-semibold text-[16px]">{e.formula}</h3>
                  </div>
                )}
                {e.listImage && <Image src={e.listImage} height={400} width={600} className="mx-auto group-hover/card:shadow-xl my-5" alt="kpi-image" />}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Right Column: 25% Width */}
      <div className="col-span-4 xl:col-span-1 xl:sticky xl:top-20 xl:self-start">
        <GetAllKpis heading={formHeading} />

        <div className="bg-ivviolet-200 px-5 py-6 mt-6 shadow-xl rounded-lg border border-ivviolet-200">
          <h2 className="text-xl font-semibold text-left mb-2">Recent KPIs</h2>
          <ol className="list-disc text-base space-y-2 pl-5">
            {recentPosts.map((bulletPoint, index) => (
              <li key={index}>
                <Link href={bulletPoint.href} className="hover:text-ivviolet-1000">
                  {bulletPoint.text}
                </Link>
              </li>
            ))}
          </ol>
        </div>

        {/* <div className="bg-ivindigo-200 px-5 py-6 mt-8 shadow-xl rounded-lg">
            <h2 className="text-xl font-semibold text-left mb-4">Categories</h2>
            <ol className="list-disc text-base space-y-4 pl-5">
              {categories.map((bulletPoint, index) => (
                <li key={index}>{bulletPoint}</li>
              ))}
            </ol>
          </div> */}
      </div>
    </div>
  );
};

export default KpiInnerPageGridLayout;
