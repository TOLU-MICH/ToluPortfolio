const tagList = ["HTML", "CSS", "JAVASCRIPT"];

export default function ProjectCard({ props }) {
  const { title, lang, desc, link, img } = props;
  console.log(props);
  return (
    <a
      href={link}
      className="sm:w-[50%] md:w-[30%] w-[78%] mx-auto md:px-0 px-[15px] pb-8 md:pb-[15px]"
    >
      <div className="w-full  bg-gray-300 rounded-[3rem]">
        <img src={img} alt="w-full h-full mx-auto" />
      </div>
      <h4 className="leading-[3rem] mr-2 font-[Inconsolata] text-2xl md:text-3xl font-bold text-center md:my-2">
        {title}
      </h4>
      <p className="font-small text-sm md:text-base px-[15px]">{desc}</p>
      <ul className="flex flex-wrap">
        {lang.map((data, index) => (
          <Tags tag={data} key={index} />
        ))}
      </ul>
    </a>
  );
}

function Tags({ tag }) {
  return (
    <li className="font-bold text-sm mr-4 after:content-[''] after:bg-[#1b1719] after:block after:h-[2px] after:w-0 after:transition-all after:duration-[0.4s] hover:after:w-full py-[7px] ">
      {tag}
    </li>
  );
}
