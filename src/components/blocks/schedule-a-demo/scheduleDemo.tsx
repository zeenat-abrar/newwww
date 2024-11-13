"use client";
import Image from "next/image";
import React, { useState } from "react";
import { z, ZodFormattedError } from "zod";
import Tick from "@/assets/tick.svg";
import { forbiddenEmails } from "@/components/forms/forbidden-emails";
import FormPrimaryButton from "@/components/ui/buttons/form-button";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  organization: z.string().min(1, { message: "Organization is required." }),
  workEmail: z
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
  workPhone: z.string().min(1, { message: "Phone number is required." }).min(10, { message: "The field is too short." }),
  termsAccepted: z.boolean().refine((val: boolean) => val === true, { message: "You must accept the terms and conditions." }),
});

// Update the errors state type to ZodFormattedError
type FormErrors = ZodFormattedError<
  {
    name: string;
    organization: string;
    workEmail: string;
    workPhone: string;
    termsAccepted: boolean;
  },
  string
>;

export function ScheduleDemo() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    workEmail: "",
    workPhone: "",
    termsAccepted: false,
  });

  // Use the correct type for the errors state
  const [errors, setErrors] = useState<FormErrors | null>(null);

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
        const res = await fetch("/api/bookademo", {
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

  return (
    <div
      className="w-full lg:ml-[22px] lg:mr-2 md:mx-0 md:w-[480px] rounded-xl p-4 md:p-8 shadow-input bg-white"
      style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
    >
      {formSubmitted ? (
        <div className="flex flex-col text-center justify-center items-center size-full min-h-[418px]">
          <Image src={Tick} width={100} height={100} alt="completed" className="transition-opacity duration-500 opacity-100" />
          <p className="text-base font-bold text-ivindigo-900 mt-14 transition-opacity duration-500 opacity-100">Thank you for booking a demo with us.</p>
          <p className="text-sm font-semibold text-gray-700 mt-8 transition-opacity duration-500 opacity-100">Our team will reach out to you soon.</p>
        </div>
      ) : (
        <>
          <h2 className="text-xl text-center font-semibold text-neutral-800 mb-4">Schedule a demo</h2>
          <form className="my-4" onSubmit={handleSubmit}>
            <div className="mb-3">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="block px-2.5 pb-2 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-ivindigo-900 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-ivindigo-700 peer-focus:dark:text-ivindigo-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Name
                </label>
              </div>
              {errors?.name && <span className="text-red-500 text-[11px]">{errors.name._errors}</span>}
            </div>
            <div className="mb-3">
              <div className="relative">
                <input
                  type="text"
                  id="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="block px-2.5 pb-2 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-ivindigo-900 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="organization"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-ivindigo-700 peer-focus:dark:text-ivindigo-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Organization
                </label>
              </div>
              {errors?.organization && <span className="text-red-500 text-[11px]">{errors.organization._errors}</span>}
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
                  type="number"
                  id="workPhone"
                  value={formData.workPhone}
                  onChange={handleInputChange}
                  className="block px-2.5 pb-2 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-ivindigo-900 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="workPhone"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-ivindigo-700 peer-focus:dark:text-ivindigo-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Work Phone
                </label>
              </div>
              {errors?.workPhone && <span className="text-red-500 text-[11px]">{errors.workPhone._errors}</span>}
            </div>
            <div className="flex mt-2 items-start justify-start">
              <input type="checkbox" id="terms" checked={formData.termsAccepted} onChange={handleCheckboxClick} className="mr-2 size-[28px]" />
              <p className="text-[12px] text-start mt-1">
                * By submitting this form, you agree to our{" "}
                <a href="#" className="underline">
                  Terms{" "}
                </a>
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy.{" "}
                </a>
                and agree to receive occasional emails.
              </p>
            </div>
            {errors?.termsAccepted && <span className="text-red-500 text-[11px]">{errors.termsAccepted._errors}</span>}
            <div className="flex items-center justify-center mt-8">
              <FormPrimaryButton
                text="Submit Request"
                paddingClassName={loading ? "px-[30%] md:px-[135px] lg:px-[122px] xl:px-[136px]" : "px-[34%] md:px-[148px] lg:px-[136px] xl:px-[143px]"}
                arrowClassName="group-hover:-translate-x-[90px] md:group-hover:-translate-x-[55px] lg:group-hover:-translate-x-[102px] xl:group-hover:-translate-x-[108px]"
                loading={loading}
              />
            </div>
          </form>
        </>
      )}
    </div>
  );
}
