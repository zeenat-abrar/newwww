"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { z, ZodFormattedError } from "zod";
import Tick from "@/assets/tick.svg";
import { forbiddenEmails } from "@/components/forms/forbidden-emails";
import FormPrimaryButton from "@/components/ui/buttons/form-button";

const formSchema = z.object({
  yourName: z.string().min(1, { message: "Name is required." }),
  organizationName: z.string().min(1, { message: "Organization name is required." }),
  workEmail: z
    .string()
    .min(1, { message: "Work email is required." })
    .refine(
      (email: string) => {
        const forbiddenDomains = forbiddenEmails;
        const domain = email.split("@")[1];
        return !forbiddenDomains.includes(domain);
      },
      { message: "Only office emails are allowed." }
    ),
  accountName: z
    .string()
    .min(1, { message: "Account name is required." })
    .refine((val: string) => val === val.toLowerCase(), {
      message: "Account name must be completely lowercased.",
    }),
  termsAccepted: z.boolean().refine((val: boolean) => val === true, { message: "You must accept the terms and conditions before sending your message." }),
  reCaptcha: z.boolean().refine((val: boolean) => val === true, { message: "Please verify CAPTCHA" }),
});

// Update the errors state type to ZodFormattedError
type FormErrors = ZodFormattedError<
  {
    yourName: string;
    organizationName: string;
    workEmail: string;
    accountName: string;
    termsAccepted: boolean;
    reCaptcha: boolean;
  },
  string
>;

export function SignUpForFreeTrial() {
  const [formData, setFormData] = useState({
    yourName: "",
    organizationName: "",
    workEmail: "",
    accountName: "",
    termsAccepted: false,
    reCaptcha: true,
  });

  // Use the correct type for the errors state
  const [errors, setErrors] = useState<FormErrors | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const recaptchaRef = useRef(null);

  const [loading, setLoading] = useState<boolean>(false); // Loader state
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
        setLoading(true);
        const res = await fetch("/api/signup", {
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

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);

    //setFormCaptcha
    setFormData((prevData) => ({
      ...prevData,
      reCaptcha: true,
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
    <div
      className="w-full md:mx-0 md:w-[480px] rounded-xl p-4 md:px-8 md:py-6 shadow-input bg-white"
      style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
    >
      {formSubmitted ? (
        <div className="flex flex-col text-center justify-center items-center size-full min-h-[570px]">
          <Image src={Tick} width={100} height={100} alt="completed" className="transition-opacity duration-500 opacity-100" />
          <p className="text-base font-bold text-ivindigo-900 mt-14 transition-opacity duration-500 opacity-100">
            Congratulations, your account has been successfully created.
          </p>
          <p className="text-sm font-semibold text-gray-700 mt-8 transition-opacity duration-500 opacity-100">
            Find your respective credentials on your workspace email address.
          </p>
        </div>
      ) : (
        <>
          <h2 className="text-xl text-center font-semibold text-neutral-800 mb-4">Sign up for a 30-day free trial</h2>
          <form className="my-4" onSubmit={handleSubmit}>
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
                  className="absolute text-sm text-gray-500 duration-300 -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-ivindigo-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Your Name
                </label>
              </div>
              {errors?.yourName && <span className="text-red-500 text-[11px]">{errors.yourName._errors}</span>}
            </div>
            <div className="mb-3">
              <div className="relative">
                <input
                  type="text"
                  id="organizationName"
                  value={formData.organizationName}
                  onChange={handleInputChange}
                  className="block px-2.5 pb-2 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-ivindigo-900 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="organizationName"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-ivindigo-700 peer-focus:dark:text-ivindigo-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Organization name
                </label>
              </div>
              {errors?.organizationName && <span className="text-red-500 text-[11px]">{errors.organizationName._errors}</span>}
            </div>
            <div className="mb-3">
              <div className="relative">
                <input
                  type="email"
                  id="workEmail"
                  value={formData.workEmail}
                  onChange={handleInputChange}
                  className="block px-2.5 pb-2 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-ivindigo-900 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="workEmail"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-ivindigo-700 peer-focus:dark:text-ivindigo-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Work Email
                </label>
              </div>
              {errors?.workEmail && <span className="text-red-500 text-[11px]">{errors.workEmail._errors}</span>}
            </div>
            <div className="mb-3">
              <div className="relative">
                <input
                  type="text"
                  id="accountName"
                  value={formData.accountName}
                  onChange={handleInputChange}
                  className="block px-2.5 pb-2 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-ivindigo-900 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="accountName"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-ivindigo-700 peer-focus:dark:text-ivindigo-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Account name
                </label>
              </div>
              {errors?.accountName && <span className="text-red-500 text-[11px]">{errors.accountName._errors}</span>}
            </div>
            <p className="text-[14px] text-gray-600">Your URL will be accountname.infoveave.app</p>

            <div className="flex items-start justify-start">
              <input type="checkbox" id="terms" checked={formData.termsAccepted} onChange={handleCheckboxClick} className="mr-2 size-[45px]" />
              <p className="text-[12px] text-start mt-3">
                * By clicking this box, you agree to our{" "}
                <a href="#" className="underline">
                  Terms{" "}
                </a>
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy.{" "}
                </a>
                You may receive product & marketing communication. We do not spam or share your data.
              </p>
            </div>
            {errors?.termsAccepted && <span className="text-red-500 text-[11px]">{errors.termsAccepted._errors}</span>}
            <div className="flex justify-center items-center mt-3">
              <div className="origin-top ml-px">
                <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string} onChange={handleCaptchaChange} />
              </div>
            </div>
            {errors?.reCaptcha && <span className="text-red-500 text-[11px]">{errors.reCaptcha._errors}</span>}
            <div className="flex items-center justify-center mt-6">
              <FormPrimaryButton
                text={loading ? "Signing up" : "Get free trial"}
                paddingClassName={loading ? "px-[35%] md:px-[155.5px]" : "px-[36%] md:px-[160px]"}
                arrowClassName="group-hover:-translate-x-[122px]"
                loading={loading}
              />
            </div>
          </form>
        </>
      )}
    </div>
  );
}
