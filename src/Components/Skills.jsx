import MobileSkill from './MobileSkill';
import Reveal from './Reveal';

function Skills() {
  return (
    <section
      id="habilidades"
      className="text-white flex flex-col h-full gap-5 p-5"
    >
      <header className="flex items-center">
        <div className="h-[2px] w-1/4 xl:w-1/2 bg-pink-500" />
        <Reveal>
          <h1 className="text-5xl font-bold">
            Habilidades<span className="text-pink-500">.</span>
          </h1>
        </Reveal>
      </header>

      <div className="max-sm:flex max-sm:flex-col max-sm:gap-2">
        <Reveal>
          <p className="font-thin text-xl text-right">
            Desenvolvedor full-stack, com conhecimento em diversas tecnologias e
            frameworks, por exemplo: React.JS com Framer-Motion e Tailwind
            Node.JS com Express, Sequelize e Passport.
          </p>
        </Reveal>

        <Reveal>
          <p className="font-thin text-xl text-right">
            Capacidade para fazer aplicacoes WEB completas, com banco de dados e
            validaçao de dados. Juntamente a um front-end interativo e
            responsivo.
          </p>
        </Reveal>
      </div>

      <article className="overflow-hidden flex flex-row-reverse gap-2 w-full items-center justify-start h-fit flex-wrap">
        <MobileSkill selfDelay={0}>HTML</MobileSkill>
        <MobileSkill selfDelay={0.2}>CSS</MobileSkill>
        <MobileSkill selfDelay={0.4}>JavaScript</MobileSkill>
        <MobileSkill selfDelay={0.6}>NodeJS</MobileSkill>
        <MobileSkill selfDelay={0}>ReactJS</MobileSkill>
        <MobileSkill selfDelay={0.2}>Express</MobileSkill>
        <MobileSkill selfDelay={0.4}>Postgre</MobileSkill>
        <MobileSkill selfDelay={0.6}>Tailwind</MobileSkill>
        <MobileSkill selfDelay={0}>Framer Motion</MobileSkill>
      </article>
    </section>
  );
}

export default Skills;
