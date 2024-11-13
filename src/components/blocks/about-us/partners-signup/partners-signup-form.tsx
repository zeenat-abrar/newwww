"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { z, ZodFormattedError } from "zod";

import AarushiConsulting from "@/assets/about-us/partners-logo/aarushi-consulting-logo.png";
import Zipform from "@/assets/about-us/partners-logo/Logo-Zipform-Digital.png";
import Oojas from "@/assets/about-us/partners-logo/oojas-logo.png";
import Visnet from "@/assets/about-us/partners-logo/visnet.png";
import Tick from "@/assets/tick.svg";
import { forbiddenEmails } from "@/components/forms/forbidden-emails";
import FormPrimaryButton from "@/components/ui/buttons/form-button";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";

const formSchema = z.object({
  partnerName: z.string().min(1, { message: "Name is required." }),
  partnerEmail: z
    .string()
    .min(1, { message: "Email is required." })
    .refine(
      (email: string) => {
        const forbiddenDomains = forbiddenEmails;
        const domain = email.split("@")[1];
        return !forbiddenDomains.includes(domain);
      },
      { message: "Only office emails are allowed (no gmail, yahoo, etc.)." }
    ),
  partnerContactNumber: z.string().min(10, { message: "Phone number is required." }).min(10, { message: "The field is too short." }),
  messageDetail: z.string().min(1, { message: "Message is required" }),
  termsAccepted: z.boolean().refine((val: boolean) => val === true, { message: "You must accept the terms and conditions." }),
  reCaptcha: z.boolean().refine((val: boolean) => val === true, { message: "Please verify CAPTCHA" }),
});

type FormErrors = ZodFormattedError<
  {
    partnerName: string;
    partnerEmail: string;
    partnerContactNumber: string;
    messageDetail: string;
    termsAccepted: boolean;
    reCaptcha: boolean;
  },
  string
>;

interface PartnersSignUpFormSectionProps {
  heading: string;
}

const logos = [Oojas, AarushiConsulting, Zipform, Visnet];

