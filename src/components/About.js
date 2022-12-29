import React from 'react';

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-grey-500'>About</p>
                </div>
                <p className='text-xl mt-20 text-justify'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consectetur commodi. Maiores sunt enim alias voluptates soluta et earum voluptatem praesentium, doloremque amet quod excepturi, nostrum ipsam eos quam unde aliquid voluptas delectus illo dolorum inventore, aliquam neque voluptatum consequuntur. Doloremque consectetur saepe eum neque distinctio, quae adipisci suscipit quisquam!
                </p>
                <br />
                <p className='text-xl text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odit, quidem repudiandae aliquam similique rem consequatur ipsa blanditiis asperiores explicabo quo atque eaque, vero laborum voluptates, laboriosam sed consectetur soluta modi deleniti dicta. Repudiandae, voluptas! Impedit suscipit qui quis eveniet ipsa itaque ad atque minus, possimus voluptatem aperiam numquam magnam.
                </p>
            </div>
        </div>
    );
};

export default About;