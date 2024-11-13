"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { z, ZodFormattedError } from "zod";
import AicpaSoc from "@/assets/certificates-logos/new/aicpa-soc.png";
import ISO27001 from "@/assets/certificates-logos/new/iso-27001.png";
import Email from "@/assets/footer-svgs/email.svg";
import LinkedIn from "@/assets/footer-svgs/linkedin.svg";
import Youtube from "@/assets/footer-svgs/youtube.svg";
import PrimaryWhiteButton from "@/components/ui/buttons/primary-white-button";
import { InfoveaveLogo } from "@/components/ui/infoveave-logo";

const formSchema = z.object({
  workEmail: z.string().min(1, { message: "Email is required." }).email({ message: "Email is required." }),
});

// Update the errors state type to ZodFormattedError
type FormErrors = ZodFormattedError<
  {
    workEmail: string;
  },
  string
>;

const company = [
  { text: "About us", href: "/about-us#company" },
  { text: "Contact us", href: "/about-us#contactus" },
  { text: "Privacy policy", href: "/privacy-policy" },
  { text: "Terms & conditions", href: "/terms-and-conditions" },
  { text: "Our team", href: "/infoveave-team" },
];

// const platform = [
//   { text: "Data visualization", href: "/insights-data-visualization" },
//   // { text: "Analytics", href: "/data-analytics-machinelearning-python" },
//   { text: "Data science", href: "/data-analytics-machinelearning-python" },
//   { text: "Data automation", href: "/data-automation" },
//   { text: "Data driven apps", href: "/last-mile-data-collection" },
//   { text: "Data governance", href: "/data-governance" },
// ];

const platform = [
  { text: "Data Automation", href: "/data-automation" },
  { text: "Data Analytics", href: "/data-analytics-machinelearning-python" },
  { text: "Data Insights", href: "/insights-data-visualization" },
  // { text: "Data science", href: "/data-analytics-machinelearning-python" },
  { text: "Data Applications", href: "/last-mile-data-collection" },
  { text: "Data Governance", href: "/data-governance" },
];

