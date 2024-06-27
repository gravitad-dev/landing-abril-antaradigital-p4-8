import texts from "../../sections.json";

function MainFooter() {
  return (
    <footer className="items-center md:p-4 md:px-5 lg:px-20  grid md:grid-cols-2 mt-20">
      <aside className="items-center flex gap-5">
        <div
          className=" text-start "
          style={{
            backgroundColor: "none",
            border: "none",
          }}
        >
          <a className=" text-2xl font-bold text-[#1F2937] flex items-center gap-5 mr-4" href="/#">
          <img src={texts["section-one"].logo} alt="logo" width={70}/>
          <h1>{texts["section-one"].logoName}</h1>
        </a>
        </div>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav className="flex flex-col gap-2 lg:grid grid-cols-5 ">
        <a href="/#" className="hover:text-[#6953D3]">
          Products
        </a>
        <a href="/#" className="hover:text-[#6953D3]">
          Solutions
        </a>
        <a href="/#" className="hover:text-[#6953D3]">
          Pricing{" "}
        </a>
        <a href="/#" className="hover:text-[#6953D3]">
          Resources
        </a>
        <a href="/#" className="hover:text-[#6953D3]">
          Blog
        </a>
      </nav>
    </footer>
  );
}
export default MainFooter;
