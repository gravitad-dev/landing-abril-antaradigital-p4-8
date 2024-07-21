function Mobile() {
  return (
    <section className="relative" id="recursos">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6  flex flex-col md:flex-row items-center justify-between mt-10">
        <div className="py-6 md:py-0 md:w-1/2 px-6 sm:px-10 md:px-0">
          <div className="relative flex flex-col items-center   ">
            <div className="md:ml-10 mt-10 w-7xl">
              <img
                className="md:max-w-none mx-auto md:mr-20"
                src="https://res.cloudinary.com/db60chvpz/image/upload/v1716351443/Wrapp/g0qw27xjwi0vpewwl5pa.png"
                width={500}
                height="300"
                alt="iPad"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto text-center ">
          <div className="text-center md:text-start ">
            <h2 className="text-[#475569] font-semibold">SIN LIMITES</h2>
            <h1 className="text-black text-4xl font-bold mb-5">Misión </h1>
            <p className="text-black mb-7">
              Nuestra misión es liderar la revolución digital en hogares y
              empresas mediante la implementación de tecnologías avanzadas. Nos
              esforzamos por ofrecer soluciones innovadoras que no solo mejoren
              la calidad de vida, sino que también optimicen la eficiencia y la
              seguridad en cada espacio que transformamos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Mobile;
