"use client";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";

const SuccessStoryCards = () => {
  const blogs = [
    {
      id: 1,
      title: "Best offer pricing with a Unified Data Platform",
      description:
        "In the competitive Australian energy market, a leading retail energy provider has supplied electricity and gas to over 700,000 accounts. They faced significant challenges in offering the best pricing to their customers. Mandated by the regulated bodies to provide optimal pricing, the company struggled with fragmented data, making analysis and accurate pricing offers difficult.",
      image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2024/06/Best-offer.jpg?resize=2048%2C1152&ssl=1",
    },
    {
      id: 2,
      title: "Retail Logistics Simplified With Infoveave",
      description:
        "The company has been a key industry player for over 60 years. They specialize in importing and wholesaling artificial Christmas trees, seasonal decorations, and holiday products. The company has faced significant logistical challenges in the past when procuring goods.",
      image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2024/03/retail-logistics.jpeg?w=1120&ssl=1",
    },
    {
      id: 3,
      title: "Fortune 500 company uses Infoveave to digitize shopfloor analytics",
      description:
        "The company is a Fortune 500 enterprise in the manufacturing industry, specializing in a wide range of tools, equipment, and solutions for professionals and consumers worldwide. In response to the growth and expanded production capacity at one of their factories, the company recognized the need for a better process to increase efficiency.",
      image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2024/02/shopfloor-analytics.jpeg?w=1120&ssl=1",
    },
    {
      id: 4,
      title: "Telecom network performance analysis",
      description:
        "Monitoring an operational network is a major KPI for telecom. Network Performance analysis and real time monitoring aids the operational teams in ways.",
      image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2021/11/Telecom-performance-analysis.jpeg?w=560&ssl=1",
    },
    {
      id: 5,
      title: "Australian utility provider uses RPA to Improve billing Efficiency",
      description:
        "Improving billing efficiency by weeding out unoccupied accounts and disconnecting supply where the customer information cannot be verified.",
      image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2021/08/RPA-SE.jpeg?w=560&ssl=1",
    },
    {
      id: 6,
      title: "How a leading manufacturing plant improved their OEE",
      description:
        "OEE Dashboard is a production visibility tool that displays real-time data. This provides review and status summary information for plant lines and units.",
      category: "Case Study, OEE Articles",
      image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2021/06/OEE-SBD.jpeg?w=560&ssl=1",
    },
    {
      id: 7,
      title: "Auto dealer performance analytics",
      description:
        "The automobile manufacturer aims to achieve a good review across its dealers to maintain consistent and high-quality customer experience across all its dealerships.",
      image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2021/05/Automotive-dealership.jpeg?w=560&ssl=1",
    },
    {
      id: 8,
      title: "Competitive pricing intelligence",
      description:
        "Product pricing is a critical function for the automotive industry. With fierce competition and customers’ options, pricing intelligence is the key to profits.",
      image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2021/05/competitive-pricing-intelligence.jpeg?w=560&ssl=1",
    },
    {
      id: 9,
      title: "Program effectiveness and survival analysis",
      description:
        "Flexibility of Infoveave allowed data ingested to scale as per the data availability. The dataset can be from single healthcare unit or a country wide, for instance",
      image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2021/04/Program-effectiveness-and-survival-analysis.jpeg?w=560&ssl=1",
    },
    {
      id: 10,
      title: "Community health monitoring analysis",
      description:
        "As part of its various healthcare initiatives, the client is working on an ICT-led solution. This supports Community Health Worker Supervisors to guide performance improvements.",
      image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2021/02/Community-health-monitoring-analysis.jpeg?w=560&ssl=1",
    },
    {
      id: 11,
      title: "Monitoring risks and compliance",
      description: "Risk analysis and compliance management systems help in maintaining food quality and delivery standards.",
      image: "https://i0.wp.com/infoveave.com/wp-content/uploads/2021/01/Risk-analysis-and-compliance-management-system.jpeg?w=560&ssl=1",
    },
    {
      id: 12,
      title: "RPA deployment in account payables",
      description:
        "Account payable is a highly automatable process using RPA since it relies on repeated operations such as data extraction, invoice validation, and payment processing.",
      category: "Case Study, OEE Articles",
      image: "https://infoveave.com/wp-content/uploads/2020/12/RPA-deployment-in-account-payables.jpeg",
    },
  ];

  const [displayedBlogs, setDisplayedBlogs] = useState(blogs.slice(0, 3)); // Initially show 3 cards
  const [page, setPage] = useState(1); // Page to keep track of the number of loads
  const observerRef = useRef<IntersectionObserver | null>(null);

  const loadMoreBlogs = () => {
    const newPage = page + 1;
    setPage(newPage);

    const newBlogs = blogs.slice(0, newPage * 3); // Load 3 more cards per page
    setDisplayedBlogs(newBlogs);
  };

  const lastCardRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && displayedBlogs.length < blogs.length) {
          loadMoreBlogs();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [displayedBlogs]
  );

  return (
    <section className="py-4 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {displayedBlogs.map((blog, index) => (
          <div
            key={blog.id}
            className="flex items-center bg-white rounded-lg overflow-hidden my-10 transition duration-300 hover:scale-105 h-[180px]"
            style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            ref={index === displayedBlogs.length - 1 ? lastCardRef : null} // Set ref on the last item
          >
            <div className="w-1/3">
              <Image
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                }}
                src={blog.image}
                alt={blog.title}
                width={150}
                height={100}
                className="w-full object-cover"
              />
            </div>
            <div className="w-2/3 py-4 px-10">
              <h4 className="text-base font-semibold mb-4">{blog.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStoryCards;
