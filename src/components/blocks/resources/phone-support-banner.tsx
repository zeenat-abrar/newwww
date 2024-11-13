"use client";
import InfoveaveShapeGradient from "@/assets/infoveave-shape-gradient.png";
import { Icon } from "@/components/ui/icon";

export function PhoneSupportBanner() {
  return (
    <div
      className="bg-ivindigo-500 dark:bg-ivindigo-500 shadow-lg flex justify-center items-center pt-20 pb-40"
      style={{
        backgroundImage: `url(${InfoveaveShapeGradient.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-[70%] flex justify-start">
        <div>
          <p className="text-white text-base text-center">
            If you’re unable to find the information you’re looking for in our support center, please don’t hesitate to contact us. Our team is here to help
            you. You can reach us by email, phone, or live chat. We’re dedicated to helping you get the most out of Infoveave®, and we’re committed to
            providing you with the best possible support experience.
          </p>
          <div className="flex justify-evenly items-center mt-16">
            <div>
              <div className="flex justify-center items-center">
                <Icon icon={["fal", "message-pen"]} size="2xl" color="white" className="mb-4" />
              </div>
              <h1 className="text-white text-center text-base font-semibold mb-2">Chat with us</h1>
              <h3 className="text-white text-center">click on the chat icon</h3>
            </div>
            <div>
              <div className="flex justify-center items-center">
                <Icon icon={["fal", "phone"]} size="2xl" color="white" className="mb-4" />
              </div>
              <h1 className="text-white text-center text-base font-semibold mb-2">Phone support</h1>
              <h3 className="text-white text-center">+91-8035010646, +91-8035010648</h3>
            </div>
            <div>
              <div className="flex justify-center items-center">
                <Icon icon={["fal", "envelope"]} size="2xl" color="white" className="mb-4" />
              </div>
              <h1 className="text-white text-center text-base font-semibold mb-2">Email us</h1>
              <h3 className="text-white text-center">support@infoveave.com</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
