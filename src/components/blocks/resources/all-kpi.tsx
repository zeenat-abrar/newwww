"use client";
import React from "react";
import KpiCards from "../kpis/kpi-cards";

const cardData = [
  {
    id: 12,
    title: "Automotive Metrics: Key Performance Indicators for Growth",
    description:
      "In the automotive industry, tracking key performance indicators (KPIs) is essential for optimizing business operations and improving customer satisfaction. Automotive KPIs provide critical insights into vehicle sales, market share, loan processing, after-sales support, service efficiency, and more.",
    href: "/top-10-automotive-kpis-to-track",
  },
  {
    id: 13,
    title: "Supply Chain KPIs: Metrics for Optimization",
    description:
      "Effective supply chain management is essential for achieving operational excellence and customer satisfaction. Key Performance Indicators (KPIs) are vital for measuring and optimizing supply chain performance. Our comprehensive list of supply chain KPIs covers various metrics, including shipping times, inventory turnover, and cost management.",
    href: "/top-10-supply-chain-kpis-to-track",
  },
  {
    id: 1,
    title: "Outbound sales metrics: Key indicators for success",
    description:
      "Sales teams can leverage cold call KPIs to gain insights into call performance, refine their outreach strategies, and improve lead generation by analyzing metrics such as call connection rates, follow-up success rates, and cost per lead.",
    href: "/top-10-cold-call-kpis",
  },
  {
    id: 2,
    title: "Digital marketing metrics: KPIs for driving online success",
    description:
      "Digital marketing professionals have access to more data that is increasingly defined by advanced marketing technologies, customer behavior analytics, and digital advertising platforms. How can marketing teams use this data to help them navigate the complex maze of digital marketing?",
    href: "/top-10-digital-marketing-kpis",
  },

  {
    id: 3,
    title: "Financial Metrics: Essential KPIs for decision-making",
    description:
      "Finance professionals have access to more data than ever before and that is getting more and more defined by digital financial transactions, data-driven analytics, and innovative financial technologies. In what ways can finance teams use this data to help them traverse the intricate web of the financial world?",
    href: "/top-10-finance-kpis-to-track",
  },
  {
    id: 4,
    title: "Banking metrics: KPIs for financial institutions",
    description:
      "In a world increasingly characterized by digital transactions, online interactions, and smart technologies, retailors have access to more data than ever before. But how can businesses harness this information to navigate the complex maze of retail landscape?",
    href: "/top-10-kpis-for-banks-to-track",
  },
  {
    id: 5,
    title: "Energy Retail KPIs: Drive sustainability and efficiency",
    description:
      "In a world increasingly characterized by renewable resources, smart grids, and digital energy management, energy retailers have access to more data. But how can businesses harness this information to navigate the complex maze of the energy retail landscape?",
    href: "/top-10-kpis-for-energy-retailers-to-track",
  },
  {
    id: 6,
    title: "Manufacturing metrics: KPI for operational excellence",
    description:
      "Manufacturers now have access to more data than ever before in a world that is becoming more and more defined by digital automation, advanced robotics, and smart factories. However, how can companies use this knowledge to navigate the complex industrial landscape?",
    href: "/top-10-kpis-for-manufacturers-to-track",
  },
  {
    id: 7,
    title: "HR Metrics: Key performance indicators for success",
    description:
      "Human resource professionals have access to more data in a world that is becoming more and more defined by digital recruitment, employee analytics, and sophisticated HR technologies. In what ways can HR use this information to help them make sense of the complicated HR landscape?",
    href: "/top-10-kpis-for-hr-to-track",
  },
  {
    id: 8,
    title: "Healthcare KPIs: Metrics for improving patient care",
    description:
      "Healthcare providers have access to more data that defined by telemedicine, digital health records, and cutting-edge medical technologies. In what ways may providers of healthcare use this information to help them make sense of the complicated healthcare system?",
    href: "/top-10-kpis-for-healthcare-providers-to-track",
  },
  {
    id: 9,
    title: "Retail KPIs: Key metrics for success",
    description:
      "In the retail landscape, understanding and leveraging key performance indicators (KPIs) is essential for success. It is a measurable value that indicates how effectively a retail business is achieving its key objectives.",
    href: "/top-10-retail-kpis-to-track",
  },
  {
    id: 10,
    title: "Sales performance metrics: KPIs to boost revenue",
    description:
      "Sales professionals have access to more data defined by CRM tools, digital sales platforms, and customer analytics. How can sales teams use this data to help them navigate the complex network of the sales environment?",
    href: "/top-10-sales-kpis-to-track",
  },
  {
    id: 11,
    title: "Telecom Metrics: Measuring success in the industry",
    description:
      "Telecommunications professionals have access to more data in defined by modern telecom technology, digital communication networks, and customer analytics. In what ways may telecom teams use this data to help them manage the complex maze of telecom regulations?",
    href: "/top-10-telecom-kpis-to-track",
  },
];

export function WobbleCardSection() {
  return (
    <div className="xl:max-w-[100rem] xl:mx-auto pb-32">
      <div className="pt-8 pb-16">
        <KpiCards data={cardData} />
      </div>
    </div>
  );
}
