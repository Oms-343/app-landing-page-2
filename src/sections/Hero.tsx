import Image from "next/image";
import Header from "@/components/Header";

import heroImage from "@/public/hero-image.png";
import BlueButton from "@/public/blue-button.svg";
import GoogleIcon from "@/public/Google.svg";
import SlackIcon from "@/public/Slack.svg";
import TrustPilotIcon from "@/public/Trustpilot.svg";
import CNNIcon from "@/public/CNN.svg";
import ClutchIcon from "@/public/Clutch.svg";

export default function Hero() {
  return (
    <>
      <Header />
      <section className="overflow-x-clip py-4 desktop:py-11">
        <div className="container">
          <div className="d mx-auto max-w-[840px]">
            <h1 className="text-center text-3xl font-medium text-[#172026] desktop:text-6xl desktop:font-semibold">
              Start monitoring your website like a pro
            </h1>
            <p className="pt-6 text-center text-[#36485C] desktop:text-lg">
              Get a birds eye view with our customizable dashboard. Stay on top
              of things! Revamp your work process with our game-changing
              feature. Boost productivity and efficiency!
            </p>
          </div>
          <div className="mb-6 mt-8 flex items-center justify-center gap-6">
            <button className="rounded-[4px] bg-[#4328EB] px-8 py-4 text-[18px] font-medium text-white">
              Try for free
            </button>
            <button className="inline-flex items-center gap-3 font-medium text-[#4328EB]">
              <span> View Pricing</span>
              <BlueButton />
            </button>
          </div>
        </div>
        <div className="bg-gradient-to-t from-amber-500 from-10% via-pink-500 via-30% to-white to-90% desktop:to-60%">
          <div className="">
            <Image
              src={heroImage}
              alt="hero-image"
              className="-ml-4 desktop:-ml-0"
            />
            <div className="">
              <p className="mb-5 text-center text-white desktop:-mt-24">
                Trusted by these companies
              </p>
              <ul className="ml-3 flex h-auto w-[350px] flex-wrap justify-center gap-x-8 gap-y-1 desktop:w-full">
                <li>
                  <GoogleIcon />
                </li>
                <li>
                  <SlackIcon />
                </li>
                <li>
                  <TrustPilotIcon />
                </li>
                <li>
                  <CNNIcon />
                </li>
                <li>
                  <ClutchIcon />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