export const Footer = () => {
  const [formData, setFormData] = useState({
    workEmail: "",
  });

  // Use the correct type for the errors state
  const [errors, setErrors] = useState<FormErrors | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false); // Loader state
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setErrors((prevErrors: any) => {
      if (prevErrors) {
        const newErrors = { ...prevErrors };
        delete newErrors[id as keyof FormErrors];
        return newErrors;
      }
      return prevErrors;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form data using Zod
    const result = formSchema.safeParse(formData);

    if (!result.success) {
      const formErrors = result.error.format();
      setErrors(formErrors);
    } else {
      setErrors(null);

      try {
        const res = await fetch("/api/newsletter", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "content-type": "application/json",
          },
        });

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const data: { message: string } = await res.json();
        setFormSubmitted(true);
      } catch (error) {
        console.error("Error : ", error);
        setFormSubmitted(false);
      } finally {
        setLoading(false); // Set loading state to false after submission
      }
    }
  };

  return (
    <section className="bg-ivviolet-100">
      <footer className="xl:max-w-[100rem] xl:mx-auto px-[3%] xl:px-[104px] text-black py-16 md:pt-28 md:pb-20 relative">
        <div className="mx-auto">
          <div className="flex flex-col items-center justify-center relative z-10">
            <div className="absolute -top-36 md:-top-48 lg:-top-44 sm:-top-60 bg-ivviolet-700 rounded-xl w-full py-8 md:py-10 md:px-16 lg:px-4 xl:px-16">
              <div className="flex flex-col items-center gap-1 md:gap-6 lg:flex-row lg:items-center lg:justify-between">
                {formSubmitted ? (
                  <div className="w-full text-white text-center text-base md:text-xl md:py-2.5">Thank you for subscribing to our newsletter.</div>
                ) : (
                  <>
                    <span className="text-white text-base md:text-xl">Subscribe to our newsletter</span>
                    <form onSubmit={handleSubmit}>
                      <div className="flex justify-center flex-row items-center gap-2 w-full mt-4 lg:mt-0 lg:w-auto text-black">
                        <input
                          id="workEmail"
                          type="email"
                          placeholder={errors?.workEmail ? errors.workEmail._errors[0] : "Enter your email"}
                          value={formData.workEmail}
                          onChange={handleInputChange}
                          className={`bg-white placeholder:text-gray-600 text-gray-900 px-4 py-[10px] outline-none rounded-md w-1/2 md:w-[90%] lg:w-[27rem] border-2 ${errors?.workEmail ? "border-red-600 placeholder:text-red-600" : "border-white"}`}
                        />
                        <PrimaryWhiteButton text="Subscribe" />
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center md:justify-between items-center md:items-end">
            {/* Footer Image and Icons */}
            <div className="flex justify-center lg:justify-start mt-14 md:mt-20 sm:mt-12 lg:mt-0 md:ml-[-7px]">
              <InfoveaveLogo multiplier={1.6} />
            </div>
            <div className="flex justify-center gap-2 mt-6 lg:mt-0">
              <a href="" aria-label="LinkedIn">
                <Image src={LinkedIn} alt="LinkedIn" width={44} height={44} />
              </a>
              <a href="" aria-label="Email">
                <Image src={Email} alt="Email" width={44} height={44} />
              </a>
              <a href="" aria-label="YouTube">
                <Image src={Youtube} alt="YouTube" width={44} height={44} />
              </a>
            </div>
          </div>

          {/* Footer Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[4fr_2fr_2fr_2fr] gap-8 mt-12 text-left">
            <div>
              <h3 className="font-semibold text-base md:text-base mb-4 ">About us</h3>
              <p className="text-sm">
                Infoveave is a Unified Data Automation and Decision Intelligence Platform that integrates data from multiple sources to deliver intelligent
                information and timely insights that, in turn, provide businesses with the clarity they need for making mission critical decisions.{" "}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-base md:text-base mb-4">Company</h3>
              <ul className="space-y-2">
                {company.map((e, index) => (
                  <li key={index} className="text-sm">
                    {/* <Icon icon={["fal", "angle-right"]} className="mr-2" /> */}
                    <Link href={e.href} className="hover:text-ivviolet-1000">
                      {e.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-base md:text-base mb-4">Platform</h3>
              <ul className="space-y-2 ">
                {platform.map((e, index) => (
                  <li key={index} className="text-sm">
                    {/* <Icon icon={["fal", "angle-right"]} className="mr-2" /> */}
                    <Link href={e.href} className="hover:text-ivviolet-1000">
                      {e.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {/* <h3 className="font-semibold text-base md:text-base text-left lg:text-center lg:ml-9">Certifications</h3> */}
              <div className="flex justify-start xl:justify-end items-center gap-1">
                <Link href={"https://trust.infoveave.com"}>
                  <Image src={ISO27001} alt="infoveave-iso-27001" width={94} height={94} className="size-20 xl:size-[94px]" />
                </Link>
                <Link href={"https://trust.infoveave.com"}>
                  <Image src={AicpaSoc} alt="infoveave-aicpa-soc" width={96} height={96} className="size-20 xl:size-[94px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* bottom footer */}
      <div className="bg-ivviolet-700 py-2">
        <div className="xl:max-w-[100rem] xl:mx-auto px-[3%] xl:px-[104px] flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className={"font-secondary text-center text-sm text-gray-50"}>
            © {new Date().getFullYear()}{" "}
            <Link href={"https://noesyssoftware.com"} target="_blank">
              <span className="text-white hover:underline">Noesys Software Pvt Ltd</span>
            </Link>{" "}
          </h1>
          <h1 className={"font-secondary text-center text-sm text-gray-50"}>Infoveave® is a product of Noesys</h1>
          <h1 className={"font-secondary text-center text-sm text-gray-50"}>All Rights Reserved</h1>
        </div>
      </div>
    </section>
  );
};
