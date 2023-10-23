import {
  SiGooglecloud,
  SiPostman,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";

const ToolStack = () => {
  return (
    <section className="flex flex-col items-center justify-between space-y-4 py-8">
      <div className="my-6 grid grid-cols-2 gap-5 lg:flex lg:flex-row lg:space-x-16">
        <figure className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110">
          <SiPostman className="h-14 w-14" color="gray" />
        </figure>
        <figure className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110">
          <SiGooglecloud className="h-14 w-14" color="gray" />
        </figure>
        <figure className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110">
          <SiVisualstudiocode className="h-14 w-14" color="gray" />
        </figure>
        <figure className="hidden rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110">
          <SiPostman className="h-14 w-14" color="gray" />
        </figure>
        <figure className="rounded border-2 border-[#474747] px-14 py-4 duration-300 ease-in-out hover:scale-110">
          <SiVercel className="h-14 w-14" color="gray" />
        </figure>
      </div>
    </section>
  );
};

export default ToolStack;
