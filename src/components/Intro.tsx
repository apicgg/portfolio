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
          Hey, I&apos;m Anurag. I have over 5 years of experience as a Software
          Engineer. I am fluent in&nbsp;
          <strong className="text-[#1C3782] dark:text-[#74C0FC]">
            React, Next.js, React Native & TypeScript.
          </strong>
          <br />
          <br />
          <span>
            Check out my&nbsp;
            <Link
              className="cursor-pointer rounded-full border border-[#242424] p-2 text-sm tracking-widest text-gray-400 transition-all dark:hover:border-[#F9C34D]/90 dark:hover:text-[#F9C34D]/90"
              href="https://github.com/apicgg"
              aria-label="Anurag's GitHub"
              target="_blank"
              rel="noopener noreferrer"
              prefetch={true}
            >
              GitHub
            </Link>
            &nbsp;to know more about my work.
          </span>
        </p>
      </div>
    </article>
  );
};

export default Intro;
