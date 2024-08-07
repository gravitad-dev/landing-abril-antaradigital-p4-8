import texts from "../../sections.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Noter2() {
  const settings = {
    dots: true,
    // infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 5000, // Tiempo en milisegundos entre cada transición
  };
  return (
    <section className="relative mt-7">
      <div className="max-w-6xl mx-auto px-4 sm:px-6  md:flex items-center justify-center">
        {/* Hero content */}
        <div className="pt-10 pb-12 md:pt-10 lg:pb-20 text-center">
          <h1 className="text-6xl font-bold mb-7">Lo que nos Distingue</h1>
          <p>
            No solo adoptamos las tecnologías más avanzadas, sino que también
            las adaptamos a las necesidades específicas de cada cliente. Nuestra
            fortaleza radica en la combinación de un profundo conocimiento en
            IA, Blockchain y tecnología para hogares inteligentes con un enfoque
            personalizado y centrado en el cliente. Esto nos permite ofrecer
            soluciones únicas y efectivas que realmente marcan la diferencia.
          </p>
        </div>
      </div>

      {/* <Slider {...settings}> */}
      <div className=" p-5 rounded">
        <div className="relative flex items-center">
          <img
            src="https://res.cloudinary.com/db60chvpz/image/upload/v1716247111/Wrapp/rkypchxtnexmufporbc9.png"
            alt="img1"
            className=" border-8 border-white rounded-lg "
            style={{ borderWidth: "20px" }}
          />
          <div className="absolute md:left-1/2 lg:left-[600px] text-center md:text-start md:items-start p-10 bg-white shadow max-w-[680px] rounded">
            <h2 className="text-[#475569] text-xl font-bold ">
              Por qué Confiar en Nosotros
            </h2>
            <p className="my-3">
              Por qué Antara Digital es su Socio Confiable en Innovación
              Tecnológica
            </p>
            <ul className="list-disc pl-5">
              <li>
                <p className="font-bold">Experiencia y Expertise:</p>
                Contamos con un equipo de expertos en tecnologías emergentes con
                una sólida trayectoria en la industria. Nos mantenemos a la
                vanguardia de la tecnología para ofrecer siempre las soluciones
                más avanzadas.
              </li>
              <li>
                <p className="font-bold">Enfoque Personalizado:</p>
                Cada proyecto es único, y trabajamos estrechamente con nuestros
                clientes para comprender y satisfacer sus necesidades
                específicas. Compromiso con la Calidad: Garantizamos productos y
                servicios de alta calidad que superan las expectativas.
              </li>
              <li>
                <p className="font-bold">Compromiso con la calidad:</p>
                Garantizamos productos y servicios de alta calidad que superan
                las expectativas.
              </li>
            </ul>

            {/* <a
                className="flex items-center text-[#7C3AED] text-lg gap-2   font-semibold"
                href="/#"
              >
                Read Full Story
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-5 pt-1"
                >
                  <title>arrow</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </a> */}
          </div>
        </div>
      </div>
      {/* <div className=" p-5 rounded">
          <div className="relative flex items-center">
            <img
              src="https://res.cloudinary.com/db60chvpz/image/upload/v1716247111/Wrapp/rkypchxtnexmufporbc9.png"
              alt="img1"
              className=" border-8 border-white rounded-lg "
              style={{ borderWidth: "20px" }}
            />
            <div className="absolute md:left-1/2 lg:left-[600px] text-center md:text-start md:items-start p-10 bg-white shadow max-w-[680px] rounded">
              <h2 className="text-[#475569] font-bold mb-3">
                ARTIST & INVESTOR
              </h2>

              <p className="text-black font-semibold mb-7">
                Enim sagittis, sit porttitor morbi lobortis amet, libero
                adipiscing auctor. Malesuada tristique libero, id netus
                tincidunt. Egestas ac arcu amet nisl quis est ...
              </p>
              <a
                className="flex items-center text-[#7C3AED] text-lg gap-2   font-semibold"
                href="/#"
              >
                Read Full Story
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-5 pt-1"
                >
                  <title>arrow</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div> */}
      {/* <div className=" p-5 rounded">
          <div className="relative flex items-center">
            <img
              src="https://res.cloudinary.com/db60chvpz/image/upload/v1716247111/Wrapp/rkypchxtnexmufporbc9.png"
              alt="img1"
              className=" border-8 border-white rounded-lg "
              style={{ borderWidth: "20px" }}
            />
            <div className="absolute md:left-1/2 lg:left-[600px] text-center md:text-start md:items-start p-10 bg-white shadow max-w-[680px] rounded">
              <h2 className="text-[#475569] font-bold mb-3">
                ARTIST & INVESTOR
              </h2>

              <p className="text-black font-semibold mb-7">
                Enim sagittis, sit porttitor morbi lobortis amet, libero
                adipiscing auctor. Malesuada tristique libero, id netus
                tincidunt. Egestas ac arcu amet nisl quis est ...
              </p>
              <a
                className="flex items-center text-[#7C3AED] text-lg gap-2   font-semibold"
                href="/#"
              >
                Read Full Story
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-5 pt-1"
                >
                  <title>arrow</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div> */}
      {/* </Slider> */}
    </section>
  );
}
export default Noter2;
