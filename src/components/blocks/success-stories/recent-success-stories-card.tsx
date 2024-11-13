import Link from "next/link";

const recentSuccessStory: { text: string; href: string }[] = [
  { text: "Sales dashboards- metrics to track, benefits & best practices", href: "/sales-dashboards-metrics-to-track-benefits-best-practices" },
  { text: "Empowering Businesses with modern BI solutions", href: "/modern-business-intelligence-software" },
  { text: "What is retail analytics?", href: "/what-is-retail-analytics" },
  { text: "IDA strategy on OEE", href: "/how-may-oee-be-maximized-ida-strategy" },
  { text: "Why is it crucial to boost OEE?", href: "/maximizing-oee-efficiency-the-benefits" },
];

const RecentSuccessStoryCard = () => {
  return (
    <div className="bg-ivviolet-200 px-5 py-6 mt-6 shadow-xl rounded-lg border border-ivviolet-200">
      <h2 className="text-xl font-semibold text-left mb-2">Recent Blogs</h2>
      <ol className="list-disc text-base space-y-2 pl-5">
        {recentSuccessStory.map((bulletPoint, index) => (
          <li key={index}>
            <Link href={bulletPoint.href} className="hover:text-ivviolet-1000">
              {bulletPoint.text}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RecentSuccessStoryCard;
