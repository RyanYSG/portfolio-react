import { FiGithub, FiMail, FiPhone } from 'react-icons/fi';
import ContactCard from './ContactCard';
import Reveal from './Reveal';

function Contact() {
  return (
    <section id="contato" className="text-white p-5 flex flex-col w-full gap-2">
      <header className="flex items-center">
        <Reveal>
          <h1 className="text-5xl font-bold">
            Contato<span className="text-pink-500">.</span>
          </h1>
        </Reveal>
        <div className="h-[2px] bg-pink-500 w-[45%] xl:w-[65%]"></div>
      </header>

      <article className="flex flex-col gap-2">
        <ContactCard
          icon={
            <FiMail className="bg-pink-500 max-w-[75px] max-h-[75px] w-full h-full p-2 rounded-xl" />
          }
          name="E-MAIL"
          to="mailto:ryanyuri64@gmail.com"
        >
          ryanyuri64@gmail.com
        </ContactCard>
        <ContactCard
          icon={
            <FiPhone className="bg-pink-500 max-w-[75px] max-h-[75px] w-full h-full p-2 rounded-xl" />
          }
          name="TELEFONE"
          to="https://wa.me/5511960418052"
        >
          (11) 96041-8052
        </ContactCard>
        <ContactCard
          icon={
            <FiGithub className="bg-pink-500 max-w-[75px] max-h-[75px] w-full h-full p-2 rounded-xl" />
          }
          name="GITHUB"
          to="https://github.com/RyanYSG"
        >
          @RyanYSG
        </ContactCard>
      </article>
    </section>
  );
}

export default Contact;
