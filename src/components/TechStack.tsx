import {
  SiAntdesign,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiRadixui,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const TechStack = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center space-y-4">
        <div className="my-6 grid grid-cols-2 gap-5 lg:flex lg:space-x-16">
          {/* <i className="py-4 border-2 border-[#474747] rounded px-14 hover:scale-110 ease-in-out duration-300">
            <SiHtml5 className="w-14 h-14" color="gray" />
          </i> */}
          {/* <i className="lg:hidden py-4 border-2 border-[#474747] rounded px-14 hover:scale-110 ease-in-out duration-300">
            <DiCss3 className="w-14 h-14" color="gray" />
          </i> */}
          <i className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110">
            <SiReact className="h-14 w-14" color="gray" />
          </i>
          <i className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110">
            <SiNextdotjs className="h-14 w-14" color="gray" />
          </i>

          <i className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110">
            <SiJavascript className="h-14 w-14" color="gray" />
          </i>
          <i className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110">
            <SiTypescript className="h-14 w-14" color="gray" />
          </i>
          <i className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110 lg:hidden">
            <SiNodedotjs className="h-14 w-14" color="gray" />
          </i>
          <i className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110 lg:hidden">
            <SiAntdesign className="h-14 w-14" color="gray" />
          </i>
        </div>

        <div className="my-6 grid grid-cols-2 gap-5 lg:flex lg:space-x-16">
          <i className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110">
            <SiTailwindcss className="h-14 w-14" color="gray" />
          </i>
          <i className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110">
            <SiRadixui className="h-14 w-14" color="gray" />
          </i>

          <i className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110">
            <SiMongodb className="h-14 w-14" color="gray" />
          </i>
          <i className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110">
            <SiGit className="h-14 w-14" color="gray" />
          </i>
        </div>
      </section>
    </>
  );
};

export default TechStack;
