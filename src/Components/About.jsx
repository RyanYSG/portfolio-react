import { Link } from 'react-scroll';
import AnimatedButton from './AnimatedButton';
import Reveal from './Reveal';
import Image from '/public/Image.png';

function About() {
  return (
    <section id="sobre" className="h-full p-5 text-white flex flex-col gap-5">
      <header className="flex items-center w-full">
        <Reveal>
          <h1 className="text-white text-5xl xl:text-6xl font-bold">
            Sobre<span className="text-pink-500">.</span>
          </h1>
        </Reveal>
        <div className="h-[2px] bg-pink-500 w-[60%] xl:w-[70%]" />
      </header>

      <div className="xl:flex">
        <article className="xl:flex xl:flex-col xl:gap-5 xl:w-1/2 flex flex-col gap-5">
          <Reveal>
            <p className="text-xl font-thin">
              Estudante e entusiasta da area de programaço. Conhecimento em
              tecnologias full-stack, como por exemplo: React.JS, Node.JS,
              PostgreSQL, HTML, CSS e JavaScript.
            </p>
          </Reveal>

          <Reveal>
            <p className="text-xl font-thin">
              Sempre estudando novas tecnologias e funcionalidades para entregar
              aplicacoes interativas de alta qualidade.
            </p>
          </Reveal>

          <AnimatedButton>
            <Link
              to="contato"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="p-5 w-full text-center"
            >
              CONTATO
            </Link>
          </AnimatedButton>
        </article>

        <article
          className="max-xl:hidden w-1/2"
          style={{
            backgroundImage: `url(${Image})`,
            backgroundSize: 'cover',
            backgroundPosition: '75%',
          }}
        ></article>
      </div>
    </section>
  );
}

export default About;
