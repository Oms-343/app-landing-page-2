import LogoIcon from "@/public/Logo.svg";
import UserIcon from "@/public/User.svg";
import MenuIcon from "@/public/Menu.svg";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 py-4">
      <div className="container flex items-center justify-between font-medium text-[#36485C]">
        <div className="flex items-center">
          <LogoIcon className="h-10 w-10" />

          <nav className="ml-[74px] hidden gap-14 desktop:flex">
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Enterprise</a>
            <a href="#">Careers</a>
          </nav>
        </div>

        <div className="flex items-center gap-5 desktop:gap-14">
          <button className="hidden desktop:block">Open an Account</button>
          <button className="flex items-center gap-1">
            <UserIcon className="h-8 w-8" />
            <span className="hidden desktop:inline">Sign in</span>
          </button>
          <button>
            <MenuIcon className="h-8 w-8 desktop:hidden" />
          </button>
        </div>
      </div>
    </header>
  );
}
