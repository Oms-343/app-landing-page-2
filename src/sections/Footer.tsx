import Logo from "@/public/Logo.svg";
import Facebook from "@/public/Facebook.svg";
import Twitter from "@/public/X.svg";
import Feed from "@/public/Feed.svg";

export default function Footer() {
  return (
    <div className="container pb-[40px] pt-[80px]">
      <div className="flex items-center justify-center gap-x-[12px]">
        <Logo />
        <p className="text-[17px] font-bold text-[#36485C]">Jan Marshal</p>
      </div>

      <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] mobile:flex-row mobile:justify-center mobile:gap-x-5 mobile:pt-5">
        <li>Features</li>
        <li>Pricing</li>
        <li>Enterprise</li>
        <li>Careers</li>
      </ul>

      <p className="pt-[56px] text-center text-[14px] font-medium text-[#5F7896] mobile:pt-5">
        © Copyright 2024. Your Site. All rights reserved.
      </p>

      <div className="flex items-center justify-center gap-x-[56px] pt-[40px]">
        <Facebook />
        <Feed />
        <Twitter />
      </div>
    </div>
  );
}
