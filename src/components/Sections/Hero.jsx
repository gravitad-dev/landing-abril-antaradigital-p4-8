import texts from '../../sections.json';

function Hero() {
  return (
    <section className="relative">
      <div className="md:max-w-6xl mx-auto px-4 sm:px-6  md:flex items-center justify-center">
        {/* Hero content */}
        <div className=" pb-12 md:pt-10 lg:pb-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-7 md:pt-10">
            "Innovación inteligente, hogares conectados."
          </h1>
          <p className="mb-7 text-2xl md:px-40">
            Pioneros en el Futuro de la Vida Inteligente con IA, Blockchain y
            Experiencia Digital.
          </p>
          <a
            className="items-center btn text-white text-lg gap-2 px-10 py-2 rounded-full"
            href="http://blog.antaradigital.es/contacto"
            target="_blank"
            rel="noreferrer"
            style={{ backgroundColor: '#7C3AED' }}
          >
            {texts['section-one'].item7}
          </a>
        </div>
      </div>
    </section>
  );
}
export default Hero;
