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
    <section className="flex flex-col items-center justify-between space-y-4 py-8">
      <div className="my-6 grid grid-cols-2 gap-5 lg:flex lg:flex-row lg:space-x-16">
        <Link
          href="https://firebase.google.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110"
        >
          <SiFirebase className="gray h-14 w-14" />
        </Link>
        <Link
          href="https://cloud.google.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110"
        >
          <SiGooglecloud className="gray h-14 w-14" />
        </Link>
        <Link
          href="https://cloud.google.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110"
        >
          <SiAmazonaws className="gray h-14 w-14" />
        </Link>
        <Link
          href="https://neovim.io/"
          rel="noopener noreferrer"
          target="_blank"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110"
        >
          <SiNeovim className="gray h-14 w-14" />
        </Link>
        <Link
          href="https://neovim.io/"
          rel="noopener noreferrer"
          target="_blank"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110"
        >
          <SiVisualstudiocode className="gray h-14 w-14" />
        </Link>
        <Link
          href="https://github.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110"
        >
          <SiGithub className="gray h-14 w-14" />
        </Link>
      </div>
    </section>
  );
}
