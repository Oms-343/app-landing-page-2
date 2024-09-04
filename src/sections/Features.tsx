import Image from "next/image";
import Feature1 from "@/public/Feature1.png";
import Feature2 from "@/public/Feature2.png";
import Feature3 from "@/public/Feature3.png";
import CheckIcon from "@/public/check.svg";
import BlueButton from "@/public/blue-button.svg";
import GreenButton from "@/public/green-button.svg";
import PinkButton from "@/public/pink-button.svg";

export default function Features() {
  return (
    <div className="container flex flex-col gap-y-[56px] py-[56px] desktop:gap-y-[80px] desktop:py-[120px]">
      <div className="flex flex-col gap-x-6 desktop:-ml-12 desktop:flex-row-reverse">
        <Image
          src={Feature1}
          alt="Feature 1 image"
          className="hidden w-1/2 desktop:block"
        />
        <div className="desktop:max-w-[620px] desktop:p-12">
          <h3 className="font-medium text-[#0085FF] desktop:text-[18px]">
            Sales Monitoring
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] desktop:text-[42px] desktop:leading-[58px]">
            Simplify your sales monitoring
          </h1>
          <Image
            src={Feature1}
            alt="feature 1 image"
            className="pt-[24px] desktop:hidden"
          />
          <p className="py-[24px] text-[#36485C] desktop:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>

          <ul className="flex flex-col gap-y-3 desktop:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <CheckIcon />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <CheckIcon />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <CheckIcon />
              </span>
              Lorem ipsum dolor sit amet
            </li>
          </ul>

          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] desktop:text-[18px]">
            Learn More
            <span>
              <BlueButton />
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 desktop:-mr-12 desktop:flex-row">
        <Image
          src={Feature2}
          alt="Feature 1 image"
          className="hidden w-1/2 desktop:block"
        />
        <div className="desktop:max-w-[620px] desktop:p-12">
          <h3 className="font-medium text-[#0085FF] desktop:text-[18px]">
            Sales Monitoring
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] desktop:text-[42px] desktop:leading-[58px]">
            Simplify your sales monitoring
          </h1>
          <Image
            src={Feature2}
            alt="feature 1 image"
            className="pt-[24px] desktop:hidden"
          />
          <p className="py-[24px] text-[#36485C] desktop:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>

          <ul className="flex flex-col gap-y-3 desktop:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <CheckIcon />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <CheckIcon />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <CheckIcon />
              </span>
              Lorem ipsum dolor sit amet
            </li>
          </ul>

          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#00A424] desktop:text-[18px]">
            Learn More
            <span>
              <GreenButton />
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 desktop:-ml-12 desktop:flex-row-reverse">
        <Image
          src={Feature3}
          alt="Feature 1 image"
          className="hidden w-1/2 desktop:block"
        />
        <div className="desktop:max-w-[620px] desktop:p-12">
          <h3 className="font-medium text-[#0085FF] desktop:text-[18px]">
            Sales Monitoring
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] desktop:text-[42px] desktop:leading-[58px]">
            Simplify your sales monitoring
          </h1>
          <Image
            src={Feature3}
            alt="feature 1 image"
            className="pt-[24px] desktop:hidden"
          />
          <p className="py-[24px] text-[#36485C] desktop:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>

          <ul className="flex flex-col gap-y-3 desktop:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <CheckIcon />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <CheckIcon />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <CheckIcon />
              </span>
              Lorem ipsum dolor sit amet
            </li>
          </ul>

          <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#EB2891] desktop:text-[18px]">
            Learn More
            <span>
              <PinkButton />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
