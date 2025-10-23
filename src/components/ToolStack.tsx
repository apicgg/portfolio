import Link from "next/link";
import {
  SiAmazonaws,
  SiFirebase,
  SiGithub,
  SiGooglecloud,
  SiNeovim,
  SiVisualstudiocode,
} from "react-icons/si";

export default function ToolStack() {
  return (
    <section
      className="flex flex-col items-center justify-between space-y-4 py-8"
      aria-label="Tool stack section with various developer tools and services"
    >
      <div className="my-6 grid grid-cols-2 gap-5 lg:flex lg:flex-row lg:space-x-16">
        <Link
          href="https://firebase.google.com/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Visit Firebase website for backend and app development tools"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110"
        >
          <SiFirebase className="gray h-14 w-14" />
        </Link>

        <Link
          href="https://cloud.google.com/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Visit Google Cloud website for cloud computing services"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110 lg:hidden"
        >
          <SiGooglecloud className="gray h-14 w-14" />
        </Link>

        <Link
          href="https://aws.amazon.com/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Visit Amazon Web Services website for cloud and hosting solutions"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110"
        >
          <SiAmazonaws className="gray h-14 w-14" />
        </Link>

        <Link
          href="https://neovim.io/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Visit Neovim website for text editor tools"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110"
        >
          <SiNeovim className="gray h-14 w-14" />
        </Link>

        <Link
          href="https://code.visualstudio.com/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Visit Visual Studio Code website for code editor and extensions"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110 lg:hidden"
        >
          <SiVisualstudiocode className="gray h-14 w-14" />
        </Link>

        <Link
          href="https://github.com/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Visit GitHub website for code repositories and version control"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110"
        >
          <SiGithub className="gray h-14 w-14" />
        </Link>
      </div>
    </section>
  );
}
