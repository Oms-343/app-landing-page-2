import Image from "next/image";
import Arrow from "@/public/arrow.png";

export default function Cta() {
  return (
    <section className="container max-w-[350px] rounded-[16px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 px-[32px] py-[56px] text-center desktop:my-[60px] desktop:max-w-[1280px] desktop:px-[324px] desktop:py-[89px]">
      <h1 className="text-[32px] font-medium leading-[64px] text-white desktop:text-[56px]">
        Monitor your website like a pro
      </h1>
      <p className="pt-6 text-white desktop:pt-[48px] desktop:text-[18px]">
        Join over 800+ happy site owners boosting productivity and efficiency!
      </p>

      <div className="mt-[40px] flex w-full flex-col items-center gap-x-[40px] desktop:mt-[56px] desktop:flex-row desktop:justify-center">
        <button className="w-fit rounded-[4px] bg-white px-[32px] py-[16px] font-medium text-pink-500">
          Try for free
        </button>

        <button className="mt-[32px] flex w-full items-center justify-center gap-x-3 font-medium text-white desktop:mt-0 desktop:w-fit">
          Contact Sales{" "}
          <span>
            <Image src={Arrow} alt="Learn More" />
          </span>
        </button>
      </div>
    </section>
  );
}
