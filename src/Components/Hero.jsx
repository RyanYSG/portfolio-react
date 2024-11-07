import Reveal from './Reveal';
import WaterDrop from './WaterDrop';

function Hero() {
  return (
    <section id="hero" className="w-screen h-[75vh] flex items-center  p-5">
      <article className="z-20">
        <Reveal>
          <h2 className="font-thin text-3 xl:text-5xl">OLÁ, EU SOU O</h2>
        </Reveal>

        <Reveal>
          <h1 className="font-bold text-6xl xl:text-8xl">
            <span className="text-pink-500">RYAN</span> YURI
          </h1>
        </Reveal>

        <Reveal>
          <h3 className="font-thin text-2xl xl:text-5xl">
            Desenvolvedor full-stack
          </h3>
        </Reveal>
      </article>
      <WaterDrop />
    </section>
  );
}

export default Hero;
