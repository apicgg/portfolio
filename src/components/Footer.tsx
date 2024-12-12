import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  let date = new Date();
  let currentYear = date.getFullYear();
  return (
    <footer className="mx-auto max-w-5xl py-8">
      <div className="grid grid-rows-3 items-center justify-center gap-y-5 md:grid-cols-3 md:grid-rows-none md:justify-between">
        <p className="font-semibold">Built by Anurag.</p>
        <p className="place-self-center font-semibold">
          Copyright © {currentYear} AP
        </p>
        <ul className="flex items-center justify-center gap-10 font-semibold">
          <li>
            <Link
              href="https://github.com/apicgg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Anurag's GitHub"
              prefetch={true}
            >
              <FaGithub className="h-5 w-5" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/anurag-p-345843125/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Anurag's LinkedinIn"
              prefetch={true}
            >
              <FaLinkedinIn className="h-5 w-5" />
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/anuragp_dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Anurag's Twitter"
              prefetch={true}
            >
              <FaXTwitter className="h-5 w-5" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
