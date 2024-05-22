import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "etusivu",
    },
    {
      id: 2,
      link: "lounas",
    },
    {
      id: 3,
      link: "à la carte",
    },
    {
      id: 4,
      link: "välipalat",
    },
    {
      id: 5,
      link: "yhteystiedot",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-white dark:bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2 text-gray-500 dark:text-white">
          Taj Mahal
        </h1>
      </div>
      <hr />
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 mt-4 cursor-pointer capitalize font-normal text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
        <div
          style={{
            borderLeft: "6px solid gray",
            height: "30px",
            marginRight: "12px",
            marginTop: "12px",
          }}
        ></div>
        <li>
          <button className="rounded-sm mt-3 p-1 bg-gray-500 shadow-md shadow-sky-700 dark:shadow-white hover:scale-105 duration-500">
            <a
              href="/resume_shariful_islam_majumdar.pdf"
              download={true}
              target="_blank"
            >
              MENU
            </a>
          </button>
        </li>
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen
                    bg-gradient-to-b from-black to-gray-800 text-gray-500 "
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
