import React from 'react';
import aboutimg from '../../assets/img/header-img.png';

const AboutWarehouse = () => {
    return (
        <div className=" h-[600px] border border-red-500 md:my-4">
        <div className='text-center mt-5 font-semibold'>
        <h3 className='text-3xl md:text-4xl lg:text-5xl'>About Us</h3>
        <p className='px-3 lg:px-16 md:px-12 text-1xl pt-3 leading-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit distinctio perspiciatis placeat provident dicta odit, suscipit dolor, saepe fugit qui rem est deserunt dolorem fuga? Laboriosam dolorem odio est modi alias assumenda ducimus? Delectus quidem</p>
        </div>
        <div href="/" className="flex flex-col items-center justify-center bg-white rounded-lg border mx-auto shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

        

            <div className=''>
            <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={aboutimg} alt="" />
            </div>



            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>



        </div>
        </div>
    );
};

export default AboutWarehouse;