export function PartnersSignUpFormSection({ heading }: PartnersSignUpFormSectionProps) {
  const [formData, setFormData] = useState({
    partnerName: "",
    partnerEmail: "",
    partnerContactNumber: "",
    messageDetail: "",
    termsAccepted: false,
    reCaptcha: false,
  });

  const [errors, setErrors] = useState<FormErrors | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false); // Loader state
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleCheckboxClick = () => {
    setFormData((prevData) => ({
      ...prevData,
      termsAccepted: !prevData.termsAccepted,
    }));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setErrors((prevErrors: any) => {
      if (prevErrors) {
        const newErrors = { ...prevErrors };
        delete newErrors.termsAccepted;
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
        const res = await fetch("/api/contactus", {
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

  const dynamicHeading = heading.split("|");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const recaptchaRef = useRef(null);
  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
    setFormData((prevData) => ({
      ...prevData,
      reCaptcha: !prevData.reCaptcha,
    }));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setErrors((prevErrors: any) => {
      if (prevErrors) {
        const newErrors = { ...prevErrors };
        delete newErrors.reCaptcha;
        return newErrors;
      }
      return prevErrors;
    });
  };

  return (
    <div className="xl:max-w-[100rem] xl:mx-auto px-[3%] xl:px-[104px] mx-auto flex flex-col lg:flex-row py-20 flex-1 justify-between items-center">
      <div className="w-full lg:w-1/2">
        <div>
          <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} />
        </div>
        <p className="text-base text-black">
          Become a part of the Infoveave Partner Network and collaborate with us to deliver transformative data solutions to your customers. By teaming up with
          Infoveave, you&apos;ll unlock new opportunities to help your clients streamline operations, harness real-time insights, and accelerate
          decision-making.
        </p>
        <p className="text-base text-black my-2">
          Together, we can empower businesses with the tools and technologies they need to thrive in a data-centric world, ensuring lasting value and growth for
          both your customers and your business.
        </p>
        <p className="text-base text-black">Partner with Infoveave today and drive real impact through the power of data.</p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 my-10 items-center">
          {logos.map((logo, index) => (
            <div key={index}>
              <Image src={logo} alt="client logo" width={100} height={100} />
            </div>
          ))}
        </div>
      </div>
      <div
        className="w-full sm:w-[480px] rounded-xl p-4 md:p-8 shadow-input bg-white border border-gray-200"
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
      >
        {formSubmitted ? (
          <div className="flex flex-col text-center justify-center items-center size-full min-h-[575px]">
            <Image src={Tick} width={100} height={100} alt="completed" className="transition-opacity duration-500 opacity-100" />
            <p className="text-base font-bold text-ivindigo-900 mt-14 transition-opacity duration-500 opacity-100">Thank you for reach out to us.</p>
            <p className="text-sm font-semibold text-gray-700 mt-8 transition-opacity duration-500 opacity-100">Our team will reach out to you soon.</p>
          </div>
        ) : (
          <>
            <h2 className="text-xl xl:text-2xl text-black font-semibold text-center">Signup as a partner</h2>
            <form className="my-2" onSubmit={handleSubmit}>
              <div className="mb-3">
                <div className="relative">
                  <input
                    type="text"
                    id="partnerName"
                    value={formData.partnerName}
                    onChange={handleInputChange}
                    className="block px-2.5 pb-2 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-ivindigo-900 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="partnerName"
                    className="absolute text-sm text-gray-500 duration-300 -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-ivindigo-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Your Name
                  </label>
                </div>
                {errors?.partnerName && <span className="text-red-500 text-[11px]">{errors.partnerName._errors}</span>}
              </div>
              <div className="mb-3">
                <div className="relative">
                  <input
                    type="email"
                    id="partnerEmail"
                    value={formData.partnerEmail}
                    onChange={handleInputChange}
                    className="block px-2.5 pb-2 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-ivindigo-700 focus:outline-none focus:ring-0 focus:border-ivindigo-700 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="partnerEmail"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-ivindigo-700 peer-focus:dark:text-ivindigo-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Your Email
                  </label>
                </div>
                {errors?.partnerEmail && <span className="text-red-500 text-[11px]">{errors.partnerEmail._errors}</span>}
              </div>
              <div className="mb-3">
                <div className="relative">
                  <input
                    type="number"
                    id="partnerContactNumber"
                    value={formData.partnerContactNumber}
                    onChange={handleInputChange}
                    className="block px-2.5 pb-2 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-ivindigo-700 focus:outline-none focus:ring-0 focus:border-ivindigo-700 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="partnerContactNumber"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-ivindigo-700 peer-focus:dark:text-ivindigo-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Contact Number
                  </label>
                </div>
                {errors?.partnerContactNumber && <span className="text-red-500 text-[11px]">{errors.partnerContactNumber._errors}</span>}
              </div>
              <div className="mb-3">
                <div className="relative">
                  <textarea
                    id="messageDetail"
                    value={formData.messageDetail}
                    onChange={handleInputChange}
                    className="block px-2.5 pb-2 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-ivindigo-700 focus:outline-none focus:ring-0 focus:border-ivindigo-700 peer"
                    placeholder=" "
                    rows={4}
                  />
                  <label
                    htmlFor="messageDetail"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-ivindigo-700 peer-focus:dark:text-ivindigo-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-5 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Your Message
                  </label>
                </div>
                {errors?.messageDetail && <span className="text-red-500 text-[11px]">{errors.messageDetail._errors}</span>}
              </div>
              <div className="flex mt-2 items-start justify-start">
                <input type="checkbox" id="terms" checked={formData.termsAccepted} onChange={handleCheckboxClick} className="mr-2 size-[28px]" />
                <p className="text-[12px] text-start mt-1">
                  * By checking this box, I confirm that I have read and understand Infoveave&apos;s{" "}
                  <a href="#" className="underline">
                    Privacy Policy{" "}
                  </a>
                  and{" "}
                  <a href="#" className="underline">
                    Terms of Service.{" "}
                  </a>
                </p>
              </div>
              {errors?.termsAccepted && <span className="text-red-500 text-[11px]">{errors.termsAccepted._errors}</span>}
              <div className="flex justify-center items-center mt-4">
                {/* <div className=" scale-y-105 scale-x-[128%] origin-top ml-1"> */}
                <div className="origin-top ml-1">
                  <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string} onChange={handleCaptchaChange} />
                </div>
              </div>
              {errors?.reCaptcha && <span className="text-red-500 text-[11px]">{errors.reCaptcha._errors}</span>}
              <div className="flex items-center justify-center mt-6 bg-gradient-to-br relative group/btn dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
                <FormPrimaryButton
                  text={loading ? "Sending request" : "Send request"}
                  paddingClassName={loading ? "px-[28%] md:px-[124px]" : "px-[34%] md:px-[150px]"}
                  arrowClassName="group-hover:-translate-x-[112px]"
                  loading={loading}
                />
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
