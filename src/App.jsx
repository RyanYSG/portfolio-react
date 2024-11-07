import About from './Components/About';
import Contact from './Components/Contact';
import Hero from './Components/Hero';
import MobileHeader from './Components/MobileHeader';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import DesktopHeader from './Components/DesktopHeader';

function App() {
  return (
    <section className="mx-auto">
      {window.innerWidth < 760 ? <MobileHeader /> : <DesktopHeader />}
      <section className="xl:w-1/2 2xl:w-1/3 h-full mx-auto overflow-hidden ">
        <Hero />
        <About />
        <Skills />
        <Contact />
        <Projects />
      </section>
    </section>
  );
}

export default App;
