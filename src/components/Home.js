import React from 'react';
import MyImage from "../assets/ProfileImage.png";
import ImageFrame from "../assets/frame4.png";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-white dark:bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='w-3/5 flex flex-col justify-center h-full mr-5'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-gray-500'>I'm a Full Stack Developer</h2>
                    <p className='text-gray-500 py-4 text-justify mx-w-md'>
                        I am a software engineer. Currently, I am looking forward for a position as a junior developer at software company.
                        I can write code in different languages like C, C#, Java, JavaScript, PHP and Python. However, nowadys, I am focusing on full stack developent with HTML, CSS, JavaScript, React, Node, and MongoDB.  
                    </p>
                    <div>
                        <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gray-500 shadow-md shadow-sky-700 dark:shadow-white hover:scale-105 duration-500 cursor-pointer'>
                            Portfolio 
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='h-95 w-2/5 bg-slate-500 bg-contain bg-no-repeat rounded-2xl' style={{backgroundImage: `url(${ImageFrame})`}}>
                    <img src={MyImage} alt="my profile" className='object-auto md:w-full' />
                </div>
            </div>
        </div>
    );
};

export default Home;