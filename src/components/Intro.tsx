import Link from "next/link";

export default function Intro() {
  const date = new Date();
  const currentYear = date.getFullYear();
  const experience = currentYear - 2018;

  return (
    <article className="mx-auto mb-8 flex max-w-5xl flex-col-reverse items-center justify-between p-4 md:gap-12 md:p-8 lg:flex-row">
      <div className="px-4 md:px-0">
        <h1 className="mb-2 py-2 pt-6 text-center text-2xl font-medium md:text-4xl md:font-semibold">
          LET ME&nbsp;
          <span className="text-brand-light dark:text-brand-dark">
            INTRODUCE
          </span>
          &nbsp;MYSELF
        </h1>
        <p className="text-base md:text-lg ">
          Hi, I&apos;m Anurag — a Software Engineer and Frontend Architect with
          over {experience} years of experience building web and mobile
          applications. I focus on creating robust, maintainable interfaces and
          developer-friendly architectures using&nbsp;
          <strong className="text-brand-light dark:text-brand-dark">
            <Link
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="React documentation"
              className="group inline-block transition duration-300"
            >
              React
              <span className="mx-auto block h-0.5 max-w-0 select-none rounded-full bg-yellow-primary transition-all duration-300 group-hover:max-w-full"></span>
            </Link>
            ,&nbsp;
            <Link
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Next.js documentation"
              className="group inline-block transition duration-300"
            >
              Next.js
              <span className="mx-auto block h-0.5 max-w-0 select-none rounded-full bg-yellow-primary transition-all duration-300 group-hover:max-w-full"></span>
            </Link>
            ,&nbsp;
            <Link
              href="https://reactnative.dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="React Native documentation"
              className="group inline-block transition duration-300"
            >
              React Native
              <span className="mx-auto block h-0.5 max-w-0 select-none rounded-full bg-yellow-primary transition-all duration-300 group-hover:max-w-full"></span>
            </Link>
            ,&nbsp;
            <Link
              href="https://expo.dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Expo is a full-stack React Native framework with powerful cloud services to help you move faster at every stage of the app lifecycle."
              className="group inline-block transition duration-300"
            >
              Expo
              <span className="mx-auto block h-0.5 max-w-0 select-none rounded-full bg-yellow-primary transition-all duration-300 group-hover:max-w-full"></span>
            </Link>
            ,&nbsp;
            <Link
              href="https://developer.apple.com/ios/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="iOS developer documentation"
              className="group inline-block transition duration-300"
            >
              iOS
              <span className="mx-auto block h-0.5 max-w-0 select-none rounded-full bg-yellow-primary transition-all duration-300 group-hover:max-w-full"></span>
            </Link>
            ,&nbsp;
            <Link
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TypeScript documentation"
              className="group inline-block transition duration-300"
            >
              TypeScript
              <span className="mx-auto block h-0.5 max-w-0 select-none rounded-full bg-yellow-primary transition-all duration-300 group-hover:max-w-full"></span>
            </Link>
            ,&nbsp;
            <Link
              href="https://nodejs.org/en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Node.js documentation"
              className="group inline-block transition duration-300"
            >
              Node.js
              <span className="mx-auto block h-0.5 max-w-0 select-none rounded-full bg-yellow-primary transition-all duration-300 group-hover:max-w-full"></span>
            </Link>
            , and&nbsp;
            <Link
              href="https://docs.python.org/3/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Python documentation"
              className="group inline-block transition duration-300"
            >
              Python
              <span className="mx-auto block h-0.5 max-w-0 select-none rounded-full bg-yellow-primary transition-all duration-300 group-hover:max-w-full"></span>
            </Link>
          </strong>
          .
          <br />
          <br />
          <span>
            Explore my work on&nbsp;
            <Link
              className="group inline-block text-brand-light transition duration-300 dark:text-brand-dark "
              href="https://github.com/apicgg"
              aria-label="Anurag's GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <span className="mx-auto block h-0.5 max-w-0 select-none rounded-full bg-yellow-primary transition-all duration-300 group-hover:max-w-full"></span>
            </Link>
            &nbsp;to see projects, libraries, and contributions. I usually
            prefer light mode during the day — but I ship for both themes.
          </span>
        </p>
      </div>
    </article>
  );
}
