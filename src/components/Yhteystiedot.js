import React from "react";

const Yhteystiedot = () => {
  return (
    <div
      name="yhteystiedot"
      className="w-full h-screen bg-white dark:bg-gradient-to-b from-black to to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl text-gray-500 font-bold inline border-b-4 border-gray-500">
            Yhteystiedot
          </p>
          <p className="py-6 text-gray-500">
            Send your query to get in touch with me
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/71dbc174-ada3-4c92-a84e-eea4ec18dca7"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="p-2 border-2 bg-transparent rounded-md text-gray-500 focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Your email"
              className="my-4 p-2 border-2 bg-transparent rounded-md text-gray-500 focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-gray-500 focus:outline-none"
            ></textarea>
            <button
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto
                            flex items-center rounded-md hover:scale-110 duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Yhteystiedot;
