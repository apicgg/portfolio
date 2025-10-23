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
          <span className="text-[#1C3782] dark:text-[#74C0FC]">INTRODUCE</span>
          &nbsp;MYSELF
        </h1>
        <p className="text-base md:text-lg ">
          Hey, I&apos;m Anurag. I have over {experience} years of experience as
          a Software Engineer and a Frontend Architect. I am fluent in&nbsp;
          <strong className="text-[#1C3782] dark:text-[#74C0FC]">
            React, Next.js, React Native, iOS, TypeScript, Node.js, and Python.
          </strong>
          <br />
          <br />
          <span>
            Check out my&nbsp;
            <Link
              className="group inline-block text-black transition duration-300 dark:text-white "
              href="https://github.com/apicgg"
              aria-label="Anurag's GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <span className="mx-auto block h-0.5 max-w-0 select-none rounded-full bg-[#F9C34D]/90 transition-all duration-300 group-hover:max-w-full"></span>
            </Link>
            &nbsp;to know more about my work. And yes, I&apos;m a proud light
            mode warrior when the sun&apos;s up!
          </span>
        </p>
      </div>
    </article>
  );
}
