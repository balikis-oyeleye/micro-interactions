import { IoIosGlobe } from "react-icons/io";
import { IoPersonSharp, IoSearch } from "react-icons/io5";

const Navbar = () => {
  const NAV_LINKS = [
    "Home",
    "Mountains",
    "Constellation",
    "Forest",
    "Offers",
    "Contact",
  ];

  return (
    <header>
      <div className="flex items-center justify-between container mx-auto py-4 text-white px-2">
        <a href="#">
          <div className="flex items-center gap-3">
            <IoIosGlobe className="text-2xl" />
            <span className="font-bold uppercase text-xs  tracking-[0.35rem]">
              globe express
            </span>
          </div>
        </a>
        <div className="flex items-center gap-8">
          <nav>
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li
                  key={link}
                  className="text-sm hover-underline-effect uppercase after:bg-yellow-400"
                >
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-6">
            <button type="button">
              <IoSearch className="text-xl" />
            </button>
            <button type="button">
              <IoPersonSharp className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
