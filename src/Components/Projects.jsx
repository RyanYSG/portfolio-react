import ProjectCard from './ProjectCard';
import Reveal from './Reveal';
import PlaceHolder from '/public/PLACEHOLDER.png';

function Projects() {
  return (
    <section
      id="projetos"
      className="flex flex-col text-white h-full w-full p-5 gap-5 xl:p-2"
    >
      <header className="flex flex-row items-center xl:justify-end h-full justify-center w-full">
        <div className="h-[2px] w-[70%] max-xl:hidden bg-pink-500"></div>
        <Reveal>
          <h1 className="font-bold text-5xl">Projetos</h1>
        </Reveal>
      </header>
      <section className="flex flex-wrap w-full justify-center gap-5 xl:flex-row xl:p-2 xl:gap-2 xl:justify-between">
        <ProjectCard img={PlaceHolder} title="Em Breve" />
        <ProjectCard img={PlaceHolder} title="Em Breve" />
        <ProjectCard img={PlaceHolder} title="Em Breve" />
        <ProjectCard img={PlaceHolder} title="Em Breve" />
      </section>
    </section>
  );
}

export default Projects;
