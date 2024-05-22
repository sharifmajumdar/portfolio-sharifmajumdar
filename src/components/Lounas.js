import React from "react";

const Lounas = () => {
  return (
    <div
      name="lounas"
      className="w-full h-screen bg-white dark:bg-gradient-to-b from-gray-800 to-black text-gray-500"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-gray-500 font-bold inline border-b-4 border-grey-900">
            Lounas
          </p>
        </div>
        <p className="text-xl mt-20 text-justify">
          I am originally from Bangladesh. Currently, I have been living in
          Finland for 6-year. Moreover, I have completed my bachelor degree in
          Software Engineering from the Daffodil International University, and
          master's degree in Information Technology from the University of
          Eastern Finland, Finland.
        </p>
        <br />
        <p className="text-xl text-justify">
          During my study period, I have been introduced with various
          programming languages like C, C++, C#, Java, JavaScript, PHP, Python,
          and so no. However, after completing my master's degree, I am focusing
          on JavaScript particularly, because of being mastering with one
          language to get a job.
        </p>
        <p className="text-xl text-justify mt-6">
          I like to spend my leisure time by surfing internet especially
          watching youtube videos. However, my ultimate goal is to find a job in
          software company, and become a full stack developer. Beside that, my
          dream is to get the finnish nationality - most happiest country over
          the world.
        </p>
      </div>
    </div>
  );
};

export default Lounas;
