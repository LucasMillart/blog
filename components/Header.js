import Link from "next/link";
import ThemeController from "./DaisyUI/ThemeController";
import ThemeAwareImage from "./ThemeAwareImage";

export default function Header() {
  return (
    <div className="mx-auto w-full flex flex-row justify-between p-5 items-center">
      <div className="Left mx-5 lg:mx-25 sm:mx-15">
        <Link href="/">
          <ThemeAwareImage
            lightSrc="/LM-logo-noire.png"
            darkSrc="/LM-logo2.png"
            alt="Lucas Millart Logo"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <div className="flex flex-row mx-5 lg:mx-25 sm:mx-15 text-xl items-center">
        <ThemeController />
        <div className="ml-4">
          <Link href="/projets" className="hover:underline">Projets</Link>
        </div>
        <div className="ml-4">
          <Link href="/posts" className="hover:underline">Derniers Articles</Link>
        </div>
      </div>
    </div>
  );
}