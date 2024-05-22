import React from "react";
import reactFirebase from "../assets/portfolio/reactFirebase.jpg";
import reactRouter from "../assets/portfolio/reactRouter.jpg";
import reactRESTAPI from "../assets/portfolio/reactRESTAPI.jpg";
import reactFakeAPI from "../assets/portfolio/reactFakeAPI.jpg";
import reactTailwind from "../assets/portfolio/reactTailwind.jpg";
import bootstrapLangingPage from "../assets/portfolio/bootstrapLangingPage.jpg";

const Alacarte = () => {
  const portfolios = [
    {
      id: 1,
      src: reactFirebase,
      demo: "",
      code: "https://github.com/sharifmajumdar/react-authentication-bussi-lippu",
    },
    {
      id: 2,
      src: reactRouter,
      demo: "https://bejewelled-faloodeh-97d284.netlify.app/",
      code: "https://github.com/sharifmajumdar/react-router-sharifmajumdar",
    },
    {
      id: 3,
      src: reactRESTAPI,
      demo: "https://ephemeral-beijinho-765154.netlify.app/",
      code: "https://github.com/sharifmajumdar/react-rest-countries",
    },
    {
      id: 4,
      src: reactFakeAPI,
      demo: "https://beautiful-gumdrop-0b74c1.netlify.app/player",
      code: "https://github.com/sharifmajumdar/simple-react-sharifmajumdar",
    },
    {
      id: 5,
      src: reactTailwind,
      demo: "https://glittery-pothos-53aff6.netlify.app/",
      code: "https://github.com/sharifmajumdar/portfolio-sharifmajumdar",
    },
    {
      id: 6,
      src: bootstrapLangingPage,
      demo: "https://sharifmajumdar.github.io/responsive-landingpage-bootstrap/#",
      code: "https://github.com/sharifmajumdar/responsive-landingpage-bootstrap",
    },
  ];

  const handleDemo = (demo) => {
    window.open(demo);
  };

  const handleCode = (code) => {
    window.open(code);
  };
  return (
    <div
      name="à la carte"
      className="bg-white dark:bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-gray-500 font-bold inline border-b-4 border-gray-500">
            À la Carte
          </p>
          <p className="py-6 text-gray-500">
            Here are some of my developments with demo link
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleDemo(demo)}
                  className="w-1/2 px-6 py-3 m-4 text-gray-500 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleCode(code)}
                  className="w-1/2 px-6 py-3 m-4 text-gray-500  duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alacarte;
