import Image from "next/image";
import BackgroundGradient from "@/assets/bg-gradient-trans.png";
import Flower from "@/assets/privacypolicy/infoveaveFlower.svg";
import SingleLineList from "@/components/blocks/blogs/single-list";
import { Footer } from "@/components/ui/footer";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";
import { generatemetadata } from "@/metadata/utils/generate";
export const dynamic = "force-dynamic";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revalidate = 10;
export const runtime = "edge";
export async function generateMetadata() {
  return generatemetadata("terms-and-conditions");
}

const content = [
  {
    id: 1,
    heading: "Terms and conditions",
    list: [
      "These Terms and Conditions (“Terms”, “Terms and Conditions”) govern your relationship with www.infoveave.com (“Website”), our Data Automation and Decision Intelligence platform Infoveave (“Product”), our service offerings on our Product (“Services”) and our company Noesys Software Pvt Ltd (“us”, “we”, or “our”).",
      "Please read these Terms and Conditions carefully before using our website, our Product and  and availing our Services.",
      "Your access to and use of the Product and availing of Services is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Product or avail the Service.",
      "By accessing the Product or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Product or avail the Service.",
    ],
  },
  {
    id: 2,
    heading: "Purchases",
    list: [
      "If you wish to purchase any product or service made available through the Product or Service (“Purchase”), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, alternate means of payments other than credit card, your tax information and your shipping information.",
      "You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.",
      "By submitting such information, you grant us the right to provide the information to third parties for purposes of facilitating the completion of Purchases.",
      "We reserve the right to refuse or cancel your order at any time for certain reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.",
      "We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected.",
    ],
  },
  {
    id: 3,
    heading: "Availability, Errors and Inaccuracies",
    list: [
      "We are constantly updating our offerings on the Product and Service. The Product or Service available may be mispriced, described inaccurately, or unavailable, and we may experience delays in updating information on the Product or Service and in our advertising on other web sites.",
      "We cannot and do not guarantee the accuracy or completeness of any information, including prices, product images, specifications, availability, and services. We reserve the right to change or update information and to correct errors, inaccuracies, or omissions at any time without prior notice.",
    ],
  },
  {
    id: 4,
    heading: "Accounts",
    list: [
      "When you create an account with us on our Product, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Product.",
      "You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.",
      "You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.",
      "You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trade mark that is subject to any rights of another person or entity other than you without appropriate authorization, or a name that is otherwise offensive, vulgar or obscene.",
    ],
  },
  {
    id: 5,
    heading: "Intellectual Property",
    list: [
      "The Product and its original content, features and functionality are and will remain the exclusive property of Noesys Software Pvt. Ltd and its licensors. The Product is protected by copyright, trademark, and other laws of both the India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Noesys Software Pvt. Ltd.",
    ],
  },
  {
    id: 6,
    heading: "Links To Other Web Sites",
    list: [
      "Our Website, Service may contain links to third-party web sites or services that are not owned or controlled by Noesys Software Pvt. Ltd.",
      "Noesys Software Pvt. Ltd has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Noesys Software Pvt. Ltd shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.",
      "We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.",
    ],
  },
  {
    id: 7,
    heading: "Termination",
    list: [
      "We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.",
      "Upon termination, your right to use the Product and Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.",
    ],
  },
  {
    id: 8,
    heading: "Limitation Of Liability",
    list: [
      "In no event shall Noesys Software Pvt Ltd, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Product or avail the Service; (ii) any conduct or content of any third party on the Product or through the Service; (iii) any content obtained from the Product or through the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.",
    ],
  },
  {
    id: 9,
    heading: "Disclaimer",
    list: [
      "Your use of the Product or Service is at your sole risk. The Product and Service is provided on an “AS IS” and “AS AVAILABLE” basis. The Product and Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.",
      "Noesys Software Pvt Ltd its subsidiaries, affiliates, and its licensors do not warrant that a) the Product or Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Product or Service is free of viruses or other harmful components; or d) the results of using the PRoduct or Service will meet your requirements.",
    ],
  },
  {
    id: 10,
    heading: "Governing Law",
    list: [
      "These Terms shall be governed and construed in accordance with the laws of Karnataka, India, without regard to its conflict of law provisions.",
      "Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.",
    ],
  },
  {
    id: 11,
    heading: "Changes",
    list: [
      "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
      "By continuing to access or use our Product or avail our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.",
    ],
  },
  {
    id: 12,
    heading: "Contact Us",
    list: ["If you have any questions about these Terms, please contact us or please email to info@noesyssoftware.com."],
  },
];

export default function TermsAndConditions() {
  return (
    <section
      className="pt-24"
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex justify-between ">
        <div>
          <div className="px-[104px]">
            <MainHeadingWithSpan firstText="Terms and Conditions – Infoveave" specialText="" lastText="" />
          </div>
          <nav aria-label="breadcrumb" className="w-full px-[104px]">
            <ol className="flex flex-wrap items-center w-full py-2 rounded-md">
              <li className="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-gray-900 hover:text-ivindigo-900">
                <a href="#" className="opacity-60">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                </a>
                <span className="mx-2 font-sans text-sm antialiased font-normal leading-normal pointer-events-none select-none text-gray-400">/</span>
              </li>

              <li className="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-ivviolet-500 hover:text-ivindigo-900">
                <a href="#">Terms and Conditions – Infoveave</a>
              </li>
            </ol>
          </nav>
        </div>
        <div className="flex justify-end items-center px-[104px]">
          <Image src={Flower} alt="logo" width={150} height={150} />
        </div>
      </div>
      <div className="my-16 grid px-[104px]">
        <div className="col-span-3 ">
          {content.map((ele) => (
            <div key={ele.id} className="mb-10">
              {ele.heading && <h2 className="text-xl font-bold my-4">{ele.heading}</h2>}
              {ele.list && (
                <ol className="list-disc text-base space-y-5 pl-5 my-4">
                  {ele.list.map((bulletPoint, index) => (
                    <SingleLineList text={bulletPoint} key={index} />
                  ))}
                </ol>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
}
