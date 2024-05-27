export default function SubHero({ img }) {
  return (
    <section
      className="m-auto text-inherit wrapper md:border-[3px] border-[#0F55BD] rounded-[4.5rem] px-0 mb-8"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="flex flex-wrap h-fit p-[15px]">
        <div className="p-2 more relative md:block hidden">
          <div className="w-[8vw] h-[8vw] overflow-hidden rounded-full relative">
            <img
              src={img}
              alt=""
              loading="lazy"
              className="absolute inset-0 md:max-w-[12vw] m-auto max-w-[67vw]"
            />
          </div>
        </div>
        <div className="md:w-[84%] md:px-[15px] flex flex-col justify-center">
          <p className="font-small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, in! Aspernatur sequi necessitatibus repudiandae,
            quam non excepturi quasi laborum sit adipisci fuga nemo aperiam
            pariatur reiciendis beatae, vitae explicabo distinctio quod sed
            tempore voluptatibus consequuntur! Odit quis harum aliquam quae
            assumenda, nihil eius ut maxime officiis corporis unde, impedit sit?
          </p>
        </div>
      </div>
    </section>
  );
}
