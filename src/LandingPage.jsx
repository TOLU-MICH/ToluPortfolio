import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import SubHero from "./component/SubHero";
import Skills from "./component/Skills";
import ContactMe from "./component/ContactMe";
import ProjectsContainer from "./container/ProjectsContainer";
import hero from "./assets/hero-img.png";

export default function LandingPage() {
  return (
    <section>
      <NavBar />
      <section className="wrap-content text-white">
        <div className="md:h-screen">
          <Hero img={hero} />
          <SubHero img={hero} />
          <Skills />
        </div>
        <ProjectsContainer />
        <ContactMe />
      </section>
    </section>
  );
}
