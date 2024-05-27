export default function Hero({ img }) {
  return (
    <section
      className="m-auto px-[15px] text-inherit  md:mb-16"
      data-aos="fade-up"
      data-aos-delay="100"
      id="aboutMe"
    >
      <div className="px-[15px] flex flex-wrap h-fit">
        <div className="md:w-[50%] md:px-[15px] flex flex-col justify-center md:order-1 order-2 m-auto">
          <p className="font-bold text-xl mb-4 typewriter">Hi, there!</p>
          <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl">
            <span className="typewriter">
              <span>I’m </span> <span className="font-blue"> Micheal Tolu</span>
            </span>{" "}
            <span className="font-blue typewriter"> Francis</span>
          </h1>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
            <span className="typewriter">
              I <span className="font-blue">Design </span> and{" "}
              <span className="font-blue">Develop </span>
            </span>{" "}
            <span className="font-blue typewriter"> Web Sites</span>
          </h2>
        </div>
        <img
          src={img}
          alt=""
          loading="lazy"
          className="md:max-w-[50%] md:order-2 order-1 m-auto max-w-[67vw]"
        />
      </div>
    </section>
  );
}
