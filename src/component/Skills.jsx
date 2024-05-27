import Button from "./Button";

const skills = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "REACT",
  "FIGMA",
  "Typescript",
  "React-Native",
];

export default function Skills() {
  return (
    <section className="wrapper" data-aos="fade-left" data-aos-delay="100">
      <span className="flex font-bold text-sm md:text-2xl ">
        <h4 className="leading-[3rem] mr-2">Skills:</h4>
        <ul className="flex flex-wrap">
          {/* <li className="font-bold leading-6 mr-4">Skills: </li> */}
          {skills.map((value, index) => (
            <Button value={value} key={index} />
          ))}
        </ul>
      </span>
    </section>
  );
}
