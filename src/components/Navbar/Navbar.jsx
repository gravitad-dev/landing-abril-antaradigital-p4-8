import useNav from "../../hooks/useNav";
import MenuMobile from "./MenuMobile";
import texts from "../../sections.json";

const Navbar = () => {
  const { isOpen, handleIsOpen } = useNav();

  return (
    <div
      className=" flex justify-between px-5 lg:px-10 py-10"
      style={{ backgroundColor: "white" }}
    >
      <div className="flex items-center gap-16">
        <a className=" text-2xl font-bold text-[#1F2937] flex items-center gap-5" href="/#">
          <img src={texts["section-one"].logo} alt="logo" width={70}/>
          <h1>{texts["section-one"].logoName}</h1>
        </a>
        <div className="justify-between hidden md:flex items-center px-4">
          <ul className="flex justify-between  font-semibold  gap-10">
            <li className="hover:text-[#6953D3]">
              <a href="/#">{texts["section-one"].item1}</a>
            </li>
            <li className="hover:text-[#6953D3]">
              <a href="/#">{texts["section-one"].item2}</a>
            </li>
            <li className="hover:text-[#6953D3]">
              <a href="/#">{texts["section-one"].item3}</a>
            </li>
            <li className="hover:text-[#6953D3]">
              <a href="/#">{texts["section-one"].item4}</a>
            </li>
            <li className="hover:text-[#6953D3]">
              <a href="http://blog.antaradigital.es/" target="_blank" rel="noreferrer">{texts["section-one"].item5}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-10 md:flex hidden">
        <a className="text-[#7C3AED] font-semibold" href="/#">
          {texts["section-one"].item6}
        </a>
        <a
          className="flex items-center btn text-white  gap-2 px-10 py-2 rounded-full"
          href="mailto:antaradigital2024@gmail.com" target="_blank" rel="noreferrer"
          style={{ backgroundColor: "#7C3AED" }}
        >
          {texts["section-one"].item7}
        </a>
      </div>
      <MenuMobile isOpen={isOpen} onClick={handleIsOpen} />
    </div>
  );
};
export default Navbar;
