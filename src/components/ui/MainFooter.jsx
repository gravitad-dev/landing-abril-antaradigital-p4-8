import texts from "../../sections.json";

function MainFooter() {
  return (
    <footer className="items-center md:p-4 md:px-5 lg:px-10 grid md:grid-cols-2 mt-20 flex-wrap text-center">
      <aside className="items-center flex gap-5 mt-2">
        <div
          style={{
            backgroundColor: "none",
            border: "none",
          }}
          className="mx-auto flex justify-center text-center"
        >
          <a
            className="text-2xl font-bold text-[#1F2937] flex items-center flex-wrap text-center"
            href="/#"
          >
            <img
              src={texts["section-one"].logo}
              alt="logo"
              width={70}
              className="mx-auto p-2"
            />
            <h1 className="text-center mx-auto">
              {texts["section-one"].logoName}
            </h1>
          </a>
        </div>
        <p className="text-[14px] mt-2 mr-8">
          Copyright © 2024 - Todos los Derechos Reservados
        </p>
      </aside>
      {/*
      <nav className="flex flex-wrap gap-4 mt-4 lg:grid grid-cols-5 text-center">
        <a href="/#" className="hover:text-[#6953D3]">
          Productos
        </a>
        <a href="#soluciones" className="hover:text-[#6953D3]">
          Soluciones
        </a>
        <a href="/#" className="hover:text-[#6953D3]">
          Tarifas
        </a>
        <a href="#recursos" className="hover:text-[#6953D3]">
          Recursos
        </a>
        <a
          href="https://blog.antaradigital.es/"
          target="_blank"
          className="hover:text-[#6953D3]"
        >
          Blog
        </a>
      </nav>
      
      */}
    </footer>
  );
}
export default MainFooter;
