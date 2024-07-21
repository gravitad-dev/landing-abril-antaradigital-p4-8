import texts from '../../sections.json';

function Noter() {
  return (
    <section className="relative" id="soluciones">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6  flex flex-col gap-2 items-center justify-between mt-10">
        {/* Section 1 */}
        <div className="grid md:grid-cols-2  gap-2">
          <img
            src="https://res.cloudinary.com/db60chvpz/image/upload/v1716247113/Wrapp/xfrlbipp44yacxde6iiy.png"
            alt="team1"
            className=""
          />
          <div className="text-center md:text-start p-10 bg-[#4C1D95]">
            <h2 className="text-[#A78BFA] font-semibold">EQUIPO</h2>
            <h1 className="text-white text-4xl font-bold mb-5">
              Quiénes Somos{' '}
            </h1>
            <p className="text-white mb-7">
              En Antara Digital, somos pioneros en la integración de tecnologías
              avanzadas como la Inteligencia Artificial (IA), Blockchain y
              experiencias digitales para hogares inteligentes. Nos dedicamos a
              transformar hogares y empresas, creando entornos inteligentes,
              seguros y altamente eficientes que redefinen el confort y la
              funcionalidad.
            </p>
            <a
              className="hidden items-center btn text-white border-none  text-lg gap-2 px-10 py-2 rounded-full"
              href="/#"
              style={{ backgroundColor: '#7C3AED' }}
            >
              {texts['section-one'].item7}
            </a>
          </div>
        </div>
        {/* Section 2 */}
        <div className="grid grid-cols-6 md:grid-cols-6  gap-2">
          {/* Img 1 */}
          <figure className="col-span-2">
            <img
              src="https://res.cloudinary.com/db60chvpz/image/upload/v1716247112/Wrapp/ayjmkmyd1auz8nfjoive.png"
              alt="team1"
              className="w-full h-full object-cover"
            />
          </figure>
          {/* Img 2 */}
          <figure>
            <img
              src="https://res.cloudinary.com/db60chvpz/image/upload/v1716247112/Wrapp/xfnroomeuamso30zfi1h.png"
              alt="team1"
              className="w-full h-full object-cover"
            />
          </figure>
          {/* Img 3 */}
          <figure className="col-span-2">
            <img
              src="https://res.cloudinary.com/db60chvpz/image/upload/v1716247112/Wrapp/wsvpuoantrvtdrosx9lu.png"
              alt="team1"
              className="w-full h-full object-cover"
            />
          </figure>
          {/* Img 4 */}
          <figure>
            <img
              src="https://res.cloudinary.com/db60chvpz/image/upload/v1716247112/Wrapp/vnwgopj0qkf4hfhlsn2w.png"
              alt="team1"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
export default Noter;
