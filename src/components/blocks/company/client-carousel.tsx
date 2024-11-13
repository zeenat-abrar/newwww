"use client";
import React from "react";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";
import { InfiniteMovingCardItemType, InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

interface Clientmovingcards {
  heading: string;
}

export function ClientsMovingCards({ heading }: Clientmovingcards) {
  const dynamicHeading = heading.split("|");
  return (
    <section>
      <div className="flex justify-center items-center md:mb-4">
        <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} />
      </div>
      <div className="h-full rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      </div>
    </section>
  );
}

const testimonials: InfiniteMovingCardItemType[] = [
  {
    icon: "user-circle",
    quote:
      "“Infoveave has provided a seamless end-to-end data integration and visualization platform without the need for other tools. It also helped with process automation and reporting. NGauge forms help quickly build business intelligence apps that have greatly helped with business agility.”",
    name: "Head-business capability",
    title: " Leading Australian retail energy provider",
  },
  {
    icon: "user-circle",
    quote:
      "“We have been using Infoveave for business-critical analysis for over 2 years. The solutions provided to us have been extremely valuable. The established processes and the services to support them have been top-notch. ”",
    name: "Stacey Berlow",
    title: "Managing Partner, Project Balance",
  },
  {
    icon: "user-circle",
    quote:
      "“Infoveave is our ‘go-to’ business intelligence platform. The team behind Infoveave has deep expertise in all aspects of data and has been an invaluable partner in delivering projects to our customers.”",
    name: "Neil H",
    title: "Software Development Manager at Zipform",
  },
  {
    icon: "user-circle",
    quote:
      "“Infoveave has enabled us to centralize our clinical and operational data, giving us a clearer picture of how our hospital functions on a day-to-day basis. We’ve been able to cut administrative time, allowing us to focus more on patient care.”",
    name: "Hospital Administrator",
    title: "Major hospital group",
  },
  {
    icon: "user-circle",
    quote:
      "“Infoveave has completely transformed our approach to managing data. We’ve been able to unify inventory, sales, and supply chain data into one seamless platform. The improved visibility has allowed us to reduce stock outs and optimize our restocking strategy, saving both time and costs”",
    name: "Head of Retail Operations",
    title: "National retail chain",
  },
  {
    icon: "user-circle",
    quote:
      "“With Infoveave, we’ve gained the ability to view and analyze data from multiple sources in real time. It’s helped us improve our merchandising strategies and fine-tune our pricing models, leading to a direct impact on profitability.”",
    name: "Merchandising Director",
    title: "Leading e-commerce site",
  },
  {
    icon: "user-circle",
    quote:
      "“Infoveave has helped us to improve our shop floor management. We now have a live view of production metrics and  can now track machine performance, identify inefficiencies, and enhance overall efficiency.”",
    name: "Plant Manager",
    title: "Fortune 500 manufacturing company",
  },
];
