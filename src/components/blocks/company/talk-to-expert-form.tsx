"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { z, ZodFormattedError } from "zod";
import Tick from "@/assets/tick.svg";
import { forbiddenEmails } from "@/components/forms/forbidden-emails";
import FormPrimaryButton from "@/components/ui/buttons/form-button";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";

const formSchema = z.object({
  yourName: z.string().min(1, { message: "Name is required." }),
  yourEmail: z
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
  contactNumber: z.string().min(10, { message: "Phone number is required." }).min(10, { message: "The field is too short." }),
  yourMessage: z.string().min(1, { message: "Message is required" }),
  termsAccepted: z.boolean().refine((val: boolean) => val === true, { message: "You must accept the terms and conditions." }),
  reCaptcha: z.boolean().refine((val: boolean) => val === true, { message: "Please verify CAPTCHA" }),
});

type FormErrors = ZodFormattedError<
  {
    yourName: string;
    yourEmail: string;
    contactNumber: string;
    yourMessage: string;
    termsAccepted: boolean;
    reCaptcha: boolean;
  },
  string
>;

interface Signup {
  heading: string;
}

export function TalkToOurExpertForm({ heading }: Signup) {
  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    contactNumber: "",
    yourMessage: "",
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
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <div className="flex justify-center md:justify-start">
          <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} />
        </div>
        <p className="text-base text-black">
          Need help with addressing your data and have enquiries regarding our product, services, or costs? We’d be happy to assist. Infoveave® simplifies
          data, provide valuable insights & drive growth. Simply fill out the form and we’ll get in touch with you to arrange a product demonstration so you can
          see how Infoveave simplifies your business data complexity. Schedule a demonstration to see the benefits. Our dedicated support team is always
          available for existing customers. Try Infoveave today and experience the difference it can make for your business.
        </p>
        <p className="text-base text-black py-5">
          {" "}
          <span className="font-bold">Already a customer and looking for support?</span> Send your questions to{" "}
          <Link href="#" className="text-ivindigo-700">
            support@infoveave.com
          </Link>
        </p>
        {/* <p className="text-base text-black">
          Looking out for career opportunity? Write to us{" "}
          <Link href="#" className="text-ivindigo-700">
            {" "}
            hr@infoveave.com
          </Link>
        </p> */}
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
            <h2 className="text-xl xl:text-2xl text-black font-semibold text-center">Talk With Our Expert</h2>
            <form className="my-2" onSubmit={handleSubmit}>
              <div className="mb-3">
                <div className="relative">
                  <input
                    type="text"
                    id="yourName"
                    value={formData.yourName}
                    onChange={handleInputChange}
                    className="block px-2.5 pb-2 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-ivindigo-900 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="yourName"
                    className="absolute text-sm text-gray-500 duration-300 -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-ivindigo-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Your Name
                  </label>
                </div>
                {errors?.yourName && <span className="text-red-500 text-[11px]">{errors.yourName._errors}</span>}
              </div>
              <div className="mb-3">
                <div className="relative">
                  <input
                    type="email"
                    id="yourEmail"
                    value={formData.yourEmail}
                    onChange={handleInputChange}
                    className="block px-2.5 pb-2 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-ivindigo-700 focus:outline-none focus:ring-0 focus:border-ivindigo-700 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="yourEmail"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-ivindigo-700 peer-focus:dark:text-ivindigo-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Your Email
                  </label>
                </div>
                {errors?.yourEmail && <span className="text-red-500 text-[11px]">{errors.yourEmail._errors}</span>}
              </div>
              <div className="mb-3">
                <div className="relative">
                  <input
                    type="number"
                    id="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    className="block px-2.5 pb-2 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-ivindigo-700 focus:outline-none focus:ring-0 focus:border-ivindigo-700 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="contactNumber"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-ivindigo-700 peer-focus:dark:text-ivindigo-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Contact Number
                  </label>
                </div>
                {errors?.contactNumber && <span className="text-red-500 text-[11px]">{errors.contactNumber._errors}</span>}
              </div>
              <div className="mb-3">
                <div className="relative">
                  <textarea
                    id="yourMessage"
                    value={formData.yourMessage}
                    onChange={handleInputChange}
                    className="block px-2.5 pb-2 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-ivindigo-700 focus:outline-none focus:ring-0 focus:border-ivindigo-700 peer"
                    placeholder=" "
                    rows={4}
                  />
                  <label
                    htmlFor="yourMessage"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-ivindigo-700 peer-focus:dark:text-ivindigo-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-5 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Your Message
                  </label>
                </div>
                {errors?.yourMessage && <span className="text-red-500 text-[11px]">{errors.yourMessage._errors}</span>}
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
              <div className="flex items-center justify-center mt-6">
                <FormPrimaryButton
                  text={loading ? "Sending message" : "Send message"}
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
