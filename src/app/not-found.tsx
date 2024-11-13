import Image from "next/image";
import PageNotFoundImage from "@/assets/page-not-found/page_not_found.svg";
import PrimaryButton from "@/components/ui/buttons/primary-button";
import PrimaryWhiteButton from "@/components/ui/buttons/primary-white-button";
import { Footer } from "@/components/ui/footer";

const NotFound = () => {
  return (
    <section>
      <div className="w-full h-[90vh] flex flex-col justify-center items-center px-[3%]">
        <Image src={PageNotFoundImage} width={250} height={250} alt="infoveave-page-not-found" className="mt-[-100px]" />
        <h2 className="text-center font-semibold text-2xl mt-5">PAGE NOT FOUND</h2>
        <p className="text-center text-mobileParagraph md:text-base mt-1">Sorry, Not able to find the page.</p>
        <div className="flex mt-8 gap-5">
          <PrimaryButton text="Home Page" href="/" />
          <PrimaryWhiteButton text="contact us" href="about-us#contactus" />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default NotFound;
