import Link from "next/link";

const Intro = () => {
  return (
    <article className="mx-auto mb-8 flex max-w-5xl flex-col-reverse items-center justify-between p-4 md:gap-12 md:p-8 lg:flex-row">
      <div className="px-4 md:px-0">
        <h1 className="mb-2 py-2 pt-6 text-center text-2xl font-medium md:text-4xl md:font-semibold">
          LET ME&nbsp;
          <span className="text-[#1C3782] dark:text-[#74C0FC]">INTRODUCE</span>
          &nbsp;MYSELF
        </h1>
        <p className="text-base md:text-lg ">
          Hey, I&apos;m Anurag Pramanik. I have over 4 years of experience as a
          Software Engineer. I am fluent in&nbsp;
          <strong className="text-[#1C3782] dark:text-[#74C0FC]">
            React, Next.js & TypeScript.
          </strong>
          <br />
          <br />
          <span>
            Check out my&nbsp;
            <Link
              className="transition-colors duration-500 ease-out hover:text-[#1C3782] dark:hover:text-[#F9C34D] "
              href="/assets/resume/Anurag_Resume.pdf"
              aria-label="Anurag's Resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Link>
            &nbsp;for complete detail of my skills.
          </span>
          <br />
          <br />
          My field of interest is to build full-stack web and mobile
          applications. And also in areas related to modern technologies like
          &nbsp;
          <em>
            <strong className="text-[#1C3782] dark:text-[#74C0FC]">
              React Native & Next.js.
            </strong>
          </em>
        </p>
      </div>
    </article>
  );
};

export default Intro;
