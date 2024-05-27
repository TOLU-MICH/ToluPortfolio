import { data } from "../assets/projects";
import ProjectCard from "../component/ProjectCard";

export default function ProjectsContainer() {
  return (
    <section
      className="wrap-content bg-inherit md:h-full px-0 md:my-0 my-10"
      id="project"
    >
      <h2
        className="font-bold text-2xl sm:text-3xl lg:text-4xl font-[Inconsolata] mb-10"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        PROJECTS
      </h2>
      <section
        className="flex flex-wrap justify-between w-full"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {data.map((item) => (
          <ProjectCard props={item} />
        ))}
      </section>
      <button
        className="w-[5rem] h-[5rem] text-sm md:text-xl md:w-[8rem] md:h-[8rem] rounded-full  bg-gradient-to-t text-white from-[#115DCE] to-[#042B66] flex justify-center items-center font-bold m-auto mt-10 hover:bg-transparent hover:border-[3px]"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        See More
      </button>
    </section>
  );
}
