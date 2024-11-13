import Image from "next/image";
import Link from "next/link";
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
  return generatemetadata("privacy-policy");
}

const content = [
  {
    id: 1,
    heading: "Privacy Policy",
    list: [
      "This Privacy Notice describes the privacy practices of Noesys Software for Personal Data collected through our official websites (www.noesyssoftware.com &  www.infoveave.com) and other interactions with us. This Privacy Statement governs the processing of Personal Data collected by Noesys Software Pvt Ltd.",
    ],
  },
  {
    id: 2,
    heading: "Definitions",
    paragraph: "For the purpose of this Privacy Policy",
    list: [
      "Account| means a unique account created for You to access our Product (Infoveave).",
      "Company| (referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers to Noesys Software Pvt. Ltd., No 564, 1st Floor, “Srigandha Arcade”, 9th Cross, JP Nagar 3rd Phase, Bengaluru 560078.",
      "Device| means any device that can access the Service such as a computer, a cellphone or a digital tablet.",
      "Cookies| are small files that are placed on Your computer, mobile Device or any other Device by a website, containing the details of Your browsing history on that website among its many uses.",
      "Personal Data| is any information that relates to an identified or identifiable individual.",
      "Product| refers to Infoveave (www.infoveave.com) our Data Automation an Decision Intelligence platform and its components.",
      "Service Provider| means anyone who processes the data on behalf of the Company. It can refer to third-party companies or individuals employed by the company to facilitate the Product/service.",
      "Usage Data| refers to data collected automatically, either generated using the Service or from the Service infrastructure itself (for example, the duration of a page visit).",
      "Website| refers to Noesys Software Pvt. Ltd., and Infoveave accessible through Websites www.noesyssoftware.com &  www.infoveave.com respectively.",
      "You| mean the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.",
    ],
  },
  {
    id: 3,
    heading: "Personal Data collection",
    paragraph: "We collect data in the following situations",
    list: [
      "Interaction with Websites:| When you interact with our websites, we may collect information about your Device and usage through Cookies, web beacons, or similar technologies, which may qualify as Personal Data.  When you visit or log in to our website, cookies and similar technologies may be used by our online data partners or vendors to associate these activities with other personal information they or others have about you, including by association with your email or home address. We (or service providers on our behalf) may then send communications and marketing to these email or home addresses. You may opt out of receiving this advertising by writing to us. ",
      "Expressing interest or requesting information:| If you express interest in our services, request customer support, Company’s “Contact Us” feature, or register to receive communications, we may collect contact information such as your name, job title, company name, address, phone number, email address, username, and password, as well as any other information you voluntarily choose to share.",
      "Purchases and usage of our products and services:| When you purchase or use our Product and services, we may collect contact information and financial/billing information, such as billing name and address, Tax number (GST, TAN, PAN). We may also collect information about your Device and usage through log files and other technologies, some of which may qualify as Personal Data, including IP address, location, cookie-related information), Usage Data (e.g., page visits, feature usage), and language preferences.",
      "Event attendees:| If you attend one of our events, we may collect attendee badge information, including your name, title, company name, address, country, phone number, and email address, along with images and videos taken during the event.",
      "Biometric information (for specified events):| With your explicit consent, and only for specified events, we may collect biometric information such as an image of your facial features for identification purposes.",
      "Health information (during pandemic situations):| During any pandemic situations, we may collect health-related information, including your temperature, related symptoms, vaccination status, testing results, and recent travel history, for the purpose of ensuring safety during events and office visits. This data will only be collected with your explicit consent and in compliance with relevant laws.",
      "Communicating via phone calls:| If you communicate with us via phone calls, we may collect information such as your name, voice, and any other Personal Data voluntarily shared during the call.",
      "Visiting our offices:| When you visit our offices, we may collect information such as your name, email address, phone number, company name, time and date of arrival, mobile devices being carried, images, or videos for security and safety purposes. During any pandemic situations, we may also collect health-related information for safety and compliance purposes, as described above.",
      "Voluntary submission of information:| If you voluntarily submit certain information to us, such as filling out a survey, responding to a questionnaire, or participating in other forms of research, we may collect the information you provide, including Personal Data and special categories of Personal Data, to the extent you voluntarily choose to provide it.",
      "Suppliers or service providers to Company:| If you are a supplier or service provider to the Company or work for one, we may collect contact information and payment/billing details.",
      "Third parties:| We may also receive Personal Data about you from third parties, such as colleagues at your organization, public sources (e.g., LinkedIn), vendors, and partners in connection with our services. ",
    ],
  },
  {
    id: 4,
    heading: "Why do we collect such data",
    paragraph: "We collect such data for the purpose of",
    list: [
      "Billing:| Processing Personal Data in connection with contracts, such as managing payments, delivering products/services, and renewing agreements.",
      "Content:| We may collect information for operating our sites and providing content, offerings, and functionality to enhance user experience.",
      "Improving our sites and services:| We may collect information for improving our sites and services by analyzing user interactions and preferences.",
      "Managing:| We may contact requests and providing support or responses to inquiries.",
      "Recording:| We may record calls for training, quality assurance, and administration purposes (with appropriate consent or option to object, if required).",
      "Facilitating:| For marketing activities and contacting you regarding product upgrades and special offers (with legitimate interest or consent, as applicable).",
      "Improving our product:| We may combine Personal Data to improve our Product for tailored experiences for users.",
      "By law:| We collect and process information to comply with applicable laws and regulations.",
      "Communication:| We may contact our Visitors and Users with general or personalized service-related notices and promotional messages.",
      "Customer support:| We may use the Personal Data to offer ongoing customer assistance and technical support to our users.",
    ],
  },
  {
    id: 5,
    heading: "Sharing of personal Data",
    paragraph:
      "To operate our business, Personal Data may be transferred to destinations that may not have the same level of privacy protection as your country. In such cases, we will implement appropriate safeguards, such as standard contractual clauses, to protect your Personal Data. Noesys Software may share Personal Data for various purposes, including:",
    list: [
      "With authorized vendors, contractors, and advisors who assist us in operating our business and delivering products/services.",
      "With event participants, organizers, or sponsors for event facilitation and marketing purposes (with consent where required).",
      "With third-party networks/websites for advertising purposes.",
      "With your organization or colleagues for certain data related to product usage or support.",
      "With Noesys Software partners for follow-up on product interests or service provision.",
      "In compliance with legal requirements or to protect Noesys Software’s rights, property, or safety.",
    ],
    paragraph2: "We take appropriate measures to safeguard Personal Data when sharing it with third parties.",
  },
  {
    id: 6,
    heading: "Cookies and similar Technologies",
    list: [
      "When you visit Company Sites, Cookies and similar technologies may be placed on your Device to enhance your experience. These technologies help us with site functionality, customization, performance analysis, and advertising. You can generally disable Cookies through your browser settings, but it may impact your experience on our Sites.",
    ],
  },
  {
    id: 7,
    heading: "Protection and Retention of Personal Data",
    list: [
      "Company takes measures to protect Personal Data from unauthorized access, disclosure, alteration, or destruction. We ensures the security of your Personal Data by hosting our Company on secure servers that comply with Information Security standards like ISO 27001 and SSAE 18 SOC2. We retain Personal Data for as long as necessary for the purposes outlined in this Notice, or as required by applicable law. ",
      "The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.",
    ],
  },
  {
    id: 8,
    heading: "International Transfer",
    list: [
      "Your information, including Personal Information, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.",
      "If you are located outside India and choose to provide information to us, please note that we transfer the information, including Personal Information, to India and process it there.",
      "Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.",
    ],
  },
  {
    id: 9,
    heading: "Links to other sites",
    list: [
      "Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.",
      "We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites or services.",
    ],
  },
  {
    id: 10,
    heading: "Your rights to Personal Data",
    paragraph:
      "You may have certain rights regarding your Personal Data under applicable privacy laws, such as accessing, correcting, or deleting your data. We encourage you to contact us with privacy inquiries or complaints.",
  },
  {
    id: 11,
    heading: "How do we communicate",
    paragraph:
      "We may contact you through various means, including email, telephone, text messages, and postal mail. We may contact you for various purposes, including:",
    list: [
      "Account notifications:| We may notify you regarding your Account and its status.",
      "Troubleshooting and dispute resolution:| In case of any issues or disputes related to your Account, we may communicate to resolve them.",
      "Fees and payments:| We may contact you to send invoices, collect fees or payments owed.",
      "Surveys and questionnaires:| To gather your opinions and feedback, we may conduct surveys or questionnaires.",
      "Company updates:| We may send you updates about our Company and its offerings.",
      "Enforcement:| Communication may be necessary to enforce our User Agreement, comply with national laws, or fulfil any agreements we have with you.",
    ],
  },
  {
    id: 12,
    heading: "Children’s Privacy",
    list: [
      "Our Service does not address anyone under the age of 13 (“Children”).",
      "We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your Children has provided us with Personal Information, please contact us. If we become aware that we have collected Personal Information from a children under age 13 without verification of parental consent, we take steps to remove that information from our servers.",
    ],
  },
  {
    id: 13,
    heading: "Changes To This Privacy Policy",
    list: [
      "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
      "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
    ],
  },
  {
    id: 14,
    heading: "Contact Us",
    list: [
      "If you have any questions about this Privacy Policy, please contact us or please email to info@noesyssoftware.com. We are committed to resolving any privacy concerns in a fair and timely manner.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <section
      className="pt-16"
      style={{
        backgroundImage: `url(${BackgroundGradient.src})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex justify-between">
        <div>
          <div className="px-[104px]">
            <MainHeadingWithSpan firstText="Privacy Policy - Infoveave" specialText="" lastText="" />
          </div>
          <nav aria-label="breadcrumb" className="w-full px-[104px]">
            <ol className="flex flex-wrap items-center w-full rounded-md">
              <li className="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-gray-900 hover:text-ivindigo-900">
                <Link href="/" className="opacity-60">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                </Link>
                <span className="mx-2 font-sans text-sm antialiased font-normal leading-normal pointer-events-none select-none text-gray-400">/</span>
              </li>

              <li className="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-ivviolet-500 hover:text-ivindigo-900">
                <Link href="#">Privacy Policy - Infoveave</Link>
              </li>
            </ol>
          </nav>
        </div>
        <div className="flex justify-end items-center px-[104px]">
          <Image src={Flower} alt="logo" width={150} height={150} />
        </div>
      </div>

      <div className="mt-16 mb-24 grid px-[104px]">
        <div className="col-span-3 ">
          {content.map((ele) => (
            <div key={ele.id} className="mb-10">
              {ele.heading && <h2 className="text-xl font-bold my-4">{ele.heading}</h2>}
              {ele.paragraph && <p className="text-base">{ele.paragraph}</p>}
              {ele.list && (
                <ol className="list-disc text-base space-y-5 pl-5 my-4">
                  {ele.list.map((bulletPoint, index) => (
                    <SingleLineList text={bulletPoint} key={index} />
                  ))}
                </ol>
              )}
              {ele.paragraph2 && <p className="text-base">{ele.paragraph2}</p>}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
}
