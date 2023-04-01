import Link from "next/link";

const Intro = () => {
  return (
    <section className="max-w-5xl mx-auto flex items-center justify-between flex-col-reverse lg:flex-row md:gap-12 p-4 md:p-8 mb-8">
      <div className="px-4 md:px-0">
        <h1 className="text-2xl md:text-4xl font-medium md:font-semibold text-center py-2 pt-6">
          LET ME{" "}
          <span className="dark:text-[#74C0FC] text-[#1C3782]">INTRODUCE</span>{" "}
          MYSELF
        </h1>
        <p className="text-base md:text-lg ">
          Hey, I&apos;m Anurag Pramanik. I have over 4 years of experience as a
          Software Engineer. I fell in love with programming especially with web
          development after my graduation.
          <br />
          <br />I am fluent in
          <em>
            <strong className="dark:text-[#74C0FC] text-[#1C3782]">
              {" "}
              React, Next.js & TypeScript.{" "}
            </strong>
          </em>
          <br />
          <br />
          <span>
            Check out my{" "}
            <Link
              className="dark:hover:text-[#F9C34D] hove:text-[#1C3782] transition-colors duration-500 ease-out "
              href="https://apicgg.github.io/digital-resume/"
              aria-label="Anurag Pramanik resume website"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Link>{" "}
            for complete detail of my skills.
          </span>
          <br />
          <br />
          My field of interest is to build full-stack web applications. And also
          in areas related to modern web technologies like &nbsp;
          <i>
            <b className="dark:text-[#74C0FC] text-[#1C3782]">Next.js. </b>
          </i>
        </p>
      </div>
    </section>
  );
};

export default Intro;